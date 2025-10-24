import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { RiRestartLine } from "react-icons/ri";
import useGenres, { Genres } from "../hooks/useGenres";
import Utilities from "../services/utilities";
import CroppedImage from "../services/image-url";

interface Props {
  onSeletedGenre: (genre: Genres) => void;
  selectedGenre: Genres | null;
  onReset: () => void;
}

const GenreList = ({ selectedGenre, onSeletedGenre, onReset }: Props) => {
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
        <Tooltip label="Reset Genres">
          <Button border={border} onClick={() => onReset()}>
            <RiRestartLine />
          </Button>
        </Tooltip>
      </HStack>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                borderRadius="10px"
                boxSize="40px"
                src={CroppedImage(genre.image_background)}
              />
              <Tooltip label={genre.name}>
                <Button
                  fontWeight={
                    genre.id === selectedGenre?.id ? "bold" : "normal"
                  }
                  onClick={() => onSeletedGenre(genre)}
                  variant="ghost"
                >
                  {Utilities.stringShorten(genre.name)}
                </Button>
              </Tooltip>
            </HStack>
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};

export default GenreList;
