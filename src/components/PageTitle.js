import styled from "@emotion/styled";

const StyledPageTitle = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  margin: 0 0 10px;
  text-align: center;
  .nav {
    margin: 0 0 20px;
    background: #cd835a;
    color: #fff;
    border-radius: 5px;
    grid-column: span 8;
    font-size: 1.2em;
    padding: 10px;
  }
`;

const PageTitle = ({title}) => {
  return (
    <StyledPageTitle>
      <div className='nav'>{title}</div>
    </StyledPageTitle>
  );
};

export default PageTitle;
