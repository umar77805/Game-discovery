import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeToggle from "./ColorModeToggle";
import SearchBar from "./SearchBar";

interface Props {
  onValue: (value: string) => void;
}

const Navbar = ({ onValue }: Props) => {
  return (
    <HStack padding="10px" justifyContent="space-between">
      <Image src={logo} boxSize="60px" />
      <SearchBar onValue={onValue} />
      <ColorModeToggle />
    </HStack>
  );
};

export default Navbar;
