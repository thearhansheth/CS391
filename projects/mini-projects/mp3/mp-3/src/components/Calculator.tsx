import styled from 'styled-components';
import useCalculator from '../hooks/useCalculator';

const StyledCalculatorDiv = styled.div`
    text-align: center;
    margin: 40px auto;
    max-width: 350px;
    background: wheat;
    padding: 20px;
    border: 3px solid black;
    border-radius: 10px;
`;

const StyledH2 = styled.h2`
  margin-bottom: 20px;
  font-size: 1.5rem;
  color: darkred;
`;

const StyledLabel = styled.label`
  display: block;
`;

const StyledInput = styled.input`
  width: 80%;
  height: 40px;
  margin: 10px 0;
  text-align: center;
  font-size: 18px;
  border: 2px solid black;
  border-radius: 6px;
`;

const StyledCalcButtonsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  max-width: 200px;
  margin: 20px auto;
`;

const StyledButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid black;
  background: orange;
  color: black;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: darkorange;
    color: white;
  }
`;

const StyledResultDiv = styled.div<{ $isNegative: boolean }>`
  width: 80%;
  height: 50px;
  margin: 15px auto;
  background: lightcoral;
  color: ${(props) => (props.$isNegative ? 'red' : 'black')};
  border: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  border-radius: 6px;
`;

const StyledClearButton = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  background: darkseagreen;
  border: 2px solid black;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  border-radius: 6px;

  &:hover {
    background: seagreen;
    color: white;
  }
`;

export default function Calculator() {
    const { num1, num2, result, setNum1, setNum2, calculate, clear } = useCalculator();

    return (
        <StyledCalculatorDiv>
            <StyledH2>Calculator</StyledH2>
            <StyledLabel htmlFor="num1">Enter Number 1</StyledLabel>
            <StyledInput
                type="text"
                id="num1"
                placeholder="0"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />
            <br />
            <StyledLabel htmlFor="num2">Enter Number 2</StyledLabel>
            <StyledInput
                type="text"
                id="num2"
                placeholder="0"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            />
            <StyledCalcButtonsDiv>
                <StyledButton onClick={() => calculate('add')}>+</StyledButton>
                <StyledButton onClick={() => calculate('subtract')}>-</StyledButton>
                <StyledButton onClick={() => calculate('multiply')}>×</StyledButton>
                <StyledButton onClick={() => calculate('divide')}>÷</StyledButton>
                <StyledButton onClick={() => calculate('power')}>^</StyledButton>
            </StyledCalcButtonsDiv>
            <StyledResultDiv $isNegative={result < 0}>
                {result}
            </StyledResultDiv>
            <StyledClearButton onClick={clear}>
                clear
            </StyledClearButton>
        </StyledCalculatorDiv>
    );
}