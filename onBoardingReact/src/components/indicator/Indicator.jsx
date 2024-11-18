import {IndicatorContainer, StepIndicator} from './stylesInd.jsx';

export const Indicator = ({ currentStep, totalSteps }) => {
  return (
    <IndicatorContainer>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <StepIndicator
          key={index}
          isCurrent={index === currentStep} 
        />
      ))}
    </IndicatorContainer>
  );
};

