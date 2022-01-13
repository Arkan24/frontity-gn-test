import { connect, styled } from "frontity";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { IoHelpOutline } from "react-icons/io5";
import { IoPulseOutline } from "react-icons/io5";
import Link from "@frontity/components/link";
import { BsSquareFill } from "react-icons/bs";
import { BsHexagonFill } from "react-icons/bs";
import { BsCircleFill } from "react-icons/bs";
import { BsTriangleFill } from "react-icons/bs";

import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = ({ state }) => {
  return (
    <>
      <footer className="uk-background-secondary uk-light">
        <div className="uk-container-large uk-container">
        <div className="uk-child-width-1-4 uk-text-left uk-grid" uk-grid="true">
            <div>
                <div className="uk-card uk-card-body">
                  <img uk-img="" width="200" alt="Goldnet ResNova" src="http://devgrn.goldnet.it/wp-content/uploads/2021/11/logo-goldnet-bianco.png" />
                  <div className="uk-margin-medium-top">
                    <Link link="" className="uk-icon-button uk-margin-small-right" ><FaLinkedinIn /></Link>
                    <Link link="" className="uk-icon-button  uk-margin-small-right"><FaFacebookF /></Link>
                    <Link link="" className="uk-icon-button"><FaInstagram /></Link>
                  </div>
                </div>

            </div>
          
          <div><div className="uk-card uk-card-body">
                            
                        <h3 className="uk-text-danger"> Servizi</h3>
                        <ul className="uk-list">
                          <li><Link className="uk-link-muted" link="#"><BsHexagonFill className="uk-margin-small-right text-internet icon-hexa" /> Connettività</Link></li>
                          <li><Link className="uk-link-muted" link="#"><BsSquareFill className="uk-margin-small-right text-data" /> Data Center</Link></li>
                          <li><Link className="uk-link-muted" link="#"><BsCircleFill className="uk-margin-small-right text-supporto" /> Supporto</Link></li>
                          <li><Link className="uk-link-muted" link="#"><BsTriangleFill className="uk-margin-small-right text-web icon-triangle" /> Web Agency</Link></li>
                          </ul>
                        </div>
                          
        </div>
          <div>
            <div className="uk-card uk-card-body">
                        
                      <h3 className="uk-text-danger"> Assistenza</h3>
                      <ul className="uk-list">
                      <li><Link className="uk-link-muted" link="mailto:supporto@goldnet.it"><IoMailOutline className="uk-margin-small-right" /> supporto@goldnet.it</Link></li>
                      <li><Link className="uk-link-muted" link="tel:0444965600"><IoCallOutline className="uk-margin-small-right" /> 0444 965600</Link></li>
                      <li><Link className="uk-link-muted" link="#"><IoPulseOutline className="uk-margin-small-right" /> Diagnostiche</Link></li>
                      <li><Link className="uk-link-muted" link="#"><IoHelpOutline className="uk-margin-small-right" /> F.A.Q.</Link></li>
                      </ul>
                    </div>
          </div>
            <div>
                    <div className="uk-card uk-card-body">
                      
                    <h3 className="uk-text-danger"> Contatti</h3>
                    <ul className="uk-list">
                    <li><Link className="uk-link-muted" link="mailto:info@goldnet.it"><IoMailOutline className="uk-margin-small-right" /> info@goldnet.it</Link></li>
                    <li><Link className="uk-link-muted" link="tel:0444965600 "><IoCallOutline className="uk-margin-small-right" /> 0444 965600 </Link></li>
                    <li className="uk-grid">
                      <Link className="uk-link-muted" link="#"><IoLocationOutline className="uk-margin-small-right" /> Via della Meccanica, 1/a 36100 Vicenza – Italy </Link></li>
                    </ul>
                    
                    </div>
                  
                  
                </div>
          </div>
            
      <hr />
      
      <div className="uk-grid" uk-grid="true">
        <div className="uk-width-expand">
            <div className="uk-text-small">
              <p>@2021 Goldnet S.r.l. | C.F. – P.IVA: IT 02182890240 Reg. Impr. VI n. 02182890240 | Cap. Soc. € 50.000,00 i.v.</p></div>
        </div>
        <div className="uk-width-auto">
            <div className="uk-text-right"><p><Link className="uk-margin-right" link="/cookie-policy">Cookies Policy</Link><Link link="/privacy-policy">Privacy Policy</Link></p></div>
        </div>
      
      </div>
    </div>
    </footer>    
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Footer);