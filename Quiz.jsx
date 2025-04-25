import React, { useState } from "react";

export default function Quiz({ words, onBack }) {
  const shuffled = [...words].sort(() => 0.5 - Math.random()).slice(0, 10);
  const [answers, setAnswers] = useState(Array(10).fill(""));
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const score = shuffled.reduce((acc, word, i) => {
    return acc + (word.英語.toLowerCase() === answers[i].trim().toLowerCase() ? 1 : 0);
  }, 0);

  return (
    <div className="space-y-4">
      {!submitted ? (
        <>
          {shuffled.map((word, i) => (
            <div key={i}>
              <span>{i + 1}. {word.日本語}</span>
              <input
                type="text"
                value={answers[i]}
                onChange={(e) => handleChange(i, e.target.value)}
                className="ml-2 p-1 border rounded"
              />
            </div>
          ))}
          <button onClick={() => setSubmitted(true)}>採点</button>
        </>
      ) : (
        <>
          <h2>あなたの点数: {score} / 10</h2>
          {shuffled.map((word, i) => (
            <div key={i}>
              <span>{i + 1}. {word.日本語} - あなたの答え: {answers[i]}（正解: {word.英語}）</span>
            </div>
          ))}
          <button onClick={onBack}>もう一度</button>
        </>
      )}
    </div>
  );
}
