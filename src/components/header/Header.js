import './Header.scss'
import Logo from './Logo.png'
import Link from './Link'
import Burger from './Burger'

function Header () {
   return (
      <header>
         <ul className="nav">
            <li className="nav-links">
               <ul className="sub-nav">
                  <Link linkTitle="Wooden furniture"/>
                  <Link linkTitle="About"/>
                  <Link linkTitle="Stories"/>
               </ul>
            </li>
            <Link linkTitle={null} imgSrc={Logo} />
         </ul>

         <ul className="nav-mobile">
            <Link linkTitle={null} imgSrc={Logo} />
            <Burger />
         </ul>
      </header>
   )
}

export default Header