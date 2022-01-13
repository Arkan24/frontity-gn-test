import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import { IoMenuOutline } from "react-icons/io5";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Nav = ({ state }) => (
  <NavBackground className="uk-container uk-container-expand">
  <div className="uk-container-large uk-container uk-position-relative"> 
  <div className="uk-navbar-container uk-navbar uk-navbar-transparent " uk-navbar="dropbar: true; mode: click;">
    

    <div className="uk-navbar-left">

    <Link className="uk-navbar-item uk-logo uk-padding" link="/"><img uk-img="" width="170" alt="Goldnet ResNova" src="https://www.goldnetresnova.it/images/Goldnet-ResNova.png" /></Link>
    </div>

    <div className="uk-navbar-center">
    <ul className="uk-navbar-nav">

    <li>
      <Link className="head-nav" link="" title="connetività">Connettività</Link>
      <div className="uk-navbar-dropdown uk-navbar-dropdown-width-2">
        <div className="uk-navbar-dropdown-grid uk-grid" uk-grid="true">
          <div className="uk-width-1-2@s">
                                      
            <img src="http://devgrn.goldnet.it/wp-content/uploads/2021/11/Esagono-menu.png" />                             
          </div>
          
          <div className="uk-width-expand">
            <ul className="uk-nav uk-navbar-dropdown-nav">
              <li className="link-internet uk-text-bold"><Link link="/connetivita">Connettività</Link></li>

              <li><Link link="">Wireless</Link></li>
              <li><Link link="">Fibra Ottica</Link></li>
              <li><Link link="">XDSL</Link></li>
              <li><Link link="">VoIP</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </li>
    
    <li>
      <Link className="head-nav" link="" title="data center">Data Center</Link>
      <div className="uk-navbar-dropdown uk-navbar-dropdown-width-2">
        <div className="uk-navbar-dropdown-grid uk-grid" uk-grid="true">
          <div className="uk-width-1-2@s">
                                    
            <img src="http://devgrn.goldnet.it/wp-content/uploads/2021/11/Quadrato-Menu.png" />                             
          </div>
          
          <div className="uk-width-expand">
            <ul className="uk-nav uk-navbar-dropdown-nav">
              <li className="link-data uk-text-bold"><Link link="/data-center">Data Center</Link></li>

              <li><Link link="">Cloud</Link></li>
              <li><Link link="">Domini</Link></li>
              <li><Link link="">Posta Elettronica</Link></li>
              <li><Link link="">Posta PEC</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </li>      
      
    <li>
      <Link className="head-nav" link="" title="supporto">Supporto</Link>
      <div className="uk-navbar-dropdown uk-navbar-dropdown-width-2">
      
        <div className="uk-navbar-dropdown-grid uk-grid" uk-grid="true">
          <div className="uk-width-1-2@s">                          
            <img src="http://devgrn.goldnet.it/wp-content/uploads/2021/11/Cerchio-Menu.png" />                             
          </div>
          
          <div className="uk-width-expand">
            <ul className="uk-nav uk-navbar-dropdown-nav">
              <li className="link-supporto uk-text-bold"><Link link="/supporto">Supporto</Link></li>

              <li><Link link="">Guide</Link></li>
              <li><Link link="">Assistenza</Link></li>
              <li><Link link="">Speed Test</Link></li>
              <li><Link link="">Hardware</Link></li>
              <li><Link link="">Software</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </li>   

    <li>
      <p className="head-nav" title="web agency">Web Agency</p>
      <div className="uk-navbar-dropdown uk-navbar-dropdown-width-2">
        <div className="uk-navbar-dropdown-grid uk-grid" uk-grid="true">
          <div className="uk-width-1-2@s">
                                    
            <img src="http://devgrn.goldnet.it/wp-content/uploads/2021/11/Triangolo-menu.png" />                             
          </div>
          
          <div className="uk-width-expand">
            <ul className="uk-nav uk-navbar-dropdown-nav">
              <li className="link-web uk-text-bold"><Link link="/web-agency">Web Agency</Link></li>

              <li><Link link="">Sviluppo Siti ed App</Link></li>
              <li><Link link="">Social Media Marketing</Link></li>
              <li><Link link="">Web Marketing</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </li>

    </ul>

    </div>

    <div className="uk-navbar-right">
    
      <div className="uk-navbar-item">            
        <button className="uk-button uk-button-large uk-button-default">Webmail</button>            
      </div>
      <div className="uk-navbar-item">
        <a href="#" className="icona uk-navbar-toggle" uk-toggle="target: #offcanvas-nav-primary"><IoMenuOutline /></a>        
      </div>    
    </div>   
  </div>
</div>
  </NavBackground>
);

export default connect(Nav);


const NavBackground = styled.div`
  background: #fff!important; 

  .uk-navbar-dropdown-width-2 {
    width: 500px;
  }

  li a {
    color: #111;
    font-size: 18px!important;
    text-transform: capitalize!important;
    font-weight: 400;
  }
      
`;
