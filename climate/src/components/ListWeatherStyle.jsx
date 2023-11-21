import styled from "styled-components";

export const TituloSecundatio = styled.h3`
    font-size: 1.2em;
    margin-bottom: 1em;
    text-align:center;
    color: #eaeaea
`

export const ListaPrevisoes = styled.ul`

    li{
        padding:10px;
        display:grid;
        grid-template-columns: 100px 150px ;
        justify-content:center;
        
        gap: .6em;
        margin-bottom: .5em;
        
        p{
            color: #eaeaea;
            
        }

        span{
            color: #eaeaea;
            justify-self:center;
            align-self:center;
        }

        .hrs{
            font-size:1.5em;
        }

        img{
            width:60px
        }
    }
`