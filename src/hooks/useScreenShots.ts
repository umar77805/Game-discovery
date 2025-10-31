import { useQuery } from "@tanstack/react-query"
import APIClient from "../services/api-client"

interface ScreenShot {
  image: string;
  hidden: boolean;
}

const endpoint = '/games';

const useScreenShots = (id: number) => {
  const apiClient = new APIClient<ScreenShot>(`${endpoint}/${id}/screenshots`);

  return useQuery({
    queryKey: ['screenshots', id],
    queryFn: apiClient.getAll

  })
}

export default useScreenShots;