import client from "@/shared/utils/kubb-clients/axios-client";
import { useQuery, queryOptions, useInfiniteQuery, infiniteQueryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetQueryResponse } from "../../types/Get";
import type { QueryObserverOptions, UseQueryResult, QueryKey, InfiniteQueryObserverOptions, UseInfiniteQueryResult, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetClient = typeof client<GetQueryResponse, Error, never>;
type Get = {
    data: GetQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: Awaited<ReturnType<GetClient>>;
    client: {
        parameters: Partial<Parameters<GetClient>[0]>;
        return: Awaited<ReturnType<GetClient>>;
    };
};
export const getQueryKey = () => [{ url: "/" }] as const;
export type GetQueryKey = ReturnType<typeof getQueryKey>;
export function getQueryOptions(options: Get["client"]["parameters"] = {}) {
    const queryKey = getQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<Get["data"], Get["error"]>({
                method: "get",
                url: `/`,
                ...options
            });
            return res;
        },
    });
}
/**
 * @link /
 */
export function useGet<TData = Get["response"], TQueryData = Get["response"], TQueryKey extends QueryKey = GetQueryKey>(options: {
    query?: Partial<QueryObserverOptions<Get["response"], Get["error"], TData, TQueryData, TQueryKey>>;
    client?: Get["client"]["parameters"];
} = {}): UseQueryResult<TData, Get["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getQueryKey();
    const query = useQuery({
        ...getQueryOptions(clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, Get["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getInfiniteQueryKey = () => [{ url: "/" }] as const;
export type GetInfiniteQueryKey = ReturnType<typeof getInfiniteQueryKey>;
export function getInfiniteQueryOptions(options: Get["client"]["parameters"] = {}) {
    const queryKey = getInfiniteQueryKey();
    return infiniteQueryOptions({
        queryKey,
        queryFn: async ({ pageParam }) => {
            const res = await client<Get["data"], Get["error"]>({
                method: "get",
                url: `/`,
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
 * @link /
 */
export function useGetInfinite<TData = Get["response"], TQueryData = Get["response"], TQueryKey extends QueryKey = GetInfiniteQueryKey>(options: {
    query?: Partial<InfiniteQueryObserverOptions<Get["response"], Get["error"], TData, TQueryData, TQueryKey>>;
    client?: Get["client"]["parameters"];
} = {}): UseInfiniteQueryResult<TData, Get["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getInfiniteQueryKey();
    const query = useInfiniteQuery({
        ...getInfiniteQueryOptions(clientOptions) as unknown as InfiniteQueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<InfiniteQueryObserverOptions, "queryKey">
    }) as UseInfiniteQueryResult<TData, Get["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getSuspenseQueryKey = () => [{ url: "/" }] as const;
export type GetSuspenseQueryKey = ReturnType<typeof getSuspenseQueryKey>;
export function getSuspenseQueryOptions(options: Get["client"]["parameters"] = {}) {
    const queryKey = getSuspenseQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<Get["data"], Get["error"]>({
                method: "get",
                url: `/`,
                ...options
            });
            return res;
        },
    });
}
/**
 * @link /
 */
export function useGetSuspense<TData = Get["response"], TQueryKey extends QueryKey = GetSuspenseQueryKey>(options: {
    query?: Partial<UseSuspenseQueryOptions<Get["response"], Get["error"], TData, TQueryKey>>;
    client?: Get["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, Get["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getSuspenseQueryKey();
    const query = useSuspenseQuery({
        ...getSuspenseQueryOptions(clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, Get["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}