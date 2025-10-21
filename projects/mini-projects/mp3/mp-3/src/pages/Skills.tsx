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

export default function Skills() {
    return (
        <StyledMain>
            <StyledH2>Skills</StyledH2>
            <h3>Programming Languages</h3>
            <ul>
                <li>Python</li>
                <li>Java</li>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>HTML/CSS</li>
                <li>Go</li>
                <li>OCaml</li>
                <li>SQL</li>
            </ul>
            <br />
            <br />
            <h3>Frameworks & Libraries</h3>
            <ul>
                <li>Flask</li>
                <li>Django</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Next.js</li>
                <li>Pandas</li>
                <li>Docker</li>
                <li>Git</li>
            </ul>
            <br />
            <br />
            <h3>Machine Learning and AI</h3>
            <ul>
                <li>Tensorflow</li>
                <li>Pytorch</li>
                <li>OpenCV</li>
                <li>OCR</li>
                <li>Sci-kit Learn</li>
            </ul>
            <br />
            <br />
            <h3>Databases</h3>
            <ul>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
            </ul>
        </StyledMain>
    );
}
