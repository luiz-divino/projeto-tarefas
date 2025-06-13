import { useState, useEffect } from "react";

function App() {
  const [tarefas, setTarefa] = useState([]);
  const [input, setInput] = useState('');

  useEffect(()=>{
    const tarefasStorage = localStorage.getItem('@tarefas')

    if(tarefasStorage){
      setTarefa(JSON.parse(tarefasStorage))
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('@tarefas', JSON.stringify(tarefas))
  },[tarefas])

  function registraTarefa(e) {
    e.preventDefault();
    setTarefa([...tarefas, input])
    setInput('');
  }

  return (
    <div>
      <h1>Lista de tarefas</h1>
      <form onSubmit={registraTarefa}>
        <input type="text" placeholder="Digite sua tarefa" value={input} onChange={(e) => setInput(e.target.value)} /><br></br><br></br>
        <button type="submit">Registrar</button>
      </form>

      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;