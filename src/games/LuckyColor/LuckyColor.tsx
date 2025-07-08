import {
  GambaUi,
  TokenValue,
  useCurrentPool,
  useSound,
  useWagerInput,
} from "gamba-react-ui-v2";

import React from "react";
import {
  SOUND_LOSE,
  SOUND_PLAY,
  SOUND_TICK,
  SOUND_WIN,
} from "../Dice/constants";
import { Container, Stats } from "../Dice/styles";

const COLORS = ["Red", "Green", "Blue"];

export default function LuckyColor() {
  const gamba = GambaUi.useGame();

  const [wager, setWager] = useWagerInput();
  const pool = useCurrentPool();

  const [selectedColor, setSelectedColor] = React.useState<string | null>(null);
  const [resultColor, setResultColor] = React.useState<string | null>(null);
  const sounds = useSound({
    win: SOUND_WIN,
    play: SOUND_PLAY,
    lose: SOUND_LOSE,
    tick: SOUND_TICK,
  });

  const play = async () => {
    sounds.play("play");

    const selectedIndex = COLORS.indexOf(selectedColor);
    const bet = [0, 0, 0];
    bet[selectedIndex] = 3;

    await gamba.play({
      wager,
      bet,
    });

    const result = await gamba.result();
    const outcomeIndex = result.resultIndex;
    const colorResult = COLORS[outcomeIndex];

    setResultColor(colorResult);
    result.payout > 0 ? sounds.play("win") : sounds.play("lose");
  };

  return (
    <>
      <GambaUi.Portal target="screen">
        <GambaUi.Responsive>
          <Container>
            <h2 style={{ textAlign: "center" }}>🎨 Lucky Color</h2>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                marginBottom: "1rem",
              }}
            >
              {COLORS.map((color) => (
                <button
                  key={color}
                  onClick={() => {
                    setSelectedColor(color);
                    sounds.play("tick");
                  }}
                  style={{
                    padding: "0.75rem 1.25rem",
                    borderRadius: 8,
                    background: selectedColor === color ? "#9564ff" : "#222",
                    color: "white",
                    border: "2px solid #444",
                    cursor: "pointer",
                  }}
                >
                  {color}
                </button>
              ))}
            </div>

            {resultColor && (
              <h3 style={{ textAlign: "center", color: "red" }}>
                🎯 Result: <span style={{ color: "#0ff" }}>{resultColor}</span>
              </h3>
            )}

            <Stats>
              <div>
                <div>33%</div>
                <div>Win Chance</div>
              </div>
              <div>
                <div>3.00x</div>
                <div>Multiplier</div>
              </div>
              <div>
                <TokenValue suffix="" amount={wager * 3} />
                <div>Payout</div>
              </div>
            </Stats>
          </Container>
        </GambaUi.Responsive>
      </GambaUi.Portal>

      <GambaUi.Portal target="controls">
        <GambaUi.WagerInput value={wager} onChange={setWager} />
        <GambaUi.PlayButton disabled={!selectedColor} onClick={play}>
          Play
        </GambaUi.PlayButton>
      </GambaUi.Portal>
    </>
  );
}
