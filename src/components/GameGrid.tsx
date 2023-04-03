import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameSkeleton from "./GameSkeleton";

const GameGrid = () => {
  const { error, games, isLoading } = useGames();
  const skeletonArray = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid
        spacing={3}
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={2}
      >
        {isLoading &&
          skeletonArray.map((skeleton) => <GameSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
