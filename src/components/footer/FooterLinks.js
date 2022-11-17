import ListOfLinks from "./ListOfLinks"

function FooterLinks (props) {
   return (
      <div className="footer-link-block">
         <div className="link-block-title">
            <h2>{props.title}</h2>
         </div>
         <ListOfLinks footerLinks={props.links} />
      </div>
   )
}

export default FooterLinks