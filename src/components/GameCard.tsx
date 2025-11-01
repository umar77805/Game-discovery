import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router";
import { Game } from "../hooks/useGames";
import CroppedImage from "../services/image-url";
import GameCriticScore from "./GameCriticScore";
import PlatformIcons from "./PlatformIcons";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Link to={`/games/${game.slug}`}>
      <Card.Root
        border="2px solid black"
        overflow="hidden"
        _hover={{
          cursor: "pointer",
          transform: "scale(1.03)",
          transition: "transform .10s ease-in",
        }}
      >
        <Image src={CroppedImage(game.background_image)} />
        <CardBody>
          <Heading size="md">{game.name}</Heading>
          <HStack justifyContent="space-between">
            <PlatformIcons
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            {game.metacritic && <GameCriticScore score={game.metacritic} />}
          </HStack>
        </CardBody>
      </Card.Root>
    </Link>
  );
};

export default GameCard;
