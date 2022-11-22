import React from "react";
import Main from "../template/Main";
import foto from '../../assets/img/foto.png'

export default props =>
    <Main icon="" title="Sobre Mim" subtitle="Para conhecer um pouco mais sobre minha pessoa!">
        <div>
            <div>
                <img className="foto" src={foto} alt="foto" align="left" />
            </div>

            <div className="sobreMim">
                <p> Meu nome é Rafael Augusto da Silva, tenho 22 anos,
                    nasci e moro na cidade de Extrema Minas Gerais.
                    Sou formado em Análise e Desenvolvimento de Sistemas pela
                    FAEX - Faculdade de Extrema. Sou uma pessoa proativa e que
                    tem muita vontade de aprender coisas novas.</p>
            </div>
        </div>

    </Main>