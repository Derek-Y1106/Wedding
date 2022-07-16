import '../../scss/Poster.scss'

function PosterButton(props) {
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
        background:`url(${background_img})`,
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

export default PosterButton