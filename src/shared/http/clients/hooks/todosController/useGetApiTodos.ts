import client from "@/shared/utils/kubb-clients/axios-client";
import { useQuery, queryOptions, useInfiniteQuery, infiniteQueryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetApiTodosQueryResponse } from "../../../types/todosController/GetApiTodos";
import type { QueryObserverOptions, UseQueryResult, QueryKey, InfiniteQueryObserverOptions, UseInfiniteQueryResult, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetApiTodosClient = typeof client<GetApiTodosQueryResponse, Error, never>;
type GetApiTodos = {
    data: GetApiTodosQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: Awaited<ReturnType<GetApiTodosClient>>;
    client: {
        parameters: Partial<Parameters<GetApiTodosClient>[0]>;
        return: Awaited<ReturnType<GetApiTodosClient>>;
    };
};
export const getApiTodosQueryKey = () => [{ url: "/api/todos/" }] as const;
export type GetApiTodosQueryKey = ReturnType<typeof getApiTodosQueryKey>;
export function getApiTodosQueryOptions(options: GetApiTodos["client"]["parameters"] = {}) {
    const queryKey = getApiTodosQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetApiTodos["data"], GetApiTodos["error"]>({
                method: "get",
                url: `/api/todos/`,
                ...options
            });
            return res;
        },
    });
}
/**
 * @description Get all todos
 * @link /api/todos/
 */
export function useGetApiTodos<TData = GetApiTodos["response"], TQueryData = GetApiTodos["response"], TQueryKey extends QueryKey = GetApiTodosQueryKey>(options: {
    query?: Partial<QueryObserverOptions<GetApiTodos["response"], GetApiTodos["error"], TData, TQueryData, TQueryKey>>;
    client?: GetApiTodos["client"]["parameters"];
} = {}): UseQueryResult<TData, GetApiTodos["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getApiTodosQueryKey();
    const query = useQuery({
        ...getApiTodosQueryOptions(clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GetApiTodos["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getApiTodosInfiniteQueryKey = () => [{ url: "/api/todos/" }] as const;
export type GetApiTodosInfiniteQueryKey = ReturnType<typeof getApiTodosInfiniteQueryKey>;
export function getApiTodosInfiniteQueryOptions(options: GetApiTodos["client"]["parameters"] = {}) {
    const queryKey = getApiTodosInfiniteQueryKey();
    return infiniteQueryOptions({
        queryKey,
        queryFn: async ({ pageParam }) => {
            const res = await client<GetApiTodos["data"], GetApiTodos["error"]>({
                method: "get",
                url: `/api/todos/`,
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
 * @description Get all todos
 * @link /api/todos/
 */
export function useGetApiTodosInfinite<TData = GetApiTodos["response"], TQueryData = GetApiTodos["response"], TQueryKey extends QueryKey = GetApiTodosInfiniteQueryKey>(options: {
    query?: Partial<InfiniteQueryObserverOptions<GetApiTodos["response"], GetApiTodos["error"], TData, TQueryData, TQueryKey>>;
    client?: GetApiTodos["client"]["parameters"];
} = {}): UseInfiniteQueryResult<TData, GetApiTodos["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getApiTodosInfiniteQueryKey();
    const query = useInfiniteQuery({
        ...getApiTodosInfiniteQueryOptions(clientOptions) as unknown as InfiniteQueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<InfiniteQueryObserverOptions, "queryKey">
    }) as UseInfiniteQueryResult<TData, GetApiTodos["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getApiTodosSuspenseQueryKey = () => [{ url: "/api/todos/" }] as const;
export type GetApiTodosSuspenseQueryKey = ReturnType<typeof getApiTodosSuspenseQueryKey>;
export function getApiTodosSuspenseQueryOptions(options: GetApiTodos["client"]["parameters"] = {}) {
    const queryKey = getApiTodosSuspenseQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetApiTodos["data"], GetApiTodos["error"]>({
                method: "get",
                url: `/api/todos/`,
                ...options
            });
            return res;
        },
    });
}
/**
 * @description Get all todos
 * @link /api/todos/
 */
export function useGetApiTodosSuspense<TData = GetApiTodos["response"], TQueryKey extends QueryKey = GetApiTodosSuspenseQueryKey>(options: {
    query?: Partial<UseSuspenseQueryOptions<GetApiTodos["response"], GetApiTodos["error"], TData, TQueryKey>>;
    client?: GetApiTodos["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GetApiTodos["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getApiTodosSuspenseQueryKey();
    const query = useSuspenseQuery({
        ...getApiTodosSuspenseQueryOptions(clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GetApiTodos["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}