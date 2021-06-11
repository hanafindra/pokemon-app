import styled from "@emotion/styled";

const StyledInput = styled.input`
  background: #fff;
  border-radius: 10px;
  /* box-shadow: 0.3rem 0.3rem 0 #222; */
  margin: 10px 70px 20px;
  padding: 10px 15px;
  &:focus {
    outline: none;
  }
  @media screen and (min-width: 620px) {
    width: 70%;
    margin: 10px auto 20px;
  }
`;

const Input = ({ handleChange }) => {
  return (
    <StyledInput type='text' onChange={(e) => handleChange(e.target.value)} />
  );
};

export default Input;
