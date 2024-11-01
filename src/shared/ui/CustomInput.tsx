import React from "react"

type FullName = {
  firstName: string
  lastName: string
}
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const CustomInput = React.forwardRef<HTMLInputElement, InputProps>(({ type, ...props }, ref) => {
  return (
    <input
      type={type}
      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
      ref={ref}
      {...props}
    />
  )
})
