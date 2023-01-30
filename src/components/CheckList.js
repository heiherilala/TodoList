export default function CheckList(props) {
  return (
    <>
      <input
        type="checkbox"
        id={props.id}
        name={`To Do ${props.id}`}
        value={props.value}
        onChange={
          e=>{
            if (e.target.checked) {
              props.functionClick()
              e.target.checked=false
            }
          }
        }
      />
      <label for={props.id}> {props.value} </label>
      <br />
    </>
  );
}
