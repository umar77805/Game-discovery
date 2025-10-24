import { SimpleGrid, Spinner } from "@chakra-ui/react";
import { Fragment } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Query } from "../App";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameSkeleton from "./GameSkeleton";

interface Props {
  gameQuery: Query;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { error, data, status, fetchNextPage, hasNextPage } =
    useGames(gameQuery);
  const skeletonArray = Array.from({ length: 15 }, (_ele, idx) => idx + 1);
  const fetchedLengthSoFar =
    data && data.pages
      ? data.pages.reduce((acc, curr) => curr.results.length + acc, 0)
      : 0;

  return (
    <>
      {error && <p>{error.message}</p>}
      <InfiniteScroll
        dataLength={fetchedLengthSoFar}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={<Spinner marginY={5} />}
      >
        <SimpleGrid
          padding={2}
          spacing={3}
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        >
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
      </InfiniteScroll>
    </>
  );
};

export default GameGrid;
