import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeToggle from "./ColorModeToggle";

const Navbar = () => {
  return (
    <HStack padding="10px" justifyContent="space-between">
      <Image src={logo} boxSize="60px" />
      <ColorModeToggle />
    </HStack>
  );
};

export default Navbar;