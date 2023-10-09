import { useReducer } from "react";

function Checkbox() {
  const [checked, setChecked] = useReducer((checked) => !checked, false);
  return (
    <>
      <label htmlFor="checked">{checked ? "checked" : "not checked"}</label>
      <input
        id="checked"
        type="checkbox"
        value={checked}
        onChange={setChecked}
      />
    </>
  );
}
export default Checkbox;
