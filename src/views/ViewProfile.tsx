import { apiHooks, apiService } from "@/shared/http"
import { initData, type User, useSignal } from "@telegram-apps/sdk-react"
import { useEffect } from "react"
export const ViewProfile = () => {
  const initDataRaw = useSignal(initData.raw)
  const initDataUser = useSignal(initData.user)
  const initDataHash = useSignal(initData.hash)
  const initDataState = useSignal(initData.state)
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

  const useGetApiUsersAPI = apiHooks.userHooks.useGetApiUsers()
  const useGetApiTodosAPI = apiHooks.todosHooks.useGetApiTodos({
    query: {
      enabled: useGetApiUsersAPI.isSuccess,
    },
  })

  // const useGetTimeZones = useQuery<unknown, unknown, TypeZoneProps[]>({
  //   queryKey: ["timezones"],
  //   queryFn: async () => {
  //     const response = await fetch(`${import.meta.env.VITE_WEB_URL}/public/timezones.json`)
  //     return await response.json()
  //   },
  // })

  useEffect(() => {
    apiService.userService.patchApiUsers({
      timezone: userTimeZone,
    })
  }, [])

  return (
    <div className="container">
      <div className="space-y-2">
        <p>Time Zone: {userTimeZone}</p>
        {/* <List className="*:p-0">
          <Select>
            {useGetTimeZones.data?.map((item) => {
              return <option key={item.value}>{item.value}</option>
            })}
          </Select>
        </List> */}
        <p>User Name: {initDataUser?.username}</p>
        <p>User ID: {initDataUser?.id}</p>
        <p>First Name: {initDataUser?.firstName}</p>
        <p>Last Name: {initDataUser?.lastName}</p>
        <p>allowsWriteToPm: {JSON.stringify(initDataUser?.allowsWriteToPm)}</p>
        <p>isPremium: {JSON.stringify(initDataUser?.isPremium)}</p>
        <p>languageCode: {initDataUser?.languageCode}</p>
        <p>Is Bot: {initDataUser?.isBot ? "Yes" : "No"}</p>
      </div>
    </div>
  )
}
