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
} from "@chakra-ui/react";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { RiRestartLine } from "react-icons/ri";
import { Platform } from "../hooks/useGames";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  onReset: () => void;
}

const PlatformList = ({ onSelectedPlatform, onReset }: Props) => {
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
            {data.map((platform) => (
              <MenuItem
                onClick={() => {
                  SetCurrentPlatform(platform.name);
                  onSelectedPlatform(platform);
                }}
                key={platform.id}
              >
                {platform.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>
      <Button
        border={border}
        onClick={() => {
          onReset();
          SetCurrentPlatform("");
        }}
      >
        <RiRestartLine size={20} />
      </Button>
    </Flex>
  );
};

export default PlatformList;
