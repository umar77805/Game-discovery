import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useNavigate } from "react-router";
import useGameQueryStore from "../stores/useAppStore";

const SearchBar = () => {
  const setSearchText = useGameQueryStore((set) => set.setSearchText);
  const searchRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (searchRef.current) {
          setSearchText(searchRef.current.value);
          navigate("/");
        }
      }}
    >
      <InputGroup startElement={<BiSearchAlt />}>
        <Input
          ref={searchRef}
          boxShadow="xl"
          focusRingColor="gray"
          borderRadius={20}
          placeholder="Search games"
          type="text"
        />
      </InputGroup>
    </form>
  );
};

export default SearchBar;
