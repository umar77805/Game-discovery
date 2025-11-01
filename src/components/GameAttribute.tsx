import { Box, Container, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  heading: string;
  attributes: ReactNode[];
}

const GameAttribute = ({ attributes, heading }: Props) => {
  return (
    <Box marginTop={5}>
      <Heading as="h3" fontSize={"20px"} color="gray" marginBottom={2}>
        {heading}
      </Heading>
      {attributes.map((attribute, idx) => (
        <Container key={idx} style={{ padding: "0", margin: "0" }}>
          {attribute}
        </Container>
      ))}
    </Box>
  );
};

export default GameAttribute;
