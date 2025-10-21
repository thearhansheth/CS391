import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from '../pages/Home';
import Education from '../pages/Education';
import WorkExperience from '../pages/WorkExperience';
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';
import References from '../pages/References';

const StyledEdgeWrapper = styled.div`
  max-width: 1000px;
  width: 90%;
  margin: 0 auto;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    text-align: center;
  }
`;

export default function Root() {
    return (
        <StyledEdgeWrapper>
            <Header />
            <StyledContainer>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/work-experience" element={<WorkExperience />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/references" element={<References />} />
                </Routes>
            </StyledContainer>
            <Footer />
        </StyledEdgeWrapper>
    );
}
