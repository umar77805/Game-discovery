import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router";
import logo from "../assets/logo.jpeg";
import ColorModeToggle from "./ColorModeToggle";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <HStack padding="10px" justifyContent="space-between">
      <Link to="/">
        <Image src={logo} boxSize="50px" objectFit={"cover"} />
      </Link>
      <SearchBar />
      <ColorModeToggle />
    </HStack>
  );
};

export default Navbar;
