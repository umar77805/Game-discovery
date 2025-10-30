import {
  background,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useRef } from "react";
import { BiSearchAlt } from "react-icons/bi";
import useGameQueryStore from "../stores/useAppStore";

const SearchBar = () => {
  const setSearchText = useGameQueryStore((set) => set.setSearchText);
  const searchRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (searchRef.current) setSearchText(searchRef.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<BiSearchAlt />} />
        <Input
          ref={searchRef}
          boxShadow="xl"
          focusBorderColor="gray"
          borderRadius={20}
          placeholder="Search games"
          type="text"
        />
      </InputGroup>
    </form>
  );
};

export default SearchBar;
