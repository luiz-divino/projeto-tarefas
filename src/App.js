import { useEffect, useState } from "react";


function App() {
  const [input, setInput] = useState('')
  const [tarefas, setTarefa] = useState([])

  useEffect(()=>{
    const tarefasStorage = localStorage.getItem('@tarefas');

    if(tarefasStorage){
      setTarefa(JSON.parse(tarefasStorage))
    }
  }, [])

  useEffect(()=> {
    localStorage.setItem('@tarefas', JSON.stringify(tarefas) )
  }, [tarefas])

  function enviaFormulario(e) {
    e.preventDefault()
    setTarefa([...tarefas, input])
    setInput('')
  }

  return (
    <div>
      <h1>Seja Vindo</h1>

      <form onSubmit={enviaFormulario}>
        <label>Tarefa:
          <input type="text" value={input} onChange={(e)=> setInput(e.target.value)}></input>
        </label>

        <button type="submit">REGISTRAR</button>
      </form>

      <ul>
        {tarefas.map( tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;