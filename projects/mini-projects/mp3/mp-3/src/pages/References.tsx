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

export default function References() {
    return (
        <StyledMain>
            <StyledH2>References</StyledH2>
            <p>
                <strong>Name:</strong> Arhan Sheth
            </p>
            <br />
            <p>
                <strong>Email:</strong> aksheth@bu.edu
            </p>
            <br />
            <p>
                <strong>Contact Number:</strong> +1 (202)280-8600
            </p>
            <br />
            <p>Email me to know more about credits</p>
        </StyledMain>
    );
}
