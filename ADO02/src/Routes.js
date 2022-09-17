import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/home.js';
import Cadastro from './Pages/Cadastro/cadastro.js';
import Financiamento from './Pages/Financiamento/financiamento.js';
import MovCC from './Pages/MovCC/movCC.js';
import Sobre from './Pages/Sobre/sobre.js';

function RouterApp (){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/cadastro' element={<Cadastro/>}/>
                <Route path='/financiamento' element={<Financiamento/>}/>
                <Route path='/movCC' element={<MovCC/>}/>
                <Route path='/sobre' element={<Sobre/>}/>
            </Routes>
        </BrowserRouter>
    );
} 

export default RouterApp;
