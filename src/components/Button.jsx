import '../scss/Poster.scss'

function Button(props) {
    const{
        layout,
        height,
        width,
        content,
        background_img,
        color,
    } = props;
    
    const styles={
        height: height,
        width: width,
        backgroundImage:`url(${background_img})`,
        color:color,
    };

  return (
    <div>
        <button className={`button ${layout}`} style={styles}>
            {content}
        </button>
    </div>
  )
}

export default Button