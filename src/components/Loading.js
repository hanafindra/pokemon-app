import styled from "@emotion/styled";
import pokeball from "../assets/pokeball.png";

const StyledLoading = styled.div`
  position: fixed;
  top: 50%;
  left: 45%;
  .pokemon-ball {
    width:20%;
    top: 50%;
  }
`;

const Loading = () => {
  return (
    <StyledLoading>
      <img src={pokeball} alt='pokeball' className="pokemon-ball"/>
    </StyledLoading>
  );
};

export default Loading;
