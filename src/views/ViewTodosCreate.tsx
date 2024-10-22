import { Badge, Button, Card, Input, Textarea } from "@telegram-apps/telegram-ui"
import { X } from "lucide-react"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
export const ViewTodosCreate = () => {
  const useFormCreate = useForm()
  return (
    <div className="container">
      <form className="space-y-4">
        <div className="space-y-1">
          <label className="text-stone-700">Question</label>
          <div className="*:p-0">
            <Input
              className="m-0"
              placeholder="Title"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-stone-700">Answer</label>
          <div className="*:p-0">
            <Textarea
              className="m-0"
              placeholder="Title"
            />
          </div>
        </div>

        <div className="flex items-center space-x-2 *:flex-1">
        <Button className="bg-red-500" after={<X className="size-4"/>} type="reset">Reset</Button>
          <Button>Save</Button>
        </div>
      </form>
    </div>
  )
}
