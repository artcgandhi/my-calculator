import { useState } from "react";
import "./App.css";
import Button from "./Component/Button/Button";
import Input from "./Component/Input/Input";

function App() {
  const [value, setValue] = useState("");

  const showButton = (btn) => {
    let innerDisplay = value;
    let lastChar = innerDisplay.toString().slice(-1);
    const deleteOneDigit = innerDisplay.toString().slice(0, -1);
    const isScndToLastOp = innerDisplay.toString().slice(-2);
    const operatorClicked = myOperator.includes(btn.id);
    const endsWithOp = myOperator.some((op) => innerDisplay.toString().endsWith(op));
    const numClicked = myNum.includes(btn.id);

    if (btn.id === "=" && innerDisplay === "") alert("please enter a number");
    else if (btn.id === "ac") setValue((innerDisplay = ""));
    else if (btn.id === "de") setValue((innerDisplay = deleteOneDigit));
    else if (btn.id === "=") {
      try {
        setValue((innerDisplay = eval(innerDisplay)).toString());
      } catch {
        alert("Error");
      }
    }
    // operator
    else if (operatorClicked && endsWithOp) return false;
    else if (operatorClicked && innerDisplay === "") return false;
    //
    // zero
    else if (innerDisplay === "0" && numClicked) setValue(deleteOneDigit + btn.id);
    else if (/[\+\-\*\/]0$/.test(isScndToLastOp)) {
      if (operatorClicked) setValue((innerDisplay += btn.id));
      else setValue(deleteOneDigit + btn.id);
    }
    //
    // decimal
    else if (btn.id === "." && innerDisplay === ".") return false;
    else if (btn.id === "." && endsWithOp) {
      setValue((innerDisplay = innerDisplay + (lastChar = "0.")));
    } else if (btn.id === "." && innerDisplay.match(/\d+\.\d*$/)) return false;
    //
    else {
      setValue((innerDisplay += btn.id));
    }
  };

  return (
    <div className="App">
      <Input type="text" value={value} disabled />
      {buttons.map((btn, index) => {
        return <Button btnName={btn.id} key={index.toString()} onClick={() => showButton(btn)} />;
      })}
    </div>
  );
}

export default App;

const myOperator = ["+", "-", "*", "/"];
const myNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const buttons = [
  {
    id: "ac",
  },
  {
    id: "de",
  },
  {
    id: ".",
  },
  {
    id: "/",
  },
  {
    id: "7",
  },
  {
    id: "8",
  },
  {
    id: "9",
  },
  {
    id: "*",
  },
  {
    id: "4",
  },
  {
    id: "5",
  },
  {
    id: "6",
  },
  {
    id: "-",
  },
  {
    id: "1",
  },
  {
    id: "2",
  },
  {
    id: "3",
  },
  {
    id: "+",
  },
  {
    id: "0",
  },
  {
    id: "=",
  },
];
