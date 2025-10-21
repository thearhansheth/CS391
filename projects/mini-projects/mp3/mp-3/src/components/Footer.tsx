import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background: darkseagreen;
  padding: 10px;
  text-align: center;
`;

const StyledP = styled.p`
  margin: 0;
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: underline;
`;

export default function Footer() {
    return (
        <StyledFooter>
            <StyledP>
                All rights reserved by Arhan Sheth{' '}
                <StyledLink to="/references">Credits</StyledLink> &copy;
            </StyledP>
        </StyledFooter>
    );
}