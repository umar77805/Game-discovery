import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.jpeg";
import ColorModeToggle from "./ColorModeToggle";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <HStack padding="10px" justifyContent="space-between">
      <Image src={logo} boxSize="50px" objectFit={"cover"} />
      <SearchBar />
      <ColorModeToggle />
    </HStack>
  );
};

export default Navbar;
