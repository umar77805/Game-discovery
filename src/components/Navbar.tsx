import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.jpeg";
import ColorModeToggle from "./ColorModeToggle";
import SearchBar from "./SearchBar";

interface Props {
  onValue: (value: string) => void;
}

const Navbar = ({ onValue }: Props) => {
  return (
    <HStack padding="10px" justifyContent="space-between">
      <Image src={logo} boxSize="50px" objectFit={"cover"} />
      <SearchBar onValue={onValue} />
      <ColorModeToggle />
    </HStack>
  );
};

export default Navbar;
