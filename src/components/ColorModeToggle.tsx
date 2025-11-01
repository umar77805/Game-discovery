import { HStack } from "@chakra-ui/react";
import { ColorModeButton, useColorMode } from "./ui/color-mode";

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <ColorModeButton onClick={toggleColorMode} />
    </HStack>
  );
};

export default ColorModeToggle;
