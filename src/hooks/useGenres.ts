import { useQuery } from "@tanstack/react-query";
import APIClient, { Response } from "../services/api-client";
import Utilities from "../services/utilities";

export interface Genres {
  id: number;
  name: string;
  image_background: string;
}

const endpoint = "/genres";
const apiClient = new APIClient<Genres>(endpoint);

const useGenres = () => useQuery({
  queryKey: [...Utilities.getQueryKey(endpoint)],
  queryFn: () => apiClient.getAll()
})

export default useGenres;
