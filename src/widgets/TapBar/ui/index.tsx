import { Link } from "@tanstack/react-router"
import { Button, Input, Modal, Textarea } from "@telegram-apps/telegram-ui"
import { ModalHeader } from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader"
import { Plus } from "lucide-react"
import { useState } from "react"

type Props = {}

export const TapBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const onOpen = () => setIsOpen(true)
  return (
    <>
      <Button className="fixed bottom-2 right-2 h-auto w-auto min-w-0 rounded-full p-2">
        <Link
          to="/profile/todos/create"
          className="relative h-full w-full">
          <Plus />
        </Link>
      </Button>
    </>
  )
}
