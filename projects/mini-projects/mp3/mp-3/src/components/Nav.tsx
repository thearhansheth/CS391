import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  background-color: wheat;
  width: 30%;
  text-align: center;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const StyledUl = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1000px) {
    flex-direction: row;
  }
`;

const StyledLi = styled.li`
  border: 2px solid black;
  margin: 3% 0;
  width: 80%;
  padding: 2%;
  background: #ffcc66;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: calc(2px + 2vw);
  font-weight: bold;
`;

export default function Nav() {
    return (
        <StyledNav>
            <StyledUl>
                <StyledLi><StyledLink to="/">Home</StyledLink></StyledLi>
                <StyledLi><StyledLink to="/education">Education</StyledLink></StyledLi>
                <StyledLi><StyledLink to="/work-experience">Work Experience</StyledLink></StyledLi>
                <StyledLi><StyledLink to="/projects">Projects</StyledLink></StyledLi>
                <StyledLi><StyledLink to="/skills">Skills</StyledLink></StyledLi>
                <StyledLi><StyledLink to="/references">References</StyledLink></StyledLi>
            </StyledUl>
        </StyledNav>
    );
}