import React from 'react'

function CustomBar(props) {

  const { percent, word } = props;

    const outerBarStyle = {
      height: 40,
      width: 501,
      backgroundColor: "black",
      borderRadius: 20,
      margin: 10,
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }

    const innerBarStyle = {
        height: "100%",
        borderRadius: "inherit",
        width: percent ?? "0%",
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
            {word}
        </div>
    </div>
  )
}

export default CustomBar