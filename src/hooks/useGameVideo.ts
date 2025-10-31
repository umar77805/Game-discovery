import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

interface VideoData {
  id: number;
  name: string;
  preview: string;
  data: {
    [resolution: string]: string;
  }
}

const endpoint = '/games';

const useTrailers = (slug: string) => {
  const apiClient = new APIClient<VideoData>(endpoint + '/' + slug + '/movies');

  return useQuery({
    queryKey: [endpoint, slug, 'movies'],
    queryFn: () => apiClient.getAll(),
  })
}

export default useTrailers;