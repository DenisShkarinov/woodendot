function ListOfLinks (props) {
   
   return (
      <ul className="footer-links">
         {
            props.footerLinks.map((link, key) => {
               return (
               <li key={key}><a href="#" aria-label={"Go to page " + link}>{link}</a></li>
            )}) 
         }
      </ul>
   )
}

export default ListOfLinks