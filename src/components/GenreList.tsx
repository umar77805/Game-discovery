import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenres";
import CroppedImage from "../services/image-url";

interface Props {
  onSeletedGenre: (genre: Genres) => void;
}

const GenreList = ({ onSeletedGenre }: Props) => {
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
            <Button onClick={() => onSeletedGenre(genre)} variant="ghost">
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
