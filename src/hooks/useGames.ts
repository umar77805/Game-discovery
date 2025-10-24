import { useQuery } from "@tanstack/react-query";
import { Query } from "../App";
import APIClient from "../services/api-client";
import Utilities from "../services/utilities";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const endpoint = "/games";
const apiClient = new APIClient<Game>(endpoint);

const useGames = (gameQuery: Query) => useQuery<Game[], Error>({
  queryKey: [...Utilities.getQueryKey(endpoint), gameQuery],
  queryFn: () => apiClient.getAll({
    params: {
      genres: gameQuery.genre?.id,
      parent_platforms: gameQuery.platform?.id,
      search: gameQuery.search,
    },
  })
})

export default useGames;
