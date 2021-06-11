import styled from "@emotion/styled";

const Title = styled.div`
  margin: 0 0 20px;
  background: #cd835a;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0rem 0.7rem 0 #a2613d;
  padding: 10px;
  text-align: center;
  .title {
    font-weight: 600;
    font-size: ${(props) => (props.primary ? "1.6em" : "1.1em")};
    text-transform: capitalize;
  }
`;

export default Title;
