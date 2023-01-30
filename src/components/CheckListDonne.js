export default function CheckListDonne(props) {
  return (
    <>
      <input
        type="checkbox"
        id={props.id}
        name={`To Do ${props.id}`}
        value={props.value}
        checked={true}
      />
      <label for={props.id}> {props.value} </label>
      <br />
    </>
  );
}
