import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { Genres } from "../hooks/useGenres";
import GameCard from "./GameCard";
import GameSkeleton from "./GameSkeleton";

interface Props {
  selectedGenre: Genres | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { error, games, isLoading } = useGames(selectedGenre, {
    params: { genres: selectedGenre?.id },
  });
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
