import logo from '../../assets/img/logo.svg';

import './styles.css';

function Header() {
    return (

        <header>
            <div className="mtmeta-logo-container">
                <img src={logo} alt="MTSMeta" />
                <h1>MTSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="https://www.instagram.com/michael_dev_software/"> @mts technologies</a>
                </p>
            </div>
        </header>

    )
}

export default Header;