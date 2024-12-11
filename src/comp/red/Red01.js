import { useReducer, useState } from "react";

// 함수 공식 명칭 useReducer.
function changeTest(status, action) {}

export default function Red01() {
  const [data, setData] = useState(0);
  const [test, setTest] = useReducer(changeTest, 0);

  return (
    <div>
      <h1>Red01</h1>
      {data}
      <input
        type="button"
        value="증가"
        onClick={(e) => {
          setData(data + 1);
        }}
      />

      <input
        type="button"
        value="감소"
        onClick={(e) => {
          setData(data - 1);
        }}
      />
    </div>
  );
}
