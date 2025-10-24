import { SimpleGrid } from "@chakra-ui/react";
import { Query } from "../App";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameSkeleton from "./GameSkeleton";

interface Props {
  gameQuery: Query;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { error, data, isLoading } = useGames(gameQuery);
  // const skeletonArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const skeletonArray = Array.from({ length: 15 }, (_ele, idx) => idx + 1);
  return (
    <>
      {error && <p>{error.message}</p>}
      <SimpleGrid
        spacing={3}
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={2}
      >
        {isLoading &&
          skeletonArray.map((skeleton) => <GameSkeleton key={skeleton} />)}
        {data?.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
