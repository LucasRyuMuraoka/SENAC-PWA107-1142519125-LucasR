import { Link } from 'react-router-dom';
import style from './style.css';

function Header(){
    return(
        <header>
            <h2 class="titulo_cabecalho">&nbsp;BancoX</h2>
            <div>
                <Link class='link_cabecalho' to='/'>Home</Link>&nbsp;&nbsp;
                <Link class='link_cabecalho' to='/cadastro'>Cadastro</Link>
                <Link class='link_cabecalho' to='/financiamento'>Financiamento</Link>                          
                <Link class='link_cabecalho' to='/movCC'>Movimentação C/C</Link>
                <Link class='link_cabecalho' to='/sobre'>Sobre Nos</Link>&nbsp;
            </div>
        </header>
    );
}

export default Header;