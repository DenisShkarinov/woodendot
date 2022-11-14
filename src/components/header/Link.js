function Link (props) {
   return (
      <div className={props.class}> 
         <a href="#" >{props.linkTitle || <img src={props.imgSrc} alt="" /> }</a>
      </div>
   )
}

export default Link