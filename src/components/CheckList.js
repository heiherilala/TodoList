export default function CheckList(props) {
  return (
    <div className="form-check form-switch row">
      {props.checked&&<input
        type="checkbox"
        checked={false}
        className="col-sm-1"
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={
          e=>{
            if (e.target.checked) {
              props.functionClick()
              e.target.checked=false
            }
          }
        }
      />}
      <label className="col-sm-10 text-white" htmlFor={props.id} value={props.value} > {props.value} </label>
      <br />
    </div>
  );
}
