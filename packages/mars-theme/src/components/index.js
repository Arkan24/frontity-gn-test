import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import Footer from "./footer";
import Page from "./page";
import Help from "./help";
import SideNav from "./sidenav";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 *
 * @param props - The props injected by Frontity's {@link connect} HOC.
 *
 * @returns The top-level react component representing the theme.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="it" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.7.6/dist/css/uikit.min.css" />
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.7.6/dist/js/uikit.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.7.6/dist/js/uikit-icons.min.js"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;600;700&family=Urbanist:wght@400;500;700&display=swap"
          rel="stylesheet"></link>
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <HeadContainer>
        <Header />
      </HeadContainer>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <Post when={data.isPost} />
          <Page when={data.isPage} />
          <PageError when={data.isError} />
        </Switch>
      </Main>
      <Footer />
      <Help></Help>
      <SideNav></SideNav>
      
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  html, body {
    font-size: 20px;
    font-family: 'Urbanist', sans-serif;
    color: #111;    
  }

  h1, h2, h3, h4 {
    font-family: 'Maven Pro', sans-serif;    
  }

  h1 {
    font-weight: 500;
    font-size: 64px; 
  }

  .hero-title {
    margin-bottom: 125px!important; 
  }

  .hero-title p {
    font-size: 40px;
    line-height: normal;
    color: #23233280;
    max-width:450px;
  }

  .hero-title h1 {
    color: #111;
    font-size: 80px;
    font-weight: 500; 
  }

  .hero-img {
    aspect-ratio: 940 / 940;
  }

  .hero-section {
    padding-top:120px;
    padding-bottom:120px;
  }

  #servizi {
    margin-top: -125px;
    background: #000d15;
    color: #fff!important;
  }

  #web {
    margin-top: -125px;
    background: #d7c1f5;
  }

  .bg-web {
    background: #d7c1f5;
  }

  #servizi h2 {
    padding-bottom: 60px;
  }

  h2 {
    font-size: 52px;
    font-weight: 400;
  }

  #servizi h3 {
    font-size: 36px;
    font-weight: 500;
  }

  .uk-button-secondary {
    font-weight: 500;
    color: #fff;
    border-radius: 3px;
    background: #111;
  }
  .uk-button-secondary:hover {
    color: #fff;
    background: #e2001a;
  }

  .uk-button-default {
    border-radius: 3px;
    border-color: #111;
    font-weight: 500;
    color: #111;
  }

  .uk-button-default:hover {   
    border-color: #e2001a;
    color: #fff;
    background: #e2001a;
  }

  .uk-button-primary {
    font-weight: 500;
    color: #fff;
    border-radius: 3px;
    background: #e2001a;
  }
  .uk-button-primary:hover {
    color: #fff;
    background: #111;
  }

  .text-internet {
    color: #31d8d2;
  }

  .text-data {
    color: #ff9933;
  }

  .link-data a {
    color: #ff9933!important;
  }
  .link-web a {
    color: #762cdd!important;
  }
  .link-supporto a {
    color: #31e981!important;
  } 
  .link-internet a {
    color: #31d8d2!important;
  }

  .text-web {
    color: #762cdd!important;
  }  

  .text-supporto {
    color: #31e981;
  } 

  .icon-triangle {
    transform: rotate(90deg);
  }

  .icon-hexa {
    width: 1.1em;
  }

  #square {
    width: 100px;
    height: 100px;
    background: #ff9933;
  }

  #circle {
    width: 100px;
    height: 100px;
    background: #31e981;
    border-radius: 50%
  }

  #triangle {
    width: 0;
    height: 0;
    border-top: 50px solid transparent;
    border-left: 100px solid #762cdd;
    border-bottom: 50px solid transparent;
  }

  #hexagon {
    width: 100px;
    height: 57.735px;
    background: #31d8d2;
    position: relative;
  }
  #hexagon::before {
    content: "";
    position: absolute;
    top: -28.8675px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 28.8675px solid #31d8d2;
  }
  #hexagon::after {
    content: "";
    position: absolute;
    bottom: -28.8675px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-top: 28.8675px solid #31d8d2;
  }

  .icona-100 {
    height: 100px;
  }

  .uk-text-lead.uk-display-inline a {
    display: inline;
    text-decoration: underline;
    margin-right: 10px;
  }

  .uk-text-lead.uk-display-inline br {
    display: none;
  }

  blockquote {
    font-size: 27px;
    position: relative;
    margin: 0;
    padding: .5rem;
    font-style: normal;
  }
  
  .quote {
    color: #e2001a;
    font-size: 8rem;
  }


  .hero-container {
    max-width: 1920px;
    position:relative;
  }

  .hero-container-title {
    min-height: 800px;
    max-height: 940px;
  }

  .hero-padding{
    padding-top:11rem;
  }

  .hero-container-img {
    position: absolute;
    max-width:50%;
    top: 0;
    right: 0;
  }

  .margin-top-minus {
    margin-top: -125px;
  }

  .hero-container-img-left {
    position: absolute;
    max-width:50%;
    top: 0;
    bottom: 0;
    left: 0;
  }

  .hero-container-img-right {
    position: absolute;
    max-width:50%;
    top: 0;
    bottom: 0;
    right: 0;
  }
  
  .uk-navbar-item, .uk-navbar-nav>li>a {
    padding: 0px 20px;
    min-height:100px;
    max-height: 100px;
    position: relative;

  }

  .uk-navbar-item .icona svg {
    height: 28px;
    width: 28px;
    color: #111; 
  }

  .uk-navbar li .head-nav:hover::after {
    position: absolute;
    top:0;
    left:0;
    right: 0;
    width: auto;
    background:#e2001a;
    height:10px;
    content: '';
    display:block;
  }

  .uk-text-danger {
    color: #e2001a!important;
  }

  footer li a {
    color: #fff!important;
  }

  footer li a:hover {
    color: #e2001a!important;
  }

  .uk-background-secondary {
    background: #000d15!important;
  }

  #servizi a:hover {
    color: #e2001a!important;
  }

  .help-div {
    background: #31e981;
    border-radius: 3px;
  }

  .help-div:hover {
    background: #a3f5c6;
  }

  .help-div a {
    text-decotarion: none!important;
  }

  .help-div a:hover {
    text-decotarion: none!important;
    color: #111!important;
  }

  .help-div a:hover h4 {
    color: #111!important;
  }

  .uk-modal-close-full {
    background: transparent!important;
  }

  .uk-modal-container .uk-modal-dialog {
    border-radius:20px;
    max-width: 1400px;
  }
  .uk-close-large {
    max-width: 80px;
    width: 100%;
  }

  .uk-close-large svg {
    width: 100%;
  }

  .uk-child-width-1-7 div {
    max-width: 14%;
  }

  .uk-child-width-1-7 div img {
    width: 120px;
    height: auto;
    filter: grayscale(1);
  }

  .uk-section-primary {
    background: #e2001a;
  }

  .uk-section-primary .uk-button-primary {
    background: #111!important;
    color: #fff!important;
    border-color: #111;
  }

  .uk-section-primary .uk-button-primary:hover {
    background: transparent!important;
    color: #fff!important;
  }

  .cta .icona-100 {
    height: 50px;
  }

  .cta #square {
    width: 50px;
    height: 50px;
    background: #fff;
  }

  .cta #circle {
    width: 50px;
    height: 50px;
    background: #fff;
    border-radius: 50%
  }

  .cta #triangle {
    width: 0;
    height: 0;
    border-top: 25px solid transparent;
    border-left: 50px solid #fff;
    border-bottom: 25px solid transparent;
  }

  .cta #hexagon {
    width: 50px;
    height: 28.8675px;;
    background: #fff;
    position: relative;
  }
  .cta #hexagon::before {
    content: "";
    position: absolute;
    top: -14.43375px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    border-bottom: 14.43375px solid #fff;
  }
  .cta #hexagon::after {
    content: "";
    position: absolute;
    bottom: -14.43375px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    border-top: 14.43375px solid #fff;
  }

  .quote-left {
    transform: scale(-1,-1);
  }

  .uk-navbar-dropdown-nav li a:hover {
    text-decoration: underline;
    color: #e2001a!important;
  }
  
  .uk-navbar-dropdown-grid>:not(.uk-first-column)::before {
    border-left:none!important;
  }

  .uk-navbar-dropdown {
    border-top: 1px solid #eee;
  }

  .uk-dotnav>*>* {
    width: 55px;
    height: 5px;
    background-color:#ddd;
    border:none!important; 
    border-radius: 2px!important;
  }

  .uk-dotnav>.uk-active>* {
    background-color:#222;
  }

  @media (min-width: 960px) {
    .uk-offcanvas-bar {
      left: -450px;
      width: 450px;
    }
  }

  .uk-offcanvas-bar {
    background: #000d15;
    color: #fff;
  }

  .uk-offcanvas-bar li a {
    color: #fff!important;
  }

  .uk-offcanvas-bar li a:hover {
    color: #e2001a!important;
  }
  
  .uk-accordion .uk-open .uk-accordion-title {
    color: #31e981!important;
  }





  
`;

const HeadContainer = styled.div`
  
`;

const Main = styled.div`
  
`;
