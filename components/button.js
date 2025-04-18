import React from "react"

// Simple utility function to merge classNames
const mergeClassNames = (...classes) => {
  return classes.filter(Boolean).join(" ")
}

const TicketButton = React.forwardRef(({ children, className, ...props }, ref) => {
  return (
    <button
      className={mergeClassNames(
        "bg-[#ff3b41] text-white font-medium px-6 py-2 rounded-md hover:bg-[#e63538] transition-colors",
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  )
})
TicketButton.displayName = "TicketButton"

export { TicketButton }
