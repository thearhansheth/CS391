import styled from 'styled-components';

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

export default function Education() {
    return (
        <StyledMain>
            <StyledH2>Education</StyledH2>
            <h3>Boston University, Boston, MA</h3>
            <p>
                <strong>Dual Degree:</strong> B.A Computer Science and B.S Business
                Administration (Concentrating in Finance)
            </p>
            <br />
            <p>
                <em>
                    <u>Expected Graduation: May 2026</u>
                </em>
            </p>
            <br />
            <ul>
                <li>
                    Relevant Coursework: Data Structures, Intro to AI, Web Development,
                    Machine Learning for Business Outcomes, Probability in Computing
                </li>
                <li>Dean's List: Fall 2024 and Spring 2025</li>
                <li>Clubs: Hack4Impact@BU, Fintech BU</li>
            </ul>
        </StyledMain>
    );
}
