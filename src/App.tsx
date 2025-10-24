import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import AppHeading from "./components/AppHeading";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import Navbar from "./components/Navbar";
import PlatformList from "./components/PlatformList";
import { Platform } from "./hooks/usePlatforms";
import { Genres } from "./hooks/useGenres";

export interface Query {
  genre: Genres | null;
  platform: Platform | null;
  search: string;
}

function App() {
  const [query, setQuery] = useState<Query>({
    genre: null,
    platform: null,
  } as Query);

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
        <Navbar
          onValue={(searchText) => setQuery({ ...query, search: searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX="10px">
          <GenreList
            selectedGenre={query.genre}
            onSeletedGenre={(genre) => setQuery({ ...query, genre })}
            onReset={() =>
              query.genre !== null ? setQuery({ ...query, genre: null }) : null
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2} marginBottom={2}>
          <AppHeading query={query} />
          <PlatformList
            onSelectedPlatform={(platform) => setQuery({ ...query, platform })}
            onReset={() => setQuery({ ...query, platform: null })}
          />
        </Box>
        <GameGrid gameQuery={query} />
      </GridItem>
    </Grid>
  );
}

export default App;
