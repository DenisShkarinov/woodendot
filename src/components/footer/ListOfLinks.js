function ListOfLinks (props) {
   
   return (
      <ul className="footer-links">
         {
            props.footerLinks.map((link, key) => {
               return (
               <li key={key}><a href="#">{link}</a></li>
            )}) 
         }
      </ul>
   )
}

export default ListOfLinks