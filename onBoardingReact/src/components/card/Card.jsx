import React from 'react';
import { SectionCard, CardContainer,CardImage, ImageContainer,Content,CardTitle, CardDescription, ButtonContainer,StepButton, IndicatorContainer,NavButtons } from './stylesCard.jsx'
import { Indicator } from '../indicator/Indicator';

export const Card = ({
  title,
  description,
  bgColor,
  image,
  nextStep,
  prevStep,
  step,
  totalSteps,
}) => {
  return (
    <SectionCard>
      <CardContainer bgColor={bgColor}>
        <ImageContainer>
          <CardImage src={image} alt={title} />
        </ImageContainer>
        <Content>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <ButtonContainer>
            <IndicatorContainer>
              <Indicator currentStep={step} totalSteps={totalSteps} />
            </IndicatorContainer>
            <NavButtons>
              {step > 0 && <StepButton onClick={prevStep}>←</StepButton>}
              {step < totalSteps - 1 && <StepButton onClick={nextStep}>→</StepButton>}
            </NavButtons>
          </ButtonContainer>
        </Content>
      </CardContainer>
    </SectionCard>
  );
};

