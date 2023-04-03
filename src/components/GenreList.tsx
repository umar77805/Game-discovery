import {
  Center,
  Flex,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import CroppedImage from "../services/image-url";

const GenreList = () => {
  const { genres, isLoading, error } = useGenres();

  if (isLoading) return <Spinner />;

  if (error) return <Text>Couldn't load genres</Text>;

  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              borderRadius="10px"
              boxSize="40px"
              src={CroppedImage(genre.image_background)}
            />
            <Text>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
