'use client'

// const { useState } = require("react");

// const quizData = [
//     {
//       question: 'What is the capital of France?',
//       options: ['Paris', 'London', 'Berlin', 'Rome'],
//       answer: 'Paris' // Correct answer
//     }
// ];

// export default function QuizApp() {
//   const [currentQuestion, setCurrentQuestion] = useState(0); // Track the current question
//   const [selectedAnswer, setSelectedAnswer] = useState(null); // Store the user's selected answer
//   const [showFeedback, setShowFeedback] = useState(false); // Whether to show feedback

//   const handleAnswer = (option) => {
//     setSelectedAnswer(option); // Store the selected answer
//     setShowFeedback(true); // Show feedback after selecting an answer
//   };

//   const isCorrect = selectedAnswer === quizData[currentQuestion].answer; // Check if the selected answer is correct

//   return (
//     <div>
//       <h2>{quizData[currentQuestion].question}</h2>

//       <ul>
//         {quizData[currentQuestion].options.map((option, index) => (
//           <li key={index}>
//             <button onClick={() => handleAnswer(option)}>{option}</button>
//           </li>
//         ))}
//       </ul>

//       {showFeedback && (
//         <div>
//           {isCorrect ? (
//             <p style={{ color: 'green' }}>Correct!</p>
//           ) : (
//             <p style={{ color: 'red' }}>Incorrect! The correct answer is {quizData[currentQuestion].answer}.</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }



import "./index.css";
import React, { useState } from 'react';

// Quiz data
const quizData = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Rome'],
    answer: 'Paris'
  },
  {
    question: 'Who painted the Mona Lisa?',
    options: ['Leonardo da Vinci', 'Michelangelo', 'Raphael', 'Caravaggio'],
    answer: 'Leonardo da Vinci'
  },
  {
    question: 'What is the largest planet in our solar system?',
    options: ['Earth', 'Saturn', 'Jupiter', 'Uranus'],
    answer: 'Jupiter'
  }
];
function QuizApp() {
  // State for current question index
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // State for user's score
  const [score, setScore] = useState(0);
  // State for user's answer selection
  const [selectedAnswer, setSelectedAnswer] = useState('');
  // Function to handle answer selection
  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    // Check if answer is correct
    if (answer === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  // Function to handle next question
  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer('');
  };

  return (
    <div className="container">
      <h1>Quiz App</h1>
      <p className="centerring">Question {currentQuestion + 1} of {quizData.length}</p>
      <h2 className="question">{quizData[currentQuestion].question}</h2>
      <ul className="ul">
        {quizData[currentQuestion].options.map((option, index) => (
          <li key={index}>
            <button onClick={() => handleAnswerSelect(option)}>
              {option}
            </button>
          </li>
        ))}
      </ul>
      {selectedAnswer && (
        <p>
          {selectedAnswer === quizData[currentQuestion].answer ? (
            <span>Correct!</span>
          ) : (
            <span>Incorrect. The correct answer is {quizData[currentQuestion].answer}.</span>
          )}
        </p>
      )}
      {currentQuestion < quizData.length - 1 ? (
        <button className="landibutton" onClick={handleNextQuestion}>Next Question</button>
      ) : (
        <p>
          Quiz complete! Your score is {score} out of {quizData.length}.
        </p>
      )}
    </div>
  );
}

export default QuizApp;




//,----------------------------------------------------->


//chantgpt wla approach
// import React, { useState } from "react";

// const QuizApp = () => {
//   // Step 1: Questions data
//   const questions = [
//     {
//       question: "What is the capital of France?",
//       options: ["Berlin", "Madrid", "Paris", "Lisbon"],
//       answer: "Paris",
//     },
//     {
//       question: "What is 2 + 2?",
//       options: ["3", "4", "5", "6"],
//       answer: "4",
//     },
//     {
//       question: "What is the capital of Japan?",
//       options: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
//       answer: "Tokyo",
//     },
//   ];

//   // Step 2: useState to track the current question index and score
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [score, setScore] = useState(0);
//   const [showResult, setShowResult] = useState(false);

//   // Step 3: Function to handle user answer
//   const handleAnswer = (selectedOption) => {
//     const currentQuestion = questions[currentQuestionIndex];

//     // Check if the selected answer is correct
//     if (selectedOption === currentQuestion.answer) {
//       setScore(score + 1); // Increment score
//     }

//     // Move to the next question or show results
//     const nextQuestionIndex = currentQuestionIndex + 1;
//     if (nextQuestionIndex < questions.length) {
//       setCurrentQuestionIndex(nextQuestionIndex); // Move to next question
//     } else {
//       setShowResult(true); // Show result when all questions are done
//     }
//   };

//   return (
//     <div>
//       <h1>Simple Quiz App</h1>
//       {showResult ? (
//         // Step 4: Display result
//         <div>
//           <h2>Your Score: {score} / {questions.length}</h2>
//         </div>
//       ) : (
//         // Step 2: Display current question and options
//         <div>
//           <h2>{questions[currentQuestionIndex].question}</h2>
//           {questions[currentQuestionIndex].options.map((option, index) => (
//             <button key={index} onClick={() => handleAnswer(option)}>
//               {option}
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default QuizApp;




















// export default function Cart() {

//   let [qty, setQty] = useState(1)

//   const [product, setProduct] = useState({
//     id: 101,
//     title: 'Mobile Phone',
//     price: 55000,
//     units: 1,
//     maxorder: 5
//   });
//   const [numbers, setNumbers] = useState([0, 0, 0, 0]);
//   const [classNumbers, setClassNumbers] = useState([
//     [50, 50], [60, 60], [51, 51], [61, 61], [52, 52], [62, 62],
//     [53, 53], [63, 63], [54, 54], [64, 64], [55, 55], [65, 65],
//     [56, 56], [66, 66], [57, 57], [67, 67], [58, 58], [68, 68], [59, 59]
//   ]);
//   const [passingMarks, setPassingMarks] = useState(60);
//   const [graceMarks, setGraceMarks] = useState(5);
//   const [error, setError] = useState('');
//   const isValidQty = (qty) => qty >= 0 && qty <= 10;
//   const isValidUnits = (units, maxOrder) => units >= 0 && units <= maxOrder;

//   const handleGraceMarksChange = (e) => {
//     const value = Number(e.target.value);
//     if (value >= 1 && value <= 5) {
//       setGraceMarks(value);
//       setError('');
//     } else {
//       setError('Grace marks must be between 1 and 5'); // Set error message for invalid input
//       setGraceMarks(value);
//     }
//   };

//   function handleKeyDown(e) {
//     e.key === 'Enter' && graceMarks >= 1 && graceMarks <= 5 && UpdateResults(passingMarks);
//   }

//   return (
//     <>
//       <div className="p-4 flex flex-col md:flex-row items-center justify-center mt-5">
//         <div className="w-full md:w-1/4">
//           <h1 className="text-2xl font-bold mb-4">useState: Primitive</h1>
//           <p className="mb-4">
//             <button disabled={qty >= 10} className="px-4 py-2 mr-4 bg-blue-500 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed" onClick={() => UpdateCartPrimitive(1)}>  +  </button>
//             <span className="inline-block w-8 text-center">{qty}</span>
//             <button disabled={qty <= 0} className="px-4 py-2 ml-4 bg-blue-500 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed" onClick={() => (qty > 0) ? UpdateCartPrimitive(-1) : qty}>  -  </button>
//             <button disabled={qty <= 0} className="px-4 py-2 ml-4 bg-red-500 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed" onClick={() => setQty(0)}>  Empty Cart </button>
//           </p>
//           <br />

//           <h1 className="text-2xl font-bold mb-4">useState : Object</h1>
//           <p className="mb-4">
//             {product.title}<br />
//             Price Rs. {product.price}
//           </p>
//           <p className="mb-4">
//             <button disabled={product.units >= product.maxorder} className="px-4 py-2 mr-4 bg-blue-500 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed" onClick={() => UpdateCartCollection(1)}>  +  </button>
//             <span className="inline-block w-8 text-center">{product.units}</span>
//             <button disabled={product.units <= 0} className="px-4 py-2 ml-4 bg-blue-500 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed" onClick={() => (product.units) > 0 ? UpdateCartCollection(-1) : product.units}>  -  </button>
//             <button disabled={product.units <= 0} className="px-4 py-2 ml-4 bg-red-500 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed" onClick={() => UpdateCartCollection(0)}>  Empty Cart  </button>
//           </p >
//           <br />

//           <h1 className="text-2xl font-bold mb-4">useState : Array</h1>
//           {numbers.map((number, index) => (
//             <p key={index} className="mb-4">
//               <button disabled={numbers[index] >= 20} className="px-4 py-2 mr-4 bg-blue-500 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed" onClick={() => UpdateCartArray(index, 1)}>  +  </button>
//               <span className="inline-block w-8 text-center">{numbers[index]}</span>
//               <button disabled={numbers[index] <= 0} className="px-4 py-2 ml-4 bg-blue-500 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed" onClick={() => (numbers[index]) > 0 ? UpdateCartArray(index, -1) : numbers[index]}>  -  </button>
//               <button disabled={numbers[index] <= 0} className="px-4 py-2 ml-4 bg-red-500 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed" onClick={() => UpdateCartArray(index, 0)}>  Initialize  </button>
//             </p >
//           ))}
//         </div>
//         <hr className="block md:hidden border-t-4 border-black my-5" />

//         <div className="w-full md:w-1/2">
//           <div className="flex flex-col md:flex-col ">
//             <div className="mb-4">
//               <h1 className="text-2xl font-bold">Class Result</h1>
//             </div>
//             <div className="flex flex-col md:flex-row ">
//               <div className="mr-3">Grace Marks:</div>
//               <input type="number" value={graceMarks} onKeyDown={handleKeyDown} onChange={handleGraceMarksChange} className="border border-gray-300 rounded px-2 py-1 mr-2" />
//               <button disabled={graceMarks < 1 || graceMarks > 5} onClick={() => UpdateResults(passingMarks)} className="w-1/2 md:w-auto bg-blue-500 text-white mt-3 md:mt-0 px-4 py-1 rounded disabled:bg-gray-300 disabled:cursor-not-allowed">Apply</button>
//             </div>
//             <div className="h-6">
//               {error && <p className="text-red-500">{error}</p>}
//             </div>
//           </div>

//           <div className="flex mt-5">
//             <div className="w-1/2 ">
//               <h2 className="text-lg font-bold mb-2">Actual Result</h2>
//               <ul>
//                 {classNumbers.map((numbers, index) => (
//                   <li key={index} className={numbers[0] >= passingMarks ? "text-green-700" : "text-red-500"}>
//                     {numbers[0]} - {numbers[0] >= passingMarks ? "Pass" : "Fail"}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="w-1/2 ">
//               <h2 className="text-lg font-bold mb-2">Applied Result</h2>
//               <ul>
//                 {classNumbers.map((numbers, index) => (
//                   <li key={index} className={`${numbers[1] >= passingMarks ? "text-green-700" : "text-red-500"} ${numbers[1] >= passingMarks && numbers[1] > numbers[0] ? "bg-green-200" : ""}`}>

//                 {numbers[1]} - {numbers[1] >= passingMarks ? (numbers[1] > numbers[0] ? "Grace Pass" : "Pass") : "Fail"}

//               </li>
//                 ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div >
//     </>
//      )

//   function UpdateResults(passMarks) {
//     setClassNumbers((prevClassNumbers) =>
//       prevClassNumbers.map(([originalMark, appliedMark]) => {
//         if (originalMark < passMarks && originalMark + graceMarks >= passMarks) {
//           return [originalMark, passMarks];
//         }
//         if (originalMark !== appliedMark) {
//           return [originalMark, originalMark];
//         }
//         return [originalMark, appliedMark];
//       })
//     );
//   }

//   function UpdateCartPrimitive(action) {
//     setQty((prevQty) => {
//       const newQty = prevQty + action;
//       return isValidQty(newQty) ? newQty : prevQty;
//     });
//   }

//   function UpdateCartCollection(action) {
//     setProduct((prevProduct) => {
//       const updatedUnits = action === 0 ? 0 : prevProduct.units + action;
//       return isValidUnits(updatedUnits, prevProduct.maxorder)
//         ? { ...prevProduct, units: updatedUnits }
//         : prevProduct;
//     });
//   }

//   function UpdateCartArray(index, action) {
//     setNumbers((prevNumbers) =>
//       prevNumbers.map((num, i) =>
//         i === index ? (action === 0 ? 0 : num + action) : num
//       )
//     );
//   }
// }











































//  function NumberFilter() {
//   const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//   const [isEven, setIsEven] = useState(true);

//   const toggleFilter = () => {
//     setIsEven(!isEven);
//   };

//   const filteredNumbers = numbers.filter(num => num % 2 === (isEven ? 0 : 1));

//   return (
//     <div className="number-filter">
//       <h1>Even/Odd Filter</h1>
//       <button onClick={toggleFilter}>{isEven ? 'Show Evens' : 'Show Odds'}</button>
//       <ul>
//         {filteredNumbers.map((num, index) => (
//           <li key={index}>{num}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }


// export default NumberFilter;








// // // SEcond task in the first component

// import React, { useState } from "react";
// function PractincingTspreadandmap() {
//   const [todoList1, setTodoList1] = useState(["Buy groceries", "Walk the dog"]);
//   const [todoList2, setTodoList2] = useState([
//     "Learn React",
//     "Practice coding",
//   ]);

//   const mergeLists = () => {
//     const mergedList = [...todoList1, ...todoList2];
//     setTodoList1(mergedList);
//     setTodoList2(mergedList);
//   };

//   return (
//     <div className="todo-list">
//       <h1>Merge Two Todo Lists</h1>
//       <button onClick={mergeLists}>Merge Lists</button>
//       <ul>
//         {todoList1.map((todo, index) => (
//           <li key={index}> {todo} </li>
//         ))}
//       </ul>
//       <ul>
//         {todoList2.map((todo, index) => (
//           <li key={index}>{todo}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default PractincingTspreadandmap;




// /// in this code tasks to do  
// // Let's create a mini-project that combines the Spread Operator and map() array method.


// // Project Idea: Merging Two To-Do Lists


// // Objective: Create a simple React app that merges two to-do lists and displays the combined list.


// // Functionality:

// // 1. Two separate input fields for two to-do lists (List A and List B)
// // 2. A button to merge the lists
// // 3. Display the merged list below


// // Steps:

// // 1. Create a new React app using CodeSandbox or your preferred method.
// // 2. Initialize two state arrays for List A and List B using useState.
// // 3. Create two input fields and update the corresponding state arrays using onChange.
// // 4. Create a merge button that uses the Spread Operator to combine the two arrays.
// // 5. Use map() to render the merged list.


// // Code Skeleton:

// // jsx
// // import React, { useState } from 'react';

// function App() {
//   const [listA, setListA] = useState([]);
//   const [listB, setListB] = useState([]);
//   const [mergedList, setMergedList] = useState([]);

//   const handleAddItemA = (e) => {
//     // Update listA state
//   };

//   const handleAddItemB = (e) => {
//     // Update listB state
//   };

//   const handleMerge = () => {
//     // Merge lists using Spread Operator
//     const merged = [...listA, ...listB];
//     setMergedList(merged);
//   };

//   return (
//     <div>
//       <h1>List A</h1>
//       <input type="text" onChange={handleAddItemA} />
//       <ul>
//         {listA.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>

//       <h1>List B</h1>
//       <input type="text" onChange={handleAddItemB} />
//       <ul>
//         {listB.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>

//       <button onClick={handleMerge}>Merge Lists</button>

//       <h1>Merged List</h1>
//       <ul>
//         {mergedList.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// // Your Task:

// // Complete the code by implementing the handleAddItemA and handleAddItemB functions to update the state arrays.


// // Tips:

// // - Use concat() or Spread Operator to merge arrays.
// // - Use map() to render lists.
// // - Don't forget to add key props to li elements.


// // Feel free to ask if you have any questions or need further clarification!


// // Type 'done' when you've completed the task.















