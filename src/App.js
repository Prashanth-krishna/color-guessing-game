import { useEffect, useState } from "react";
import "./App.css";
const getColor = () => {
  const digits = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  const newColor = new Array(6)
    .fill("")
    .map(() => digits[Math.floor(Math.random() * digits.length)])
    .join("");
  return `#${newColor}`;
};

function App() {
  const [color, SetColor] = useState();
  const [colors, SetColors] = useState([]);
  const [isCorrect, SetIsCorrect] = useState();

  const getNewGame = () => {
    const answer = getColor();
    SetColor(answer);
    SetColors([answer, getColor(), getColor()].sort(() => 0.5 - Math.random()));
  };
  useEffect(() => {
    getNewGame();
  }, []);

  const ButtonClickHandler = (clicked) => {
    if (clicked === color) {
      SetIsCorrect(true);
      getNewGame();
    } else {
      SetIsCorrect(false);
    }
  };
  return (
    <div className="App">
      <div className="colorContainer" style={{ background: color }}></div>
      <div className="buttonsContainer">
        {colors.map((item) => (
          <button
            onClick={() => {
              ButtonClickHandler(item);
            }}
            key={item}
          >
            {item}
          </button>
        ))}
      </div>
      {isCorrect && <p className="correct"> Correct Answer</p>}
      {isCorrect !== undefined && !isCorrect && (
        <p className="wrong"> Wrong Answer</p>
      )}
    </div>
  );
}

export default App;
