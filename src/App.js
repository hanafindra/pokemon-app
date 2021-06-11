import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql/Settings";

import MyPokemon from "./pages/MyPokemon";
import PokemonDetail from "./pages/PokemonDetail";
import PokemonList from "./pages/PokemonList";
import NotFound from "./pages/404";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import "./App.css";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Content>
        <Navbar />
          <Switch>
            <Route exact path='/' component={PokemonList} />
            <Route rxact path='/pokemon/:name' component={PokemonDetail} />
            <Route exact path='/inventory' component={MyPokemon} />
            <Route component={NotFound} />
          </Switch>
        </Content>
      </Router>
    </ApolloProvider>
  );
}

export default App;
