import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";

import { GET_POKEMON_LIST } from "../graphql/Queries";
import Button from "../components/Button";
import Card from "../components/Card";
import Loading from "../components/Loading";
import PageTitle from "../components/PageTitle";

const StyledPokemonList = styled.div`
  padding: 30px 20px;
  .grid {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 20px;
   Loadinground: #d4ad98;
    padding: 15px;
    margin-top: -33px;
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

const PokemonList = () => {
  const history = useHistory();
  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit] = useState(12);

  const { loading, data } = useQuery(GET_POKEMON_LIST, {
    variables: {
      limit,
      offset: 0,
    },
  });

  function goToDetail(name) {
    history.push(`pokemon/${name}`);
  }

  function getOwned(name) {
    let inventory = localStorage.getItem("pokemon");
    if (inventory) {
      let owned = 0;
      inventory = JSON.parse(inventory);
      inventory.map((inv) => {
        if (inv.name === name) {
          owned = owned + 1;
        }
      });
      return owned;
    } else return 0;
  }

  useEffect(() => {
    data && setPokemons(data.pokemons.results);
  }, [data]);

  return (
    <>
      {pokemons !== null ? (
        <StyledPokemonList>
          <PageTitle title='All Pokemon' />
          <div className='grid'>
            {pokemons.map((pokemon) => (
              <Card
                pokemonlist
                id={'pokemon-list'}
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
                image={pokemon.image}
                goToDetail={goToDetail}
                getOwned={getOwned}
              />
            ))}
          </div>
          {!loading && (
            <div className='loader'>
              <Button onClick={() => setLimit(limit + 12)}>Load More</Button>
            </div>
          )}
        </StyledPokemonList>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default PokemonList;
