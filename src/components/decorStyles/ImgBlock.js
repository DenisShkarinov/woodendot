
function ImgBlock (props) {
   return (
      <div className="img-block">
         <img src={props.src} alt={props.title} />
         <div className="overlay">
            <button aria-label="See more">See More</button>
         </div>
      </div>
   )
}

export default ImgBlock