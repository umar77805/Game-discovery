import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { error, games } = useGames();
  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid
        spacing={5}
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={2}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
