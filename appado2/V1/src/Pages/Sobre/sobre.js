import {Link} from 'react-router-dom'

function Sobre(){
    return (
        <div>
            <header>
                <nav align="center">
                    <span>
                        <Link to="/">Home</Link>&nbsp;|&nbsp; 
                        <Link to="/cadastro">Cadastro</Link>&nbsp;|&nbsp;
                        <Link to="/financiamento">Financiamento</Link>&nbsp;|&nbsp;
                        <Link to="/movCC">Movimentação C/C</Link>&nbsp;|&nbsp;
                        <Link to='/sobre'>Sobre Nos</Link> 
                    </span>
                </nav>
            </header>
            <div align="center">

                <h1>Sobre Nos</h1>
            </div>
            <hr/>
            <div>
                <p>ADO02 da máteria Programação WEB do curso Análise e desenvolvimento de Sistemas do campos SENAC - St Amaro</p>
                <p>Atividade desenvolvida para estudar sobre JSX e o uso do useState em aplicações Web</p>
                <hr/>
                <h3 align="center">Créditos:</h3>
                <p>Alunos: <a  href="https://github.com/LucasRyuMuraoka" target="_blank">Lucas Ryu Muraoka</a> e <a  href="https://github.com/Matheus-FSantos" target="_blank">Matheus Ferreira Santos</a><br></br></p>
                <p>Professor: <a href="https://github.com/ProfCarlosVerissimo" target="_blank">Carlos Henrique Veríssimo Pereira</a></p>
                <div align="center">
                    <img alt="senac-sp" height="auto" width="85" src="https://seeklogo.com/images/S/Senac-logo-7627EC15FE-seeklogo.com.png"/>
                </div>
            </div>
        </div>
    );
}

export default Sobre;