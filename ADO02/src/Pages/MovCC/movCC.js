import {Link} from 'react-router-dom';
import {useState} from 'react';

function MovCC(){
    
    const [entradaNome, setEntradaNome] = useState('');
    const [entradaCPF, setEntradaCPF] = useState('');
    const [entradaDep, setEntradaDep] = useState('');
    const [entradaSaque, setEntradaSaque] = useState('');
    const [entradaSaldo, setEntradaSaldo] = useState('');
    
    const [dadosUsuario, setDadosUsuario] = useState(
        {nomeDados:'PRIVADO', cpfDados:'XXX.XXX.XXX-XX', saldoDados:'0,00', depDados:'0,00', saqDados:'0,00'}
    );

    function atualizar(dados){
        dados.preventDefault();
        var saldo;
        var deposito;
        var saque;
        var total;

        if(entradaDep === ''){
            deposito = 0;
        } else {
            deposito = parseInt(entradaDep);
        }

        if(entradaSaque === ''){
            saque = 0;
        } else {
            saque = parseInt(entradaSaque);
        }

        if(entradaSaldo === ''){
            saldo = 0;
        } else {
            saldo = parseInt(entradaSaldo);
        }

        total = 0;

        total = ((saldo - saque) + deposito);

        setDadosUsuario(
            {nomeDados:entradaNome, cpfDados:entradaCPF, saldoDados:total, depDados:deposito, saqDados:saque}
        );

        setEntradaNome('');
        setEntradaCPF('');
        setEntradaSaldo('');
        setEntradaDep('');
        setEntradaSaque('');
    }
    
    return(
        <div>
            <div>
                <header>
                    <nav align='center'>
                        <span>
                            <Link to='/'>Home</Link>&nbsp;|&nbsp;
                            <Link to='/cadastro'>Cadastro</Link>&nbsp;|&nbsp;
                            <Link to='/financiamento'>Financiamento</Link>&nbsp;|&nbsp;
                            <Link to='/movCC'>Movimentação C/C</Link>&nbsp;|&nbsp;
                            <Link to='/sobre'>Sobre Nos</Link> 
                        </span>
                    </nav>
                </header>
            </div>
            
            <div>
                <h1 align='center'>Movimentação da Conta Corrente</h1> 
            </div>

            <hr/>

            <div>
                <form onSubmit={atualizar}>
                    <br/>
                    <label>Nome:&nbsp;</label>
                    <input type='text' placeholder='Digite o seu Nome' value={entradaNome} onChange={(evento) => setEntradaNome(evento.target.value)}></input>

                    <br/><br/>
                    <label>CPF:&nbsp;</label>
                    <input type='text' placeholder='Digite o seu CPF' value={entradaCPF} onChange={(evento) => setEntradaCPF(evento.target.value)}></input>

                    <br/><br/>
                    <label>Saldo:&nbsp;</label>
                    <input type='text' placeholder='Digite o Valor do Saldo' value={entradaSaldo} onChange={(evento) => setEntradaSaldo(evento.target.value)}></input>

                    <br/><br/>
                    <label>Depósito:&nbsp;</label>
                    <input type='text' placeholder='Digite o Valor do Depósito' value={entradaDep} onChange={(evento) => setEntradaDep(evento.target.value)}></input>

                    <br/><br/>
                    <label>Saque:&nbsp;</label>
                    <input type='text' placeholder='Digite o Valor do Saque' value={entradaSaque} onChange={(evento) => setEntradaSaque(evento.target.value)}></input>

                    <br/><br/>
                    <button type='submit'>Atualizar</button>
                </form>
            </div>

            <br/><hr/>

            <div>
                <h2 align='center'>Total</h2>
                <p>Cliente:&nbsp;{dadosUsuario.nomeDados}</p>
                <p>CPF:&nbsp;{dadosUsuario.cpfDados}</p>
                <p>Saldo:&nbsp;R$&nbsp;{dadosUsuario.saldoDados}</p>
                <p>Valor Depositado:&nbsp;+ R$&nbsp;{dadosUsuario.depDados}</p>
                <p>Valor Saque:&nbsp;- R$&nbsp;{dadosUsuario.saqDados}</p>
            </div>
        </div>
    );
}

export default MovCC;