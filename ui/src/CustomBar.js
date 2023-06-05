import React from 'react'

function CustomBar(props) {

    const outerBarStyle = {
      height: 50,
      width: 401,
      backgroundColor: "black",
      borderRadius: 20,
      margin: 20,
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }

    const innerBarStyle = {
        height: "100%",
        borderRadius: "inherit",
        width: 200,
        backgroundColor: "green",
        position: "absolute",
        left: 0,
    }

    const textStyle = {
        position: "absolute",
        color: "white",
    }

  return (
    <div style={outerBarStyle}>
        <div style={innerBarStyle}>

        </div>
        <div style={textStyle}>
            Deneme
        </div>
    </div>
  )
}

export default CustomBar