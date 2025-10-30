import { Heading } from "@chakra-ui/react";
import useGameQueryStore from "../stores/useAppStore";

const AppHeading = () => {
  const query = useGameQueryStore((set) => set.gameQuery);
  const heading = `Showing All ${query.platform?.name || ""} ${
    query.genre?.name || ""
  } Games${query.search ? `. Search Included: ${query.search}` : ""}`;
  return <Heading marginBottom={5}>{heading}</Heading>;
};

export default AppHeading;
