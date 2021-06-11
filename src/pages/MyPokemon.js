import { useEffect, useState } from "react";
import styled from "@emotion/styled";

import Button from "../components/Button";
import Card from "../components/Card";
import Notif from "../components/Notif";
import PageTitle from "../components/PageTitle";

const StyledPokemonList = styled.div`
  padding: 30px 20px;
  min-height: 100vh;
  .grid {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    margin: 0 0 40px;
    gap: 10px;
  }
  .loader {
    text-align: center;
  }
  @media screen and (min-width: 620px) {
    .grid {
      grid-template-columns: repeat(9, 1fr);
    }
  }
  @media screen and (min-width: 960px) {
    .grid {
      grid-template-columns: repeat(12, 1fr);
    }
  }
`;

const MyPokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [nickname, setNickName] = useState();
  const [screen, setScreen] = useState("default");

  function onClickRelease(data) {
    setScreen("confirmation");
    setNickName(data);
  }

  function handleRelease(name) {
    let inventory = JSON.parse(localStorage.getItem("pokemon"));
    let result = inventory.filter((inv) => inv.nickname !== name);
    localStorage.setItem("pokemon", JSON.stringify(result));
    window.location.reload(true);
  }

  useEffect(() => {
    localStorage.getItem("pokemon")
      ? setPokemons(JSON.parse(localStorage.getItem("pokemon")))
      : setPokemons([]);
  }, []);

  return (
    <>
      {screen === "confirmation" ? (
        <Notif>
          <p>{`Are you sure you want to release ${nickname} ?`}</p>
          <br />
          <Button confirmation onClick={() => handleRelease(nickname)}>
            Yes
          </Button>
          <Button confirmation onClick={() => setScreen("default")}>
            No
          </Button>
        </Notif>
      ) : pokemons.length !== 0 ? (
        <StyledPokemonList>
          <PageTitle title='My Pokemon List' />
          <div className='grid'>
            {pokemons.map((pokemon) => (
              <Card
                id='my-pokemon'
                key={pokemon.nickname}
                name={pokemon.nickname}
                image={pokemon.sprites.front_default}
                onClickRelease={onClickRelease}
              />
            ))}
          </div>
        </StyledPokemonList>
      ) : (
        <Notif>
          <p>{`Your Inventory is Empty`}</p>
        </Notif>
      )}
    </>
  );
};

export default MyPokemon;
