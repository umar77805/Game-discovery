import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      {colorMode !== "dark" ? <MdDarkMode /> : <MdOutlineLightMode />}
    </HStack>
  );
};

export default ColorModeToggle;
