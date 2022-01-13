import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import { IoChevronForwardOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { IoRocketOutline } from "react-icons/io5";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */

 const routeChange = () =>{ 
    let path = `contattaci`; 
    history.push(path);
  }


const SideNav = ({ state }) => (

    

    

    <div id="offcanvas-nav-primary" uk-offcanvas="flip: true; overlay: true;">
    <div className="uk-offcanvas-bar uk-flex uk-flex-column">
    <button class="uk-offcanvas-close" type="button" uk-close="true"></button>

        <ul className="uk-nav uk-nav-primary uk-nav-left uk-margin-auto-vertical" uk-nav="true">

            <li className="uk-parent">
                <Link link="">Connettività <IoChevronForwardOutline className="uk-margin-left" /></Link>
                <ul className="uk-nav-sub">
                    <li><Link link="">Wireless</Link></li>
                    <li><Link link="">Fibra Ottica</Link></li>
                    <li><Link link="">XDSL</Link></li>
                    <li><Link link="">VoIP</Link></li>
                </ul>
            </li>

            <li className="uk-parent">
                <Link link="">Data Center <IoChevronForwardOutline className="uk-margin-left" /></Link>
                <ul className="uk-nav-sub">
                    <li><Link link="">Cloud</Link></li>
                    <li><Link link="">Domini</Link></li>
                    <li><Link link="">Posta Elettronica</Link></li>
                    <li><Link link="">Posta PEC</Link></li>
                </ul>
            </li>

            <li className="uk-parent">
                <Link link="">Supporto <IoChevronForwardOutline className="uk-margin-left" /></Link>
                <ul className="uk-nav-sub">
                    <li><Link link="">Guide</Link></li>
                    <li><Link link="">Assistenza</Link></li>
                    <li><Link link="">Speed Test</Link></li>
                    <li><Link link="">Hardware</Link></li>
                    <li><Link link="">Software</Link></li>
                </ul>
            </li>

            <li className="uk-parent">
                <Link link="">Web Agency <IoChevronForwardOutline className="uk-margin-left" /></Link>
                <ul className="uk-nav-sub">
                    <li><Link link="">Sviluppo Siti ed App</Link></li>
                    <li><Link link="">Social Media Marketing</Link></li>
                    <li><Link link="">Web Marketing</Link></li>
                </ul>
            </li>
            <li className="uk-margin-large-top"></li>
            <li className="uk-parent">
                <Link link="/chi-siamo"><IoPeopleOutline className="uk-margin-right"/>Chi Siamo</Link>               
            </li>
            <li className="uk-parent">
                <Link link="/contattaci"><IoRocketOutline className="uk-margin-right"/>Contattaci</Link>               
            </li>
        </ul>

    </div>
</div>
);

export default connect(SideNav);

