import {Link} from 'react-router-dom';

function Home (){
    return(
        <div>
            <div>
                <h1 align='center'>Início</h1>
            </div>

            <hr/>

            <div>
                <p align="center">
                    Clique em algum campo da barra de menu acima para ser redirecionado a outra página
                </p>
            </div>
        </div>
    );
}

export default Home;