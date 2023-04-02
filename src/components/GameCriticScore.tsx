import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const GameCriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge paddingX={2} colorScheme={color} borderRadius={10}>
      {score}
    </Badge>
  );
};

export default GameCriticScore;
