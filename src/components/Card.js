import styled from "@emotion/styled";

const StyledCard = styled.div`
  background: #ffffff;
  border-radius: 7px;
  box-shadow: 0rem 0.7rem 0 #a2613d;
  font-weight: 400;
  grid-column: span 4;
  padding: 10px;
  text-align: center;
  .card-image {
    width: 85%;
    background: #f5e7c6;
    border-radius: 10px;
    padding: 10px;
  }
  .card-name {
    text-transform: capitalize;
    font-size: 1.2em;
    margin: 10px 0 0;
  }
  .card-owned {
    color: rgba(234, 52, 87, 1);
    margin: 20px;
  }
  .card-btn {
    background: rgb(32 180 156);
    border-radius: 5px;
    box-shadow: 3px 5px 8px #4a4a4a;
    color: #fff;
    margin: 20px 0;
    padding: 7px 15px;
    text-align: center;
    :hover {
      box-shadow: 0.1rem 0.1rem 0 #222;
      cursor: pointer;
    }
  }
  @media screen and (min-width: 620px) {
    grid-column: span 3;
  }
  :hover {
    border: 2px solid black;
    box-shadow: 0rem 0rem 0 #222;
    cursor: pointer;
  }
`;

const Card = ({ id, name, image, goToDetail, getOwned, onClickRelease }) => {
  return (
    <>
      {id === "pokemon-list" ? (
        <StyledCard onClick={() => goToDetail(name)}>
          <img src={image} className='card-image' alt={`${name}`} width="50px"/>
          <p className='card-name'>{name}</p>
          <p className='card-owned'>Owned: {getOwned(name)}</p>
        </StyledCard>
      ) : (
        <StyledCard>
          <img src={image} className='card-image' alt={`${name}`} />
          <p className='card-name'>{name}</p>
          <button className='card-btn' onClick={() => onClickRelease(name)}>
            Release
          </button>
        </StyledCard>
      )}
    </>
  );
};

export default Card;
