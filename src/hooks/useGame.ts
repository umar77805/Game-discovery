import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Genres } from "./useGenres";
import { Platform } from "./usePlatforms";

interface Game {
  id: number;
  slug: string;
  name: string;
  description_raw: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genres[];
  publishers: { id: number, name: string }[];
  metacritic_url: string;
}

const endpoint = "/games";
const apiClient = new APIClient<Game>(endpoint);

const useGame = (slug: string) => useQuery({
  queryKey: [endpoint, slug],
  queryFn: () => apiClient.get(`/${slug}`)
});

export default useGame;