import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
} from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";
import usePlatforms from "../hooks/usePlatforms";

const PlatformList = () => {
  const { data, isLoading, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FiChevronDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {isLoading && <Spinner />}
        {data.map((platform) => (
          <MenuItem key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformList;
