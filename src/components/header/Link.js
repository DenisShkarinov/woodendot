function Link (props) {
   
   return (
      <div className={props.class}> 
         <a href="#" aria-label={props.linkTitle ?? "Go to Homepage"}>{props.linkTitle ?? <img src={props.imgSrc} alt="Woodendot" /> }</a>
      </div>
   )
}

export default Link