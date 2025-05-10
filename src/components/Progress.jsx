import styled from "styled-components"

function Progress({concluido}) {
    return(
        <Footer>
            {concluido}/10 CONCLUÍDOS
        </Footer>
    )
}

const Footer = styled.footer`
background-color: #FFFFFF;
font-family: 'Recursive';
font-size: 18px;
font-weight: 400;
color: #333333;
width: 100%;
height: 70px;
display: flex;
align-items: center;
justify-content: center;
position: fixed;
bottom: 0;
left: 0;
z-index: 1;
box-shadow: 0px -4px 6px 0px #0000000D;
`

export default Progress