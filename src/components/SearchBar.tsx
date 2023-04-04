import {
  background,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useRef } from "react";
import { BiSearchAlt } from "react-icons/bi";

interface Props {
  onValue: (value: string) => void;
}

const SearchBar = ({ onValue }: Props) => {
  const searchRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (searchRef.current) onValue(searchRef.current.value);
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
