function Link (props) {
   return (
      <li className={props.class}> 
         <a href="#" >{props.linkTitle || <img src={props.imgSrc} alt="" /> }</a>
      </li>
   )
}

export default Link