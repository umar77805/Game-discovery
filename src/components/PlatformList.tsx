import {
  Box,
  Button,
  Flex,
  MenuItem,
  Menu,
  Spinner,
  Text,
  MenuTrigger,
  Portal,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { RiRestartLine } from "react-icons/ri";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../stores/useAppStore";
import { Tooltip } from "./ui/tooltip";

const PlatformList = () => {
  const setSelectedPlatform = useGameQueryStore((set) => set.setPlatform);
  const currentPlatform = useGameQueryStore(
    (set) => set.gameQuery.platform?.name
  );
  const { data, isLoading, error } = usePlatforms();
  const border = "1px solid black";

  if (error) return null;

  return (
    <Flex>
      <Box marginRight={2}>
        <Menu.Root>
          <Menu.Trigger asChild>
            <Button border={border}>
              {currentPlatform ? currentPlatform : <Text>All Platforms</Text>}{" "}
              <FiChevronDown />
            </Button>
          </Menu.Trigger>

          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                {isLoading && <Spinner />}
                {data?.results.map((platform) => (
                  <Menu.Item
                    onSelect={() => setSelectedPlatform(platform)}
                    key={platform.id}
                    value={platform.name}
                  >
                    {platform.name}
                  </Menu.Item>
                ))}
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      </Box>
      <Tooltip content="Reset Platforms">
        <Button border={border} onClick={() => setSelectedPlatform(null)}>
          <RiRestartLine size={20} />
        </Button>
      </Tooltip>
    </Flex>
  );
};

export default PlatformList;
