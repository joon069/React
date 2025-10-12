import { useState } from "react";

const cars = ["Ford", "BMW", "Audi"];

function GoalAnd({ isGoal }) {
  return (
    <div className="wrapp">
      <span className="greeting">&& 예시:</span>
      {isGoal && <b>Goal Achieved!</b>}
    </div>
  );
}

function GoalTernary({ isGoal }) {
  return (
    <div className="wrapp">
      <span className="greeting">? : 예시:</span>
      {isGoal ? <b>GOAL 🥳</b> : <i>Not yet...</i>}
    </div>
  );
}

function Garage({ cars }) {
  return (
    <div className="wrapp">
      <span className="greeting">Garage:</span>
      {cars.length > 0 && (
        <p>
          There are {cars.length} cars: {cars.join(", ")}
        </p>
      )}
    </div>
  );
}

export default function ConditionTest() {
  const [goal, setGoal] = useState(false);

  return (
    <div className="container">
      <h2>조건부 렌더링 실습</h2>

      <div style={{ margin: "8px 0" }}>
        <button className="btn" onClick={() => setGoal((g) => !g)}>
          {goal ? "isGoal = false" : "isGoal = true"}
        </button>
      </div>

      <GoalAnd isGoal={goal} />
      <GoalTernary isGoal={goal} />
      <Garage cars={cars} />
    </div>
  );
}
