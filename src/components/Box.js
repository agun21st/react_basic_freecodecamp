import React from 'react'

export default function Box(props) {
    // const [isLogic, setIsLogic] = React.useState(props.on)

    const myStyle = {
        backgroundColor: props.on?"#222222":"transparent"
    }

    // function toggle(){
    //     setIsLogic(prevLogic => !prevLogic)
    // }

  return (
    <div style={myStyle} className="boxShape" onClick={props.toggle}></div>
  )
}
