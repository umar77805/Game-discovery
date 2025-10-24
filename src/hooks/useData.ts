import { useQuery } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";
import APIClient from "../services/api-client";
import Utilities from "../services/utilities";

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  dependencyKeys?: any[]
) => {
  const apiClient = new APIClient<T>(endpoint);

  return useQuery<T[], Error>({
    queryKey: [...Utilities.getQueryKey(endpoint), ...(dependencyKeys || [])],
    queryFn: () => apiClient.getAll(requestConfig)
  })
};

export default useData;
