import { IoChevronDownOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { connect, styled } from "frontity"
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";


const Help = ({ state }) => {
  
  const data = state.source.get(state.router.link)

  const showHelp = () => {
    UIkit.modal("#help-assistenza").show();
  }

  const closeHelp = () => {
    UIkit.modal("#help-assistenza").hide();
  }

  return (
    <div>
        <HelpContainer className="uk-visible@m">
            <div className="uk-text-center help-div">
                <a href="#" onClick={showHelp}>
                    <h4 className="uk-padding-small">Assistenza<IoChevronDownOutline className="uk-margin-small-left" /></h4>
                </a>
            </div>      
        </HelpContainer>

        <div id="help-assistenza" className="uk-modal-container uk-modal uk-flex-top" uk-modal="true">
            <div className="uk-modal-dialog uk-background-secondary uk-light uk-margin-auto-vertical">
                
                <a href="#" className="uk-modal-close-full uk-close-large"><IoCloseOutline /></a>
                <div className="uk-grid-collapse uk-flex-middle uk-grid" uk-grid="true">
                    <Sfondo className="uk-width-1-4@s uk-background-cover" />
                    <SupportoIcone className="uk-width-1-6@s">
                        <div className="uk-padding">
                            <a href="" className="uk-icon-button" ><IoCallOutline /></a>
                        </div>
                        <div className="uk-padding">
                            <a href="" className="uk-icon-button" ><IoMailOutline /></a>
                        </div>
                        <div className="uk-padding">
                            <a href="" className="uk-icon-button" ><IoLogoWhatsapp /></a>
                        </div>

                    </SupportoIcone>
                    <div className="uk-padding-large uk-width-expand@s">
                        <h2>Assistenza Tecnica</h2>
                        <p>Siamo qui per aiutarti, contattaci usando i pulsanti sulla sinistra oppure da un'occhiata qui sotto alla problematiche più comuni.</p>
                        <ul uk-accordion="collapsible: false">
                            <li>
                                <a className="uk-accordion-title" href="#">Come modificare la password della casella di posta.</a>
                                <div className="uk-accordion-content">
                                    
                                        <ol>
                                            <li>Accedere alla Webmail con le credenziali attuali (indirizzo e-mail completo e password). Si consiglia di selezionare il tema LookOut</li>
                                            <li>Cliccare sull'icona dell'ingranaggio (in alto a destra), quindi su "Sicurezza"</li>
                                            <li>Su "Password richiesta", "Password corrente" digitare la password attuale</li>
                                            <li>Su "Cambia password", "Nuova password" inserire la nuova password e riscriverla su "Conferma password"</li>
                                            <li>Salvare la modifica cliccando sul pulsante "Salva", all'inizio della pagina</li>
                                        </ol>
                                    
                                </div>
                            </li>
                            <li>
                                <a className="uk-accordion-title" href="#">Ho esaurito lo spazio sulla casella, cosa posso fare?</a>
                                <div className="uk-accordion-content">
                                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
                                </div>
                            </li>
                            <li>
                                <a className="uk-accordion-title" href="#">Ho notato dei rallentamenti sulla mia linea, si può fare qualcosa?</a>
                                <div className="uk-accordion-content">
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default connect(Help)

const HelpContainer = styled.div`
    
    position: fixed;
    top:0;
    bottom: 0;
    border-radius: 3px;
    right: -500px;
    h4{ color: #fff; }   
    transform: rotate(-90deg);    
`;


const SupportoIcone = styled.div`
    .uk-icon-button {
        width:100%;
        height:auto;
        padding: 25%;
        color: #fff;
    }

    .uk-icon-button:hover {
        width:100%;
        height:auto;
        padding: 25%;
        color: #31e981;
    }

    .uk-icon-button svg {
        width:100%;
        height:auto;
    }


`;

const Sfondo = styled.div`
    background-image: url("https://images.unsplash.com/photo-1544717301-9cdcb1f5940f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3270&q=80");
    height: 90vh;
    border-radius: 20px 0 0 20px;

`;