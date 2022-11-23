function Link (props) {
   return (
      <div className={props.class}> 
         <a href="#" aria-label={props.linkTitle !== null ? "Go to page " + props.linkTitle : "Go to page Homepage"}>{props.linkTitle || <img src={props.imgSrc} alt="" /> }</a>
      </div>
   )
}

export default Link