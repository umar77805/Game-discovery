import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

interface Game {
  id: number;
  slug: string;
  name: string;
  description_raw: string;
}

const endpoint = "/games";
const apiClient = new APIClient<Game>(endpoint);

const useGame = (slug: string) => useQuery({
  queryKey: [endpoint, slug],
  queryFn: () => apiClient.get(`/${slug}`)
});

export default useGame;