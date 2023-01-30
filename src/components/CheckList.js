export default function CheckList(props) {
  return (
    <>
      <input
        type="checkbox"
        id={props.id}
        name={`To Do ${props.id}`}
        value={props.value}
        onChange={props.functionCheck(props.value)}
      />
      <label for={props.id}> {props.value} </label>
      <br />
    </>
  );
}
