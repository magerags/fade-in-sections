// components/ParallaxSection.tsx

import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
`;

const Content = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.5s;
`;

const Screenshot = styled.img`
  width: 50%;
  max-width: 600px;
`;

interface ParallaxSectionProps {
  title: string;
  description: string;
  screenshotUrl: string;
  index: number;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ title, description, screenshotUrl, index }) => {
  const [isVisible, setIsVisible] = useState(index === 0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollTop = window.pageYOffset;
      const offset = 100;

      const isVisibleNow =
        scrollTop + offset >= windowHeight * index && scrollTop - offset <= windowHeight * (index + 1);
      setIsVisible(isVisibleNow);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [index]);

  return (
    <Section>
      <Content style={isVisible ? { opacity: 1 } : { opacity: 0 }}>
        <h2>{title}</h2>
        <p>{description}</p>
        <Screenshot src={screenshotUrl} alt={title} />
      </Content>
    </Section>
  );
};

export default ParallaxSection;
