import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
  padding: 3rem 1.5rem;
  max-width: 1200px;
  margin: auto;
  color: white;
`;

const Header = styled.header`
  text-align: center;
  animation: ${fadeIn} 0.6s ease-out;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  background: linear-gradient(90deg, #7b2ff7, #f107a3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
`;

const Tagline = styled.p`
  font-size: 1.25rem;
  color: #ccc;
`;

const Image = styled.img`
  width: 100%;
  max-width: 500px;
  margin: 2rem auto;
  display: block;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
`;

const FeaturesSection = styled.section`
  margin-top: 4rem;
  animation: ${fadeIn} 0.7s ease-out;
`;

const FeaturesGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const FeatureCard = styled.div`
  background: #1c1c1e;
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background: #2a2a2c;
  }

  h3 {
    margin-top: 0.5rem;
    font-size: 1.2rem;
  }

  p {
    color: #aaa;
    font-size: 0.95rem;
    margin-top: 0.5rem;
  }
`;

const Testimonials = styled.div`
  margin: 4rem 0;
  animation: ${fadeIn} 0.8s ease-out;
`;

const Testimonial = styled.div`
  background: #151515;
  border-left: 4px solid #9564ff;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-radius: 8px;
`;

const GameSection = styled.div`
  margin-top: 5rem;
  padding: 2rem;
  background: #111;
  border-radius: 12px;
  animation: ${fadeIn} 1s ease-out;
`;

const Footer = styled.footer`
  text-align: center;
  margin-top: 3rem;
  font-size: 0.9rem;
  opacity: 0.6;
`;

export default function ProductLandingPage() {
  return (
    <Container>
      <Header>
        <Title>🎲 Gamba Dice Pro</Title>
        <Tagline>The future of decentralized gaming is here</Tagline>
      </Header>

      <Image
        src="https://images.unsplash.com/photo-1614289329695-7a012f1e9ff3?auto=format&fit=crop&w=1050&q=80"
        alt="Gamba Dice Pro"
      />

      <FeaturesSection>
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
          🚀 Features
        </h2>
        <FeaturesGrid>
          <FeatureCard>
            <img
              src="https://cdn-icons-png.flaticon.com/512/103/103500.png"
              width="40"
              alt="Instant"
            />
            <h3>⚡ Instant Bets</h3>
            <p>Experience real-time, zero-delay wagering on-chain.</p>
          </FeatureCard>
          <FeatureCard>
            <img
              src="https://cdn-icons-png.flaticon.com/512/984/984166.png"
              width="40"
              alt="Fairness"
            />
            <h3>🎯 Fair by Design</h3>
            <p>Powered by provably fair Gamba protocol.</p>
          </FeatureCard>
          <FeatureCard>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png"
              width="40"
              alt="Web3"
            />
            <h3>🧠 Web3 Native</h3>
            <p>No login. Just connect your wallet and play.</p>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>

      <Testimonials>
        <h2 style={{ textAlign: "center" }}>💬 What People Say</h2>
        <Testimonial>
          “This is the most exciting product I’ve used on Solana. It’s fast,
          slick, and fair.”
          <br />— <strong>Ana, DeFi Gamer</strong>
        </Testimonial>
        <Testimonial>
          “Loved how I can test out the game without leaving the landing page!”
          <br />— <strong>Raj, Web3 Enthusiast</strong>
        </Testimonial>
      </Testimonials>

      <GameSection>
        <Link to="/dice">
          <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            🎮 Try Gamba Dice Now
          </h2>
        </Link>
      </GameSection>

      <Footer>
        &copy; 2025 Gamba Labs. All rights reserved. | Contact:
        team@gambagames.xyz
      </Footer>
    </Container>
  );
}
