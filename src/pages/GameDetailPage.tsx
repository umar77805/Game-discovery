import {
  Box,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
  Image,
} from "@chakra-ui/react";
import { useParams } from "react-router";
import GameAttribute from "../components/GameAttribute";
import GameCriticScore from "../components/GameCriticScore";
import SummariseText from "../components/SummariseText";
import useGame from "../hooks/useGame";
import { RiLinkM } from "react-icons/ri";
import { TbVideoOff } from "react-icons/tb";
import useTrailers from "../hooks/useGameVideo";
import useScreenShots from "../hooks/useScreenShots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);
  const { data: gameTrailers, isLoading: isGameVideoLoading } = useTrailers(
    slug!
  );
  const { data: screenshots } = useScreenShots(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game || !gameTrailers) throw error;

  const gameTrailersResults =
    gameTrailers && gameTrailers.results && gameTrailers.results.length
      ? gameTrailers.results.find(
          (result) => result.data && Object.keys(result.data).length
        )
      : null;

  const videoLink =
    gameTrailersResults && gameTrailersResults.data
      ? gameTrailersResults.data["max"] ||
        gameTrailersResults.data["720"] ||
        gameTrailersResults.data["480"]
      : "";

  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }}>
      <Box>
        <Heading marginBottom={2}>{game.name}</Heading>
        <SummariseText text={game.description_raw} maxLength={500} />
        <SimpleGrid spacing={3} columns={{ sm: 2 }}>
          <GameAttribute
            heading="Platforms"
            attributes={game.parent_platforms.map(
              (platformObj) => platformObj.platform.name
            )}
          />
          <GameAttribute
            heading="Metascore"
            attributes={[
              <Box display={"flex"}>
                <GameCriticScore score={game.metacritic} />
                {game.metacritic && (
                  <a
                    href={game.metacritic_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <RiLinkM style={{ marginLeft: "5px", cursor: "pointer" }} />
                  </a>
                )}
              </Box>,
            ]}
          />
          <GameAttribute
            heading="Genres"
            attributes={game.genres.map((genreObj) => genreObj.name)}
          />
          <GameAttribute
            heading="Publishers"
            attributes={game.publishers.map(
              (publishersObj) => publishersObj.name
            )}
          />
        </SimpleGrid>
      </Box>
      <Box>
        <Box marginY={5}>
          {isGameVideoLoading ? (
            <Spinner />
          ) : !videoLink ? (
            <Box
              style={{
                width: "100%",
                aspectRatio: "1",
                background: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <TbVideoOff color="white" />
              <Text color="White">Video not available</Text>
            </Box>
          ) : (
            <video src={videoLink} controls autoPlay muted loop />
          )}
        </Box>
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={2}>
          {screenshots?.results.map((screenshot, idx) => (
            <Image key={idx} src={screenshot.image} draggable={false} />
          ))}
        </SimpleGrid>
      </Box>
    </SimpleGrid>
  );
};

export default GameDetailPage;
