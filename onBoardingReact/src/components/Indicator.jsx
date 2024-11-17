import styled from 'styled-components';

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

const IndicatorContainer = styled.div`
  display: flex;
  gap: 8px; 
  margin-top: 20px;
`;

const StepIndicator = styled.div`
  height: 7px;
  width: ${({ isCurrent }) => (isCurrent ? '22px' : '7px')}; 
  background-color: ${({ isCurrent }) => (isCurrent ? '#808080' : '#E0E0E0')}; 
  border-radius: ${({ isCurrent }) => (isCurrent ? '10px' : '50%')}; 
  transition: all 0.3s ease;
`;

