import { useQuery } from "@tanstack/react-query";
import APIClient, { Response } from "../services/api-client";
import Utilities from "../services/utilities";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const endpoint = "/platforms/lists/parents";
const apiClient = new APIClient<Platform>(endpoint);

const usePlatforms = () => useQuery({
  queryKey: [...Utilities.getQueryKey(endpoint)],
  queryFn: () => apiClient.getAll()
})

export default usePlatforms;
