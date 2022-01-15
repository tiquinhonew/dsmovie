import { ReactComponent as GithubIcon } from 'assets/img/github.svg'; //importando imagem
import './styles.css';

function Navbar() {

    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/tiquinhonew">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/TiquinhoNew</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar; //exportando a função para usar em outro componente