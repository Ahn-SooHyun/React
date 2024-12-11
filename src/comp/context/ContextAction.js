import { useContext, useState } from "react";
import { ContextAPI } from "../../context/ContextAPI";

export default function ContextAction() {
  const { parent, setParent } = useContext(ContextAPI);

  const [inp, setInp] = useState(0);

  return (
    <div>
      <h1>ContextAction</h1>
      <input type="text" onChange={(e) => setInp(e.target.value)} />
      <br />
      <input
        type="button"
        value="전달"
        onClick={(e) => {
          setParent(inp);
        }}
      />
      <br />
      {inp} / parent : {parent}
      <br />
    </div>
  );
}
