import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  text: string;
  maxLength?: number;
}

const SummariseText = ({ maxLength = 100, text }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isMaxReached = text.length > maxLength;
  const shortenedtext = isMaxReached
    ? text.slice(0, maxLength + 1) + "..."
    : text;
  return (
    <>
      <Text>{isExpanded ? text : shortenedtext}</Text>
      {isMaxReached && (
        <Button onClick={() => setIsExpanded(!isExpanded)} marginTop="2">
          {isExpanded ? "Show Less" : "Show More"}
        </Button>
      )}
    </>
  );
};

export default SummariseText;
