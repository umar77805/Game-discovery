import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { RiRestartLine } from "react-icons/ri";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../stores/useAppStore";

const PlatformList = () => {
  const setSelectedPlatform = useGameQueryStore((set) => set.setPlatform);
  const [curentPlatform, SetCurrentPlatform] = useState("");
  const { data, isLoading, error } = usePlatforms();
  const border = "1px solid black";

  if (error) return null;

  return (
    <Flex>
      <Box marginRight={2}>
        <Menu>
          <MenuButton as={Button} border={border} rightIcon={<FiChevronDown />}>
            {curentPlatform ? curentPlatform : <Text>All Platforms</Text>}
          </MenuButton>
          <MenuList>
            {isLoading && <Spinner />}
            {data?.results.map((platform) => (
              <MenuItem
                onClick={() => {
                  SetCurrentPlatform(platform.name);
                  setSelectedPlatform(platform);
                }}
                key={platform.id}
              >
                {platform.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>
      <Tooltip label="Reset Platforms">
        <Button
          border={border}
          onClick={() => {
            setSelectedPlatform(null);
            SetCurrentPlatform("");
          }}
        >
          <RiRestartLine size={20} />
        </Button>
      </Tooltip>
    </Flex>
  );
};

export default PlatformList;
