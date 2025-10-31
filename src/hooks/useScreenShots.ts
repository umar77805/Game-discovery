import { useQuery } from "@tanstack/react-query"
import APIClient from "../services/api-client"

interface ScreenShot {
  image: string;
  hidden: boolean;
}

const endpoint = '/games';

const useScreenShots = (slug: string) => {
  const apiClient = new APIClient<ScreenShot>(`${endpoint}/${slug}/screenshots`);

  return useQuery({
    queryKey: ['screenshots', slug],
    queryFn: apiClient.getAll

  })
}

export default useScreenShots;