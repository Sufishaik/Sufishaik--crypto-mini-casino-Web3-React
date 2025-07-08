import React from "react";
import styled from "styled-components";
import { SlideSection } from "../../components/Slider";
import { GAMES } from "../../games";
import { GameCard } from "./GameCard";
import { WelcomeBanner } from "./WelcomeBanner";
import { Link } from "react-router-dom";

export function GameSlider() {
  return (
    <SlideSection>
      {GAMES.map((game) => (
        <div key={game.id} style={{ width: "160px", display: "flex" }}>
          <GameCard game={game} />
        </div>
      ))}
    </SlideSection>
  );
}

const Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  @media (min-width: 600px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (min-width: 800px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export function GameGrid() {
  return (
    <Grid>
      {GAMES.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </Grid>
  );
}

export default function Dashboard() {
  return (
    <>
      <WelcomeBanner />
      <div style={{ textAlign: "center", margin: "1.5rem 0" }}>
        <Link
          to="/product"
          style={{
            background: "#9564ff",
            padding: "0.75rem 1.5rem",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          🚀 View Our Featured Product
        </Link>
      </div>

      <h2 style={{ textAlign: "center" }}>Game</h2>
      <GameGrid />
    </>
  );
}
