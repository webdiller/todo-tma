import client from "@/shared/utils/kubb-clients/axios-client";
import { useQuery, queryOptions, useInfiniteQuery, infiniteQueryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetApiUsersQueryResponse } from "../../../types/userController/GetApiUsers";
import type { QueryObserverOptions, UseQueryResult, QueryKey, InfiniteQueryObserverOptions, UseInfiniteQueryResult, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetApiUsersClient = typeof client<GetApiUsersQueryResponse, Error, never>;
type GetApiUsers = {
    data: GetApiUsersQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: Awaited<ReturnType<GetApiUsersClient>>;
    client: {
        parameters: Partial<Parameters<GetApiUsersClient>[0]>;
        return: Awaited<ReturnType<GetApiUsersClient>>;
    };
};
export const getApiUsersQueryKey = () => [{ url: "/api/users/" }] as const;
export type GetApiUsersQueryKey = ReturnType<typeof getApiUsersQueryKey>;
export function getApiUsersQueryOptions(options: GetApiUsers["client"]["parameters"] = {}) {
    const queryKey = getApiUsersQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetApiUsers["data"], GetApiUsers["error"]>({
                method: "get",
                url: `/api/users/`,
                ...options
            });
            return res;
        },
    });
}
/**
 * @description Get user
 * @link /api/users/
 */
export function useGetApiUsers<TData = GetApiUsers["response"], TQueryData = GetApiUsers["response"], TQueryKey extends QueryKey = GetApiUsersQueryKey>(options: {
    query?: Partial<QueryObserverOptions<GetApiUsers["response"], GetApiUsers["error"], TData, TQueryData, TQueryKey>>;
    client?: GetApiUsers["client"]["parameters"];
} = {}): UseQueryResult<TData, GetApiUsers["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getApiUsersQueryKey();
    const query = useQuery({
        ...getApiUsersQueryOptions(clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GetApiUsers["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getApiUsersInfiniteQueryKey = () => [{ url: "/api/users/" }] as const;
export type GetApiUsersInfiniteQueryKey = ReturnType<typeof getApiUsersInfiniteQueryKey>;
export function getApiUsersInfiniteQueryOptions(options: GetApiUsers["client"]["parameters"] = {}) {
    const queryKey = getApiUsersInfiniteQueryKey();
    return infiniteQueryOptions({
        queryKey,
        queryFn: async ({ pageParam }) => {
            const res = await client<GetApiUsers["data"], GetApiUsers["error"]>({
                method: "get",
                url: `/api/users/`,
                ...options
            });
            return res;
        },
        initialPageParam: 0,
        getNextPageParam: (lastPage, _allPages, lastPageParam) => Array.isArray(lastPage.data) && lastPage.data.length === 0 ? undefined : lastPageParam + 1,
        getPreviousPageParam: (_firstPage, _allPages, firstPageParam) => firstPageParam <= 1 ? undefined : firstPageParam - 1
    });
}
/**
 * @description Get user
 * @link /api/users/
 */
export function useGetApiUsersInfinite<TData = GetApiUsers["response"], TQueryData = GetApiUsers["response"], TQueryKey extends QueryKey = GetApiUsersInfiniteQueryKey>(options: {
    query?: Partial<InfiniteQueryObserverOptions<GetApiUsers["response"], GetApiUsers["error"], TData, TQueryData, TQueryKey>>;
    client?: GetApiUsers["client"]["parameters"];
} = {}): UseInfiniteQueryResult<TData, GetApiUsers["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getApiUsersInfiniteQueryKey();
    const query = useInfiniteQuery({
        ...getApiUsersInfiniteQueryOptions(clientOptions) as unknown as InfiniteQueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<InfiniteQueryObserverOptions, "queryKey">
    }) as UseInfiniteQueryResult<TData, GetApiUsers["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getApiUsersSuspenseQueryKey = () => [{ url: "/api/users/" }] as const;
export type GetApiUsersSuspenseQueryKey = ReturnType<typeof getApiUsersSuspenseQueryKey>;
export function getApiUsersSuspenseQueryOptions(options: GetApiUsers["client"]["parameters"] = {}) {
    const queryKey = getApiUsersSuspenseQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetApiUsers["data"], GetApiUsers["error"]>({
                method: "get",
                url: `/api/users/`,
                ...options
            });
            return res;
        },
    });
}
/**
 * @description Get user
 * @link /api/users/
 */
export function useGetApiUsersSuspense<TData = GetApiUsers["response"], TQueryKey extends QueryKey = GetApiUsersSuspenseQueryKey>(options: {
    query?: Partial<UseSuspenseQueryOptions<GetApiUsers["response"], GetApiUsers["error"], TData, TQueryKey>>;
    client?: GetApiUsers["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GetApiUsers["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getApiUsersSuspenseQueryKey();
    const query = useSuspenseQuery({
        ...getApiUsersSuspenseQueryOptions(clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GetApiUsers["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}