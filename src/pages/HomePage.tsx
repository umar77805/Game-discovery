import { Box, Grid, Show, GridItem } from "@chakra-ui/react";
import AppHeading from "../components/AppHeading";
import GameGrid from "../components/GameGrid";
import GenreList from "../components/GenreList";
import PlatformList from "../components/PlatformList";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <Show when="lg">
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
};

export default HomePage;
