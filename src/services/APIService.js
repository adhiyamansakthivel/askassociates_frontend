import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { baseUrl } from "../utils/ConfigUrl";

const apiInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-type": "application/json",
  },
});

export const getAPIData = (
  method,
  url,
  postData,
  header
) => apiInstance({ method, url, data: postData });

export const useAPIPost = () => {
  const {
    data,
    error,
    isError,
    isIdle,
    isLoading,
    isPaused,
    isSuccess,
    failureCount,
    mutate,
    mutateAsync,
    reset,
    status,
  } = useMutation(APIPost);

  return {
    data,
    error,
    isError,
    isIdle,
    isLoading,
    isPaused,
    isSuccess,
    failureCount,
    mutate,
    mutateAsync,
    reset,
    status,
  };
};

export function APIPost(data) {
  return getAPIData(data.method, data.url, data.postData);
}

export function useAPIGet(
  queryId,
  chartId,
  url,
  keyFn
) {
  return useQuery(
    [queryId, chartId],
    () =>
      getAPIData("get", url)
        .then((res) => res),
        // .catch((err) => err),
    keyFn
  );
}


// export function useAPIGetParallel({ users }) {
//   const userQueries = useQueries(
//     users.map(user => {
//       return {
//         queryKey: ['user', user.id],
//         queryFn: () => getAPIData("get", url)
//         .then((res) => res.data)
//         .catch((err) => err),
//       }
//     })
//   )
// }

export default getAPIData;
