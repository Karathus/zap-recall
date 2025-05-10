import Cards from "./Cards"
import Progress from "./Progress"
import logo from "../assets/logo.png";
import styled from "styled-components";
import { useState } from "react";

function ZapInterface() {

    const [concluido, setConcluido] = useState(0);

    return (
        <UI>
            <Header>
                <img src={logo} alt="logo ZapRecal" />
                ZapRecall
            </Header>
            <Cards concluido={concluido} setConcluido={setConcluido}/>
            <Progress concluido={concluido}/>
        </UI>
    )
}

const UI = styled.div`
background-color: #FB6B6B;
height: calc(100vh - 70px);
display: flex;
flex-direction: column;
align-items: center;
`

const Header = styled.header`
margin-top: 45px;
color: #FFFFFF;
font-family: 'Righteous';
font-size: 36px;
font-weight: 400;
display: flex;
align-items: center;
gap: 25px;
img{
    height: 60px;
}
`

export default ZapInterface