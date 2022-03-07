import React from 'react'

export default function Button(props) {
  return (
    <button onClick={props.handleclick} className="btn btn-primary">Increase age</button>
  )
}