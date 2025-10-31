import { Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router";
import useGame from "../hooks/useGame";
import ErrorPage from "./ErrorPage";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !data) throw error;

  return (
    <>
      <Heading>{data.name}</Heading>
      <Text>{data.description_raw}</Text>
    </>
  );
};

export default GameDetailPage;
