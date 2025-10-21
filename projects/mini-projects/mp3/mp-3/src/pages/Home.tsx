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

const StyledImg = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto 20px auto;
`;

export default function Home() {
    return (
        <StyledMain>
            <StyledH2>Home</StyledH2>
            <StyledImg src="../../public/resume_img.jpeg" alt="Arhan" />
            <p>
                My name is Arhan, and I am a dual degree candidate at Boston University.
                I am majoring in Computer Science and Business Administration
                (Concentrating in Finance). My interests include swe, AI/ML, and data
                analysis. As a rising senior, I am weighing up my options in both the
                industry and potentially, a master's degree to further my academic and
                personal prowess.
            </p>
            <br />
            <br />
            <p>
                Welcome to my website. Here you will find my{' '}
                <a href="/education">Education</a> and{' '}
                <a href="/work-experience">Work Experience</a> details.
            </p>
        </StyledMain>
    );
}