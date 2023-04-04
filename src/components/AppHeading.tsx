import { Heading } from "@chakra-ui/react";
import { Query } from "../App";

interface Props {
  query: Query;
}

const AppHeading = ({ query }: Props) => {
  const heading = `All ${query.platform?.name || ""} ${
    query.genre?.name || ""
  } Games`;
  return <Heading marginBottom={5}>{heading}</Heading>;
};

export default AppHeading;
