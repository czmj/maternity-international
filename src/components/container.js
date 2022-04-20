import React from "react"

const Container = ({ children, as = "div", size = "max", align }) => {
  const Tag = as

  return (
    <Tag
      style={{
        maxWidth: `var(--size-${size}-width)`,
        width: "100%",
        margin: "0 auto",
        padding: "var(--space-2xl) var(--size-gutter)",
        ...(align && {
          textAlign: align,
        }),
      }}
    >
      {children}
    </Tag>
  )
}

export default Container
