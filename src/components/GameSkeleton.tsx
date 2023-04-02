import {
  Card,
  CardBody,
  Heading,
  HStack,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import PlatformIcons from "./PlatformIcons";

const GameSkeleton = () => {
  return (
    <Card width="300px" overflow="hidden">
      <Skeleton height={"200px"} />
      <CardBody>
        <Stack>
          <Skeleton height={2} />
          <Skeleton height={2} />
          <Skeleton height={2} />
        </Stack>
      </CardBody>
    </Card>
  );
};

export default GameSkeleton;
