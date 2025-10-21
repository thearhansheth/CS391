import styled from 'styled-components';

const StyledHeader = styled.header`
  background: darkseagreen;
`;

const StyledH1 = styled.h1`
  margin: 0;
`;

const StyledP = styled.p`
  margin: 0;
`;

export default function Header(){
    return (
        <StyledHeader>
            <StyledH1>Arhan's Resume</StyledH1>
            <StyledP>My Online Resume</StyledP>
        </StyledHeader>
    );
};