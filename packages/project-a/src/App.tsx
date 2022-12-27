import "./App.css";
import { randomNumber } from "./utils/randomNumber";
import { useState } from "react";

function App() {
  const [name, setName] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const handleClick = (name: string) => {
    setResult(randomNumber(name));
  };
  return (
    <div className="App">
      <p>안녕 나는 project-a야</p>
      <p>나는 랜덤 함수가 있어</p>
      <h2>randomNumber 사용방법</h2>
      <ul>
        <li>import {`randomNumber`} from "@nWave/project-a"</li>
        <input value={name} onChange={(event) => setName(event.target.value)} />
        <button onClick={() => handleClick(name)}>추첨하기</button>
        <p>결과 : {result}</p>
      </ul>
    </div>
  );
}

export default App;
