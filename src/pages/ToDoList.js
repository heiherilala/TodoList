import { useState } from "react";
import CheckList from "../components/CheckList";



export default function ToDoList() {
  const [toDo, setToDo] = useState([]);
  const [donne, setDonne] = useState([]);
  const [newWork, setNewWork] = useState("");

  return (
    <div className="container todo-container">
      <div className="row">
        <div className="to-do-table d-flex flex-column justify-content-start col-sm-5 card bg-secondary">
          <div className="card-header text-white"> To Do </div>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              if (!newWork==""){
                setToDo([newWork, ...toDo]);
                setNewWork("");
              }
            }}
          >
            <input
              className="w-100"
              type="text"
              value={newWork}
              placeholder="Write a 'to do' "
              onChange={(e) => setNewWork(e.target.value)}
            />
            {toDo.map((value, id) => (
              <CheckList
                value={value}
                id={`todo${id}`}
                functionClick={
                  () => {
                    if (!value=="") {
                      setDonne([value, ...donne]);
                      setToDo([...toDo.slice(0,Math.max(id,0)),...toDo.slice(id+1,toDo.length)])                      
                    }
                  }
                }
                checked={true}
                key={"to_do_key_"+id}
              />
            ))}
          </form>
        </div>
        
        <div className="to-do-table d-flex flex-column justify-content-start col-sm-5 card bg-secondary">
        <div className="card-header text-white"> Done </div>
          <form>
            {donne.map((value, id) => (
              <CheckList value={value} id={id} checked={false} key={"done_key_"+id}/>
            ))}
          </form>
        </div>
      </div>

    </div>
  );
}
