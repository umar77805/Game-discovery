import {
  background,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { BiSearchAlt } from "react-icons/bi";

const SearchBar = () => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none" children={<BiSearchAlt />} />
      <Input
        boxShadow="xl"
        focusBorderColor="gray"
        borderRadius={20}
        placeholder="Search games"
        type="text"
      />
    </InputGroup>
  );
};

export default SearchBar;
