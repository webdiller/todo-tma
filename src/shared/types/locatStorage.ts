export enum LOCAL_STORAGE_KEYS {
  LS_ACCESS_TOKEN = "LS_ACCESS_TOKEN",
}

export type TypeZoneProps = {
  value: string
  abbr: string
  offset: number
  isdst: boolean
  text: string
  utc: string[]
}
