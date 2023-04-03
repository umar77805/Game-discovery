import { Card, CardBody, Skeleton, Stack } from "@chakra-ui/react";

const GameSkeleton = () => {
  return (
    <Card overflow="hidden">
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
