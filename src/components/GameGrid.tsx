import { Box, Button, SimpleGrid, Spinner } from "@chakra-ui/react";
import { Fragment } from "react";
import { Query } from "../App";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameSkeleton from "./GameSkeleton";

interface Props {
  gameQuery: Query;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { error, data, status, fetchNextPage, isFetchingNextPage } =
    useGames(gameQuery);
  // const skeletonArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const skeletonArray = Array.from({ length: 15 }, (_ele, idx) => idx + 1);
  return (
    <Box padding={2}>
      {error && <p>{error.message}</p>}
      <SimpleGrid spacing={3} columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}>
        <>
          {status === "pending" &&
            skeletonArray.map((skeleton) => <GameSkeleton key={skeleton} />)}
          {data && data.pages && data.pages.length
            ? data.pages.map((page, idx) => (
                <Fragment key={idx}>
                  {page.results.map((game) => (
                    <GameCard key={game.id} game={game} />
                  ))}
                </Fragment>
              ))
            : null}
        </>
      </SimpleGrid>
      <Button
        onClick={() => fetchNextPage()}
        variant="outline"
        isLoading={isFetchingNextPage}
        marginY={5}
      >
        Load More
      </Button>
    </Box>
  );
};

export default GameGrid;
