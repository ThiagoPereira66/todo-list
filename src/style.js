import styled from "styled-components";
import { FcCheckmark, FcFullTrash } from "react-icons/fc"; // importar icones

export const Container = styled.div`
background: linear-gradient(90deg, green, blue);
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

`
export const Lista = styled.div`
background: white;
border-radius: 5px;
padding: 10px 20px;

`
export const Botao = styled.button`
background: linear-gradient(40deg, orange , green);
padding: 10px;
border-radius: 5px;
border: none;
color: white;
cursor: pointer;

&:hover{
    opacity: .8;
}

`

export const Input = styled.input`
padding: 10px;
margin-right: 20px;
border-left: none;
border-right: none;
border-top: none;
border-bottom: 1px solid red;
outline: none;


`


export const Tarefas = styled.div`
list-style: none;
margin-top: 10px;
width: 100%;
padding: 8px;
border-radius: 5px;
box-shadow: 0 0 5px black;
transition: linear .5s;
display: flex;
justify-content: space-between;
align-items: center;
background: ${ props => props.estaTerminado ? '#e8ff8b' : 'none'}; // "?" se for true , ":" ser for false


`

export const Confrimar = styled(FcCheckmark)`
cursor: pointer;
`

export const Remover = styled(FcFullTrash)`
cursor: pointer;
`

export const H3 = styled.h3`
margin-top: 20px;
margin-left: 38px;
text-shadow: 0 0 20px red;
color: green;
`