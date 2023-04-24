import React from "react";
import styled from "styled-components";
import FadeInSection from "./FadeInSection";

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
`;

const Content = styled.div`
  flex: 1;
`;

const Screenshot = styled.img`
  width: 50%;
  max-width: 600px;
`;

interface AppSectionProps {
  title: string;
  description: string;
  screenshotUrl: string;
}

const AppSection: React.FC<AppSectionProps> = ({ title, description, screenshotUrl }) => {
  return (
    <Section>
      <FadeInSection>
        <Content>
          <h2>{title}</h2>
          <p>{description}</p>
        </Content>
      </FadeInSection>
      <FadeInSection>
        <Screenshot src={screenshotUrl} alt={title} />
      </FadeInSection>
    </Section>
  );
};

export default AppSection;
