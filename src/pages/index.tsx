// pages/index.tsx

import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  min-height: 200vh;
`;

const Title = styled.h1<{ fadeDirection: "up" | "down"; isVisible: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.5s, transform 0.5s;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible, fadeDirection }) => {
    if (isVisible) {
      return "translate(-50%, -50%)";
    } else {
      return fadeDirection === "up" ? "translate(-50%, -70%)" : "translate(-50%, -30%)";
    }
  }};
`;

const HomePage: React.FC = () => {
  const [currentTitle, setCurrentTitle] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollTop = window.pageYOffset;

      const nextTitle = scrollTop + windowHeight / 2 >= windowHeight ? 2 : 1;
      setCurrentTitle(nextTitle);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <Title fadeDirection="up" isVisible={currentTitle === 1}>
        Title 1
      </Title>
      <Title fadeDirection="down" isVisible={currentTitle === 2}>
        Title 2
      </Title>
    </Container>
  );
};

export default HomePage;
