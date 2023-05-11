import {
  QueryClient,
  QueryFunction,
  QueryKey,
  useQuery,
  UseQueryOptions,
} from "react-query";

export const client = new QueryClient({});

export const useQueryFactory =
  <
    TQueryFnData = unknown,
    TError = unknown,
    TData = TQueryFnData,
    TQueryKey extends QueryKey = QueryKey
  >(
    queryKey: TQueryKey,
    queryFn: QueryFunction<TQueryFnData, TQueryKey>,
    options?: Omit<
      UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
      "queryKey" | "queryFn"
    >
  ) =>
  () => {
    return useQuery(queryKey, queryFn, {
      ...options,
    });
  };
