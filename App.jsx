import React, { useState } from "react";
import data from "./data.json";
import Quiz from "./Quiz";

export default function App() {
  const [step, setStep] = useState(0);
  const [grade, setGrade] = useState("");
  const [unit, setUnit] = useState("");

  const grades = Object.keys(data);
  const units = grade ? Object.keys(data[grade]) : [];

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">単語チャレンジ10</h1>
      {step === 0 && (
        <div className="space-y-4">
          <div>
            <label>学年:</label>
            <select onChange={(e) => setGrade(e.target.value)} className="ml-2">
              <option value="">選択してください</option>
              {grades.map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
          </div>
          {grade && (
            <div>
              <label>出題範囲:</label>
              <select onChange={(e) => setUnit(e.target.value)} className="ml-2">
                <option value="">選択してください</option>
                {units.map((u) => (
                  <option key={u} value={u}>{u}</option>
                ))}
              </select>
            </div>
          )}
          {unit && <button onClick={() => setStep(1)}>スタート</button>}
        </div>
      )}
      {step === 1 && <Quiz words={data[grade][unit]} onBack={() => setStep(0)} />}
    </div>
  );
}
