function Link (props) {
   return (
      <li className="nav-links"> 
         <a href="#" >{props.linkTitle || <img src={props.imgSrc} alt="" /> }</a>
      </li>
   )
}

export default Link