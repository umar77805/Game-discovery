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
import useGenres, { Genres } from "../hooks/useGenres";
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
        <Button border={border} onClick={() => onReset()}>
          <RiRestartLine />
        </Button>
      </HStack>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                borderRadius="10px"
                boxSize="40px"
                src={CroppedImage(genre.image_background)}
              />
              <Button
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSeletedGenre(genre)}
                variant="ghost"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};

export default GenreList;
