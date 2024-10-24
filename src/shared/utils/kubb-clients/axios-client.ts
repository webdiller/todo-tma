import axios from "axios"
import type { AxiosError, AxiosHeaders, AxiosRequestConfig, AxiosResponse } from "axios"
import { LOCAL_STORAGE_KEYS } from "@/shared/types/locatStorage"

declare const AXIOS_HEADERS: string

/**
 * Subset of AxiosRequestConfig
 */
export type RequestConfig<TData = unknown> = {
  url?: string
  method: "get" | "put" | "patch" | "post" | "delete"
  params?: unknown
  data?: TData
  responseType?: "arraybuffer" | "blob" | "document" | "json" | "text" | "stream"
  signal?: AbortSignal
  headers?: AxiosRequestConfig["headers"]
}
/**
 * Subset of AxiosResponse
 */
export type ResponseConfig<TData = unknown> = {
  data: TData
  status: number
  statusText: string
  headers?: AxiosResponse["headers"]
}

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_AXIOS_BASE,
  withCredentials: true,
  headers: typeof AXIOS_HEADERS !== "undefined" ? (JSON.parse(AXIOS_HEADERS) as AxiosHeaders) : undefined,
})

if (typeof window !== "undefined") {
  axiosInstance.interceptors.request.use((config) => {
    const LS_ACCESS_TOKEN = localStorage.getItem(LOCAL_STORAGE_KEYS.LS_ACCESS_TOKEN)
    if (!LS_ACCESS_TOKEN) {
      return config
    } else {
      config.headers.Authorization = `Bearer ${localStorage.getItem(LOCAL_STORAGE_KEYS.LS_ACCESS_TOKEN)}`
      return config
    }
  })
}

export const axiosClient = async <TData, TError = unknown, TVariables = unknown>(config: RequestConfig<TVariables>): Promise<ResponseConfig<TData>> => {
  const promise = axiosInstance.request<TVariables, ResponseConfig<TData>>({ ...config }).catch((e: AxiosError<TError>) => {
    throw e
  })

  return promise
}

export default axiosClient
