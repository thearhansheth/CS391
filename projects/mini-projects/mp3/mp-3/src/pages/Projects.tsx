import styled from 'styled-components';
import Calculator from '../components/Calculator';

const StyledMain = styled.main`
  background-color: lightsalmon;
  min-height: 100vh;
  width: 70%;
  padding: 20px;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const StyledH2 = styled.h2`
  text-align: center;
`;

export default function Projects() {
    return (
        <StyledMain>
            <StyledH2>Projects</StyledH2>
            <Calculator />
        </StyledMain>
    );
}