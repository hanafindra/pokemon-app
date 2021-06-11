import styled from "@emotion/styled";

const Detail = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(6, 1fr);
  margin-bottom: 20px;
  background: #d4ad98;
  padding: 15px;
  margin-top: -20px;
  .card {
    background: #ffffff;
    border-radius: 10px;
    grid-column: span 3;
    padding: 10px;
    p {
      text-transform: capitalize;
    }
  }
  @media screen and (max-width: 959px) and (min-width: 620px) {
    .card {
      grid-column: span 2;
    }
  }
`;

export default Detail;
