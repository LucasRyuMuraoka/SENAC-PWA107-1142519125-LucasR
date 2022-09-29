import {Link} from 'react-router-dom';
import {useState} from 'react';

function Financiamento (){

    const [entradaCC, setEntradaCC] = useState('');
    const [entradaNome, setEntradaNome] = useState('');
    const [entradaValor, setEntradaValor] = useState('');
    const [entradaParcelas, setEntradaParcelas] = useState('');

    const [dadosUsuario, setDadosUsuario] = useState(
        {nomeDados:'PRIVADO', dadosCC:'XXXXXXX-X', valorDados:'0,00', parcelasDados:'0,00', jurosDados:'0,00'}
    );

    function calcularValor(dados){
        dados.preventDefault();
        
        var totalParcela = parseInt(entradaParcelas);
        var valorSolicitado = parseInt(entradaValor);
        var valorJuros = 0; 
        var valorTotal = 0;

        if(entradaParcelas === ''){
            totalParcela = 0;
        } else {
            totalParcela = parseInt(entradaParcelas);
        }

        if(entradaValor === ''){
            valorSolicitado = 0;
        } else {
            valorSolicitado = parseInt(entradaValor);
        }

        if(totalParcela === 0){
            valorTotal = valorSolicitado;
        } else {
            if (valorSolicitado > 3000 || totalParcela >= 11){
                valorJuros = 1.8;
                valorTotal = (valorSolicitado * valorJuros) / totalParcela;    
            } else {
                valorTotal = (valorSolicitado / totalParcela);   
            }
        }    
        setDadosUsuario(
            {nomeDados:entradaNome, dadosCC:entradaCC, valorDados:valorSolicitado, parcelasDados:valorTotal, jurosDados:valorJuros}
        );

        setEntradaCC('');
        setEntradaNome('');
        setEntradaValor('');
        setEntradaParcelas('');            

    }    

    return(
        <div>
            <div>
                <h1 align='center'>Financiamento</h1> 
            </div>

            <hr/>
            
            <div>
                <form onSubmit={calcularValor}>
                    <br/>
                    <label>C/C:&nbsp;</label>
                    <input type='text' placeholder='Digite a Conta Corrente' value={entradaCC} onChange={(evento) => setEntradaCC(evento.target.value)}></input>

                    <br/><br/>
                    <label>Nome:&nbsp;</label>
                    <input type='text' placeholder='Digite o Nome' value={entradaNome} onChange={(evento) => setEntradaNome(evento.target.value)}></input>

                    <br/><br/>
                    <label>Valor Solicitado:&nbsp;</label>
                    <input type='text' placeholder='Digite o Valor Solicitado' value={entradaValor} onChange={(evento) => setEntradaValor(evento.target.value)}></input>

                    <br/><br/>
                    <label>Parcelas:&nbsp;</label>
                    <input type='text' placeholder='Quantidade de Parcelas' value={entradaParcelas} onChange={(evento) => setEntradaParcelas(evento.target.value)}></input>

                    <br/><br/>
                    <button type='submit'>Calcular</button>
                </form>
            </div>

            <br/><hr/>

            <div>
                <h2 align='center'>Valores:</h2>
                <p>Cliente:&nbsp;{dadosUsuario.nomeDados}</p>
                <p>Número da Conta:&nbsp;{dadosUsuario.dadosCC}</p>
                <p>Valor Solicitado: R$ &nbsp;{dadosUsuario.valorDados}</p>
                <p>Valor da Parcela ≅ &nbsp;{dadosUsuario.parcelasDados} /mês</p>
                <p>Juros:&nbsp;{dadosUsuario.jurosDados}x</p>
            </div>

        </div>

    );    
}

export default Financiamento;