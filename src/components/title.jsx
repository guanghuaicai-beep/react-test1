import React from 'react'

const title = ({title,subtitle}) => {
  return (
    <h2>
        {title} <span>{subtitle}</span>
    </h2>
  )
}

export default title