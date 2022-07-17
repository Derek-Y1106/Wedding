import React from 'react'

function Motto(props) {
    const{
        layout,
        height,
        width,
        content,
        background_img,
        font_size,
        color,
    }= props;

    const styles={
        height: height,
        width: width,
        backgroundImage:`url(${background_img})`,
        color:color,
        fontSize:font_size,
    };

  return (
    <div>
        <div className={`parallax ${layout}`} style={styles}>
            {content}
        </div>
    </div>
  )
}

export default Motto