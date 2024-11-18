import styled from 'styled-components';


export const SectionCard = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 700px;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0px 2px 4px rgb(0 0 0 / 15%);
  background-color: ${({ bgColor }) => bgColor || '#fff'};
  position: relative;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 60%;
  overflow: hidden;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  padding: 30px;
  box-sizing: border-box;
`;

export const Content = styled.div`
  background-color: #fff;
  padding: 20px;
  height: 35%;
`;

export const CardTitle = styled.h2`
  font-size: larger;
  margin-top: 10px;
  color: #333;
`;

export const CardDescription = styled.p`
  font-size: large;
  margin-top: 10px;
  color: #666;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 50px;
`;

export const IndicatorContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavButtons = styled.div`
  display: flex;
  gap: 10px;
`;

export const StepButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #343a40;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: #fff;
    color: #343a40;
    border: 2px solid #343a40;
  }
`;
