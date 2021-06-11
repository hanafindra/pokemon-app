import styled from "@emotion/styled";

const Button = styled.div`
  background: rgb(32 180 156);
  border-radius: 5px;
  box-shadow: 5px 10px 8px #4a4a4a;
  color: #fff;
  /* margin: ${(props) => (props.confirmation ? "20px" : "0 70px 35px")}; */
  padding: 10px 15px;
  text-align: center;
  margin: 20px 0px;
  
  .title {
    color: #fff;
    font-weight: 600;
    font-size: ${(props) => (props.primary ? "1.6em" : "1.1em")};
    text-transform: capitalize;
  }
  :hover {
    box-shadow: 0rem 0rem 0 #222;
    border: 2px solid black;
    cursor: pointer;
    .title {
      color: rgba(234, 52, 87, 1);
    }
  }
`;

export default Button;
