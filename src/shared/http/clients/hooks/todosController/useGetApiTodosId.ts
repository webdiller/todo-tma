import client from "@/shared/utils/kubb-clients/axios-client";
import { useQuery, queryOptions, useInfiniteQuery, infiniteQueryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetApiTodosIdQueryResponse, GetApiTodosIdPathParams } from "../../../types/todosController/GetApiTodosId";
import type { QueryObserverOptions, UseQueryResult, QueryKey, InfiniteQueryObserverOptions, UseInfiniteQueryResult, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetApiTodosIdClient = typeof client<GetApiTodosIdQueryResponse, Error, never>;
type GetApiTodosId = {
    data: GetApiTodosIdQueryResponse;
    error: Error;
    request: never;
    pathParams: GetApiTodosIdPathParams;
    queryParams: never;
    headerParams: never;
    response: Awaited<ReturnType<GetApiTodosIdClient>>;
    client: {
        parameters: Partial<Parameters<GetApiTodosIdClient>[0]>;
        return: Awaited<ReturnType<GetApiTodosIdClient>>;
    };
};
export const getApiTodosIdQueryKey = (id: GetApiTodosIdPathParams["id"]) => [{ url: "/api/todos/:id", params: { id: id } }] as const;
export type GetApiTodosIdQueryKey = ReturnType<typeof getApiTodosIdQueryKey>;
export function getApiTodosIdQueryOptions(id: GetApiTodosIdPathParams["id"], options: GetApiTodosId["client"]["parameters"] = {}) {
    const queryKey = getApiTodosIdQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetApiTodosId["data"], GetApiTodosId["error"]>({
                method: "get",
                url: `/api/todos/${id}`,
                ...options
            });
            return res;
        },
    });
}
/**
 * @description Get one
 * @summary Get one
 * @link /api/todos/:id
 */
export function useGetApiTodosId<TData = GetApiTodosId["response"], TQueryData = GetApiTodosId["response"], TQueryKey extends QueryKey = GetApiTodosIdQueryKey>(id: GetApiTodosIdPathParams["id"], options: {
    query?: Partial<QueryObserverOptions<GetApiTodosId["response"], GetApiTodosId["error"], TData, TQueryData, TQueryKey>>;
    client?: GetApiTodosId["client"]["parameters"];
} = {}): UseQueryResult<TData, GetApiTodosId["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getApiTodosIdQueryKey(id);
    const query = useQuery({
        ...getApiTodosIdQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GetApiTodosId["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getApiTodosIdInfiniteQueryKey = (id: GetApiTodosIdPathParams["id"]) => [{ url: "/api/todos/:id", params: { id: id } }] as const;
export type GetApiTodosIdInfiniteQueryKey = ReturnType<typeof getApiTodosIdInfiniteQueryKey>;
export function getApiTodosIdInfiniteQueryOptions(id: GetApiTodosIdPathParams["id"], options: GetApiTodosId["client"]["parameters"] = {}) {
    const queryKey = getApiTodosIdInfiniteQueryKey(id);
    return infiniteQueryOptions({
        queryKey,
        queryFn: async ({ pageParam }) => {
            const res = await client<GetApiTodosId["data"], GetApiTodosId["error"]>({
                method: "get",
                url: `/api/todos/${id}`,
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
 * @description Get one
 * @summary Get one
 * @link /api/todos/:id
 */
export function useGetApiTodosIdInfinite<TData = GetApiTodosId["response"], TQueryData = GetApiTodosId["response"], TQueryKey extends QueryKey = GetApiTodosIdInfiniteQueryKey>(id: GetApiTodosIdPathParams["id"], options: {
    query?: Partial<InfiniteQueryObserverOptions<GetApiTodosId["response"], GetApiTodosId["error"], TData, TQueryData, TQueryKey>>;
    client?: GetApiTodosId["client"]["parameters"];
} = {}): UseInfiniteQueryResult<TData, GetApiTodosId["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getApiTodosIdInfiniteQueryKey(id);
    const query = useInfiniteQuery({
        ...getApiTodosIdInfiniteQueryOptions(id, clientOptions) as unknown as InfiniteQueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<InfiniteQueryObserverOptions, "queryKey">
    }) as UseInfiniteQueryResult<TData, GetApiTodosId["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getApiTodosIdSuspenseQueryKey = (id: GetApiTodosIdPathParams["id"]) => [{ url: "/api/todos/:id", params: { id: id } }] as const;
export type GetApiTodosIdSuspenseQueryKey = ReturnType<typeof getApiTodosIdSuspenseQueryKey>;
export function getApiTodosIdSuspenseQueryOptions(id: GetApiTodosIdPathParams["id"], options: GetApiTodosId["client"]["parameters"] = {}) {
    const queryKey = getApiTodosIdSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetApiTodosId["data"], GetApiTodosId["error"]>({
                method: "get",
                url: `/api/todos/${id}`,
                ...options
            });
            return res;
        },
    });
}
/**
 * @description Get one
 * @summary Get one
 * @link /api/todos/:id
 */
export function useGetApiTodosIdSuspense<TData = GetApiTodosId["response"], TQueryKey extends QueryKey = GetApiTodosIdSuspenseQueryKey>(id: GetApiTodosIdPathParams["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<GetApiTodosId["response"], GetApiTodosId["error"], TData, TQueryKey>>;
    client?: GetApiTodosId["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GetApiTodosId["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getApiTodosIdSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...getApiTodosIdSuspenseQueryOptions(id, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GetApiTodosId["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}