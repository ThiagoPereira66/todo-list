// importar bibliotecas
import { v4 as uuidv4 } from 'uuid'; // necessaroi para criar um 'id' diferente
import { useState } from 'react'; // importar "useState"
import { Container, Lista, Botao, Input, Tarefas, Confrimar, Remover, H3 } from './style'; // impotar CSS "style.js"



function App() {
  // funções javaScript
  const [list, setList] = useState([]) // estrutura padrão do 'useState' iniciando vazio
  const [tarefa, setTarefa] = useState('')


  function ecrita(event) {
    setTarefa(event.target.value) // "setList" é usado para alterar um estado no React 

    console.log(list)

  }

  function cliquei() {
    if(tarefa){
    setList([...list, { id: uuidv4(), tarefa: tarefa, terminado: false }])// "...list" colocando os 3 pontos indica que vc vai adicionar um novo elemento dentro do array
    }
  }

  // tarefa realizada (pega o "id" do elemento)

  function tarefaRealizada(id) {
    
    const newList = list.map ( item =>(
      item.id === id ? {...item, terminado: !item.terminado } : item //"!" inverte valor "true" > "false", "false" > "true"
    ))

    setList(newList)
  }

  //deleatar tarefa

  function deletar(id) {
    const newList = list.filter (item => (item.id !== id))

    setList(newList)
  }


  // codigo HMTL
  return (
    <Container>

      <Lista>

        <Input onChange={ecrita} placeholder="o que tenho que fazer" />

        <Botao onClick={cliquei}>Adicionar</Botao>

        <ul>
          {
            
            list.length > 0 ? (
              list.map(item => (
                <Tarefas estaTerminado = {item.terminado} key={item.id}>
                  <Confrimar onClick={() => tarefaRealizada(item.id)}/> 
                  <li >{item.tarefa}</li>
                  <Remover onClick={() => deletar(item.id)}/>
                </Tarefas>
              ))
            ) : (<H3>NÃO HA TAREFAS</H3>)
          }
        </ul>

      </Lista>

    </Container>
  )
}

export default App
