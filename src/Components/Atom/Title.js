import React from 'react'

export default function Header({title} = "This is a title") {
  return (
    <header>
        <h1>{title}</h1>
    </header>
  )
}
