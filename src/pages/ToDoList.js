import { useState } from "react";
import CheckList from "../components/CheckList";
import CheckListDonne from "../components/CheckListDonne";



export default function ToDoList() {
  const [toDo, setToDo] = useState([]);
  const [donne, setDonne] = useState([]);
  const [newWork, setNewWork] = useState("");

  return (
    <>
      <h1> To Do </h1>
      <div className="App">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            setToDo([newWork, ...toDo]);
            setNewWork("");
          }}
        >
          <input
            type="text"
            value={newWork}
            onChange={(e) => setNewWork(e.target.value)}
          /><br/>
          {toDo.map((value, id) => (
            <CheckList
              value={value}
              id={`todo${id}`}
              functionClick={
                () => {
                setDonne([value, ...donne]);
                setToDo([...toDo.slice(0,Math.max(id,0)),...toDo.slice(id+1,toDo.length)])
                }
              }
            />
          ))}
        </form>
      </div>
      <h1> Donne </h1>
      <div className="App">
        <form>
          {donne.map((value, id) => (
            <CheckListDonne value={value} id={id} />
          ))}
        </form>
      </div>
    </>
  );
}
