import { useState } from "react";
import CheckList from "../components/CheckList";

export default function ToDoList() {
  const [toDo, setToDo] = useState(["I have a bike", "I have a car"]);
  const [donne, setDonne] = useState([
    "I have a bike",
    "I have a car",
    " I have a boat"
  ]);
  const [newWork, setNewWork] = useState("");

  return (
    <>
      <h1> To Do </h1>
      <div className="App">
        <form
          onSubmit={() => {
            let newTodo = toDo;
            newTodo.push(newWork);
            setToDo(newTodo);
            setNewWork("");
          }}
        >
          <input
            type="text"
            value={newWork}
            onChange={(e) => setNewWork(e.target.value)}
          />
        </form>
        <form>
          {toDo.map((value, id) => (
            <CheckList
              value={value}
              id={`todo${id}`}
              functionCheck={(str) => {
                let newDonne = donne;
                newDonne.push(str);
                setDonne(newDonne);
              }}
            />
          ))}
        </form>
      </div>
      <h1> Donne </h1>
      <div className="App">
        <form>
          {donne.map((value, id) => (
            <CheckList value={value} id={id} functionCheck={() => {}} />
          ))}
        </form>
      </div>
    </>
  );
}
