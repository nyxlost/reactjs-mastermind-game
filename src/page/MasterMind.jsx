import React, { useState, useEffect } from 'react';

const generateRandomNumbers = () => {
  let numbers = [];
  while (numbers.length < 4) {
    const num = Math.floor(Math.random() * 10);
    if (!numbers.includes(num)) {
      numbers.push(num);
    }
  }
  return numbers;
};

const checkGuess = (guess, answer) => {
  let correctValue = 0;
  let correctPosition = 0;
  let guessCount = Array(10).fill(0);
  let answerCount = Array(10).fill(0);

  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === answer[i]) {
      correctPosition++;
    } else {
      guessCount[guess[i]]++;
      answerCount[answer[i]]++;
    }
  }
  for (let i = 0; i < 10; i++) {
    correctValue += Math.min(guessCount[i], answerCount[i]);
  }
  return [correctValue + correctPosition, correctPosition];
};

function MasterMind() {
  const [answer, setAnswer] = useState([]);
  const [guess, setGuess] = useState('');
  const [result, setResult] = useState([0, 0]);
  const [attempts, setAttempts] = useState(0);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setAnswer(generateRandomNumbers());
  }, []);

  const handleGuessChange = (e) => {
    setGuess(e.target.value);
  };

  const handleGuessSubmit = (e) => {
    e.preventDefault();

    if (!guess || isNaN(guess)) {
      alert("กรุณากรอกตัวเลขเท่านั้น");
      return;
    }
    if (guess.length !== 4) {
      alert("กรุณากรอกตัวเลข 4 หลัก");
      return;
    }
    const guessArray = guess.split('').map(Number);

    if ((new Set(guessArray)).size !== guessArray.length) {
      alert("กรุณาอย่ากรอกตัวเลขซ้ำกัน");
      return;
    }

    const [correctValue, correctPosition] = checkGuess(guessArray, answer);
    setResult([correctValue, correctPosition]);
    setHistory([...history, { guess: guessArray, result: [correctValue, correctPosition] }]);
    setAttempts(attempts + 1);
    if (correctPosition === 4) {
      alert(`ยินดีด้วย! คุณทายคำตอบถูกต้องใน ${attempts + 1} ครั้ง.`);
      if (window.confirm('ต้องการเล่นอีกครั้งไหม ?')) {
        setAnswer(generateRandomNumbers());
        setGuess('');
        setResult([0, 0]);
        setAttempts(0);
        setHistory([]);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-t from-indigo-200 flex flex-col items-center justify-center">
      <h1 className="text-4xl mt-20 font-bold mb-4">Master Mind Game</h1>
      {/* <p className="mb-4">ตัวเลขที่สุ่ม : {answer.join(', ')}</p> */}
      <form onSubmit={handleGuessSubmit} className="mb-4">
        <input
          type="text"
          value={guess}
          onChange={handleGuessChange}
          maxLength="4"
          className="border border-gray-300 rounded py-2 px-10 mb-2"
          placeholder="กรอกตัวเลขที่ต้องการทาย"
        />
        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded">ทาย</button>
      </form>
      <div className="mb-4">
        <p>ทายถูก: {result[0]} ตัว</p>
        <p>ตำแหน่งถูก: {result[1]} ตำแหน่ง</p>
      </div>
      <div className="w-full max-w-md flex-grow">
        <h2 className="text-2xl font-semibold mb-2">ประวัติการทาย</h2>
        <ul className="bg-white shadow rounded-lg divide-y divide-gray-200">
          {history.map((entry, index) => (
            <li key={index} className="p-4 px-6">
              ทาย: {entry.guess.join(', ')} - ทายถูก: {entry.result[0]} ตัว, ตำแหน่งถูก: {entry.result[1]} ตำแหน่ง
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MasterMind;
