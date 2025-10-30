import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import AppHeading from "./components/AppHeading";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import Navbar from "./components/Navbar";
import PlatformList from "./components/PlatformList";
import useGameQueryStore from "./stores/useAppStore";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX="10px">
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2} marginBottom={2}>
          <AppHeading />
          <PlatformList />
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
