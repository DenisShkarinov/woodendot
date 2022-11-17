import './footer.scss'
import FooterLinks from './FooterLinks'

function Footer () {
   return (
      <footer>
         <div className="footer-container">
            <FooterLinks title="About" links={["About us", 'design', 'Sustainability', 'we plant trees', 'our story', 'awards']} />
            <FooterLinks title="help" links={["holiday offers FAQ", "FAQ", "Warranty", "shipments", "returns & claims", "contact us"]} />
            <FooterLinks title="more" links={["where to find us", "woodendot family", "press", "affiliates", "video lifestyle"]} />
         </div>
      </footer>
   )
}

export default Footer