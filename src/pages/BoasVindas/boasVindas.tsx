import React from 'react';
import './style.css';

import Header from "../../components/Header/headerUser";
import Footer from "../../components/Footer/footer";
import Button from '../../components/Button/button';

export default function BoasVindas () {
  return (
    <>

      <Header caminho="alterar-dados" username="Carlos Teste" empresaJ="CT Junior"/>

        <section className="centralizarTitulo">
          <h1><strong>Boas vindas, Carlos</strong></h1>
        </section>

        <p className="centralizarParagrafo">
          Você deverá escolher um quarto dentre os disponibilizados. Caso 
          queira trocar de quarto, basta escolher outro quarto que têm vagas
          disponíveis até a data limite. Para ver detalhadamente as 
          informações de cada quarto, escolha a opção “ver quartos”.
        </p>
        
        <div className="centralizarButtons">
          <Button caminho="selecionar-quarto" classname='bttWelcome' insideText='Ver quartos'/>
        </div>
      
      <Footer classname='footerBoasvindas'/>
        
    </>
  );
}