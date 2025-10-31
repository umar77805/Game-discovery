import { Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router";
import SummariseText from "../components/SummariseText";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !data) throw error;

  return (
    <>
      <Heading marginBottom={2}>{data.name}</Heading>
      <SummariseText text={data.description_raw} maxLength={500} />
    </>
  );
};

export default GameDetailPage;
