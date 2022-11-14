import './Header.scss'
import Logo from './Logo.webp'
import Link from './Link'
import Burger from './Burger'

function Header ({burgerIsPressed, setBurgerIsPressed}) {
   return (
      <header>
         <nav className="nav">
            <div className="nav-links">
               <ul className="sub-nav">
                  <Link class="nav-links" linkTitle="Wooden furniture"/>
                  <Link class="nav-links" linkTitle="About"/>
                  <Link class="nav-links" linkTitle="Stories"/>
               </ul>
            </div>
            <Link class="nav-links" linkTitle={null} imgSrc={Logo} />
         </nav>

         <ul className="nav-mobile">
            <Link linkTitle={null} imgSrc={Logo} />
            <Burger burgerIsPressed={burgerIsPressed} setBurgerIsPressed={setBurgerIsPressed}/>
            <div className={burgerIsPressed === false ? "nav-mobile__menu" : "nav-mobile__menu showed"}>
               <ul className="sub-menu">
                  <Link class="sub-menu__links" linkTitle="Wooden furniture" />
                  <Link class="sub-menu__links" linkTitle="About"/>
                  <Link class="sub-menu__links" linkTitle="Stories"/>
               </ul>
            </div>
         </ul>
      </header>
   )
}

export default Header