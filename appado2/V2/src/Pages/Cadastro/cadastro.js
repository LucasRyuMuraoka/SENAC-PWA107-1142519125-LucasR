import {Link} from 'react-router-dom';
import {useState} from 'react';

function Cadastro (){
    const [entradaNome, setEntradaNome] = useState('');
    const [entradaEmail, setEntradaEmail] = useState('');
    const [entradaCPF, setEntradaCPF] = useState('');
    
    const [dadosUsuario, setDadosUsuario] = useState(
        {nomeDados:'PRIVADO', emailDados:'PRIVADO', cpfDados:'XXX.XXX.XXX-XX'}
    );

    function registrarUsuario(dados){
        dados.preventDefault();
        
        setDadosUsuario(
            {nomeDados:entradaNome, emailDados:entradaEmail, cpfDados:entradaCPF}
        );
        
        setEntradaNome('');
        setEntradaEmail('');
        setEntradaCPF('');
    }

    return(
        <div>
            <div>
                <h1 align='center'>Cadastro</h1> 
            </div>

            <hr/>

            <div>
                <form onSubmit={registrarUsuario}>
                    <br/>
                    <label>Nome:&nbsp;</label>
                    <input type='text' placeholder='Digite o seu Nome' value={entradaNome} onChange={(evento) => setEntradaNome(evento.target.value)}></input>
                    
                    <br/><br/>
                    <label>Email:&nbsp;</label>
                    <input type='email' placeholder='Digite o seu Email' value={entradaEmail} onChange={(evento) => setEntradaEmail(evento.target.value)}></input>

                    <br/><br/>
                    <label>CPF:&nbsp;</label>
                    <input type='text' placeholder='Digite o seu CPF' value={entradaCPF} onChange={(evento) => setEntradaCPF(evento.target.value)}></input>

                    <br/><br/>
                    <button type='submit'>Cadastrar</button>
                </form>
            </div>

            <br/><hr/>

            <div>
                <h2 align='center'>Dados informados:</h2>
                <p>Nome:&nbsp;{dadosUsuario.nomeDados}</p>
                <p>Email:&nbsp;{dadosUsuario.emailDados}</p>
                <p>CPF:&nbsp;{dadosUsuario.cpfDados}</p>
            </div>
        </div>
    );
}

export default Cadastro;