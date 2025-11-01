import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { RiRestartLine } from "react-icons/ri";
import useGenres from "../hooks/useGenres";
import CroppedImage from "../services/image-url";
import Utilities from "../services/utilities";
import useGameQueryStore from "../stores/useAppStore";
import { Tooltip } from "./ui/tooltip";

const GenreList = () => {
  const selectedGenre = useGameQueryStore((set) => set.gameQuery.genre);
  const setSelectedGenre = useGameQueryStore((set) => set.setGenre);
  const { data, isLoading, error } = useGenres();
  const border = "1px solid black";

  if (isLoading) return <Spinner />;

  if (error) return <Text>Couldn't load genres</Text>;

  return (
    <VStack>
      <HStack
        paddingX={5}
        paddingY={1}
        marginBottom={3}
        justifyContent={"space-between"}
      >
        <Heading size={"md"}>All Genres</Heading>
        <Tooltip content="Reset Genres">
          <Button border={border} onClick={() => setSelectedGenre(null)}>
            <RiRestartLine />
          </Button>
        </Tooltip>
      </HStack>
      <List.Root listStyle="none">
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                borderRadius="10px"
                boxSize="40px"
                src={CroppedImage(genre.image_background)}
              />
              <Tooltip content={genre.name}>
                <Button
                  fontWeight={
                    genre.id === selectedGenre?.id ? "bold" : "normal"
                  }
                  onClick={() => setSelectedGenre(genre)}
                  variant="ghost"
                >
                  {Utilities.stringShorten(genre.name)}
                </Button>
              </Tooltip>
            </HStack>
          </ListItem>
        ))}
      </List.Root>
    </VStack>
  );
};

export default GenreList;
