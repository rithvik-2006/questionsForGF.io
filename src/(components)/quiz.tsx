// "use client"
// import { useState } from 'react'
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import { Label } from "@/components/ui/label"

// const questions = [
//   {
//     id: 1,
//     question: "What is the capital of France?",
//     options: ["London", "Berlin", "Paris", "Madrid"],
//     correctAnswer: "Paris"
//   },
//   {
//     id: 2,
//     question: "Which planet is known as the Red Planet?",
//     options: ["Venus", "Mars", "Jupiter", "Saturn"],
//     correctAnswer: "Mars"
//   },
//   // Add more questions here
// ]

// export default function Component() {
//   const [currentQuestion, setCurrentQuestion] = useState(0)
//   const [selectedAnswer, setSelectedAnswer] = useState("")
//   const [score, setScore] = useState(0)
//   const [quizCompleted, setQuizCompleted] = useState(false)

//   const handleAnswerSelection = (answer:any) => {
//     setSelectedAnswer(answer)
//   }

//   const handleNextQuestion = () => {
//     if (selectedAnswer === questions[currentQuestion].correctAnswer) {
//       setScore(score + 1)
//     }

//     if (currentQuestion + 1 < questions.length) {
//       setCurrentQuestion(currentQuestion + 1)
//       setSelectedAnswer("")
//     } else {
//       setQuizCompleted(true)
//     }
//   }

//   if (quizCompleted) {
//     return (
//       <Card className="bg-gray-800 max-w-lg  mx-auto">
//         <CardHeader>
//           <CardTitle className="text-2xl font-bold text-center">Quiz Completed!</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <p className="text-center text-xl">Your score: {score} out of {questions.length}</p>
//         </CardContent>
//         <CardFooter>
//           <Button className="w-full" onClick={() => window.location.reload()}>Restart Quiz</Button>
//         </CardFooter>
//       </Card>
//     )
//   }

//   const question = questions[currentQuestion]

//   return (
//     <Card className="bg-pink-500 max-w-lg mx-auto border-black text-white">
//       <CardHeader>
//         <CardTitle className="text-xl font-bold">Question {currentQuestion + 1} of {questions.length}</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <p className="text-lg mb-4">{question.question}</p>
//         <RadioGroup value={selectedAnswer} onValueChange={handleAnswerSelection}>
//           {question.options.map((option, index) => (
//             <div key={index} className="flex items-center  space-x-2 mb-2">
//               <RadioGroupItem value={option} id={`option-${index}`} />
//               <Label htmlFor={`option-${index}`}>{option}</Label>
//             </div>
//           ))}
//         </RadioGroup>
//       </CardContent>
//       <CardFooter>
//         <Button className="w-full" onClick={handleNextQuestion} disabled={!selectedAnswer}>
//           {currentQuestion + 1 === questions.length ? "Finish Quiz" : "Next Question"}
//         </Button>
//       </CardFooter>
//     </Card>
//   )
// }
"use client"
import { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

const questions = [
    {
      id: 1,
      question: "What’s your favorite way for us to spend a day together the first time we meet?",
      options: ["Watching movies at home 😎", "Oyo 😏", "Exploring Pune 🚗", "Having a romantic dinner 🥂"],
      correctAnswer: "" // You can leave this empty or choose an answer as per your preference
    },
    {
      id: 2,
      question: "Which of these romantic gestures do you appreciate the most?",
      options: ["Surprise flowers 💐", "Handwritten love notes 💌", "Cooking dinner together 🍳", "Cuddling💕"],
      correctAnswer: ""
    },
    {
      id: 3,
      question: "What’s your idea of a perfect date night?",
      options: ["Dinner at a fancy restaurant🍽️", "Stargazing on a rooftop🌠", "Movie Night🍿", "Going for a long walk on the beach🏖️"],
      correctAnswer: ""
    },
    {
      id: 4,
      question: "Which of these love languages do you feel closest to?",
      options: ["Romantic gestures😘", "Writing love texts💌", "Receiving Gifts🎁", "Physical Touch💖"],
      correctAnswer: ""
    },
    {
      id: 5,
      question: "If we could travel anywhere in the world, where would we go?",
      options: ["Hawaii🏖️", "Paris🗼", "Bali🌷", "Maldives💞"],
      correctAnswer: ""
    },
    {
      id: 6,
      question: "How would you describe our relationship in one word?",
      options: ["Supportive🫶🏼", "Trusting✨", "Passionate👩‍❤️‍💋‍👨", "Comforting💝"],
      correctAnswer: ""
    },
    {
      id: 7,
      question: "What kind of love story do you think ours would be?",
      options: ["A classic romance❤️", "A romantic comedy🤭", "An epic adventure🤠", "A sweet fairy tale🧚🏻‍♀️"],
      correctAnswer: ""
    },
    {
      id: 8,
      question: "Which of these is your favorite way to receive affection?",
      options: ["Holding hands👫🏻", "Cuddling💞", "Kissing👩‍❤️‍💋‍👨", "Sex💋"],
      correctAnswer: ""
    },
    {
      id: 9,
      question: "What’s your favorite memory of us together?",
      options: ["The Proposal💌 ", "Our first Call together🤙🏻", "The website💖", "None🥺"],
      correctAnswer: ""
    },
    {
      id: 10,
      question: "What do you love most about our relationship?",
      options: ["Our trust in each other💞", "Our ability to laugh together🤭", "Talking about Sex😳"],
      correctAnswer: ""
    }
  ]
  

export default function Component() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState("")
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const handleAnswerSelection = (answer:any) => {
    setSelectedAnswer(answer)
  }

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer("")
    } else {
      setQuizCompleted(true)
    }
  }

  if (quizCompleted) {
    return (
      <Card className="bg-pink-200 max-w-lg mx-auto border-red-300 shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-pink-700">Quiz Completed!</CardTitle>
        </CardHeader>
        
        <CardFooter>
          <Button className="w-full bg-red-400 text-white hover:bg-red-500" onClick={() => window.location.reload()}>
            Restart Quiz
          </Button>
        </CardFooter>
      </Card>
    )
  }

  const question = questions[currentQuestion]

  return (
    <Card className="bg-pink-100 max-w-lg mx-auto border-red-300 shadow-lg rounded-lg text-red-800">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-pink-700">Question {currentQuestion + 1} of {questions.length}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-xl mb-4">{question.question}</p>
        <RadioGroup value={selectedAnswer} onValueChange={handleAnswerSelection}>
          {question.options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2 mb-2">
              <RadioGroupItem value={option} id={`option-${index}`} className="text-red-600" />
              <Label htmlFor={`option-${index}`} className="text-pink-700">{option}</Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-red-400 text-white hover:bg-red-500" onClick={handleNextQuestion} disabled={!selectedAnswer}>
          {currentQuestion + 1 === questions.length ? "Finish Quiz" : "Next Question"}
        </Button>
      </CardFooter>
    </Card>
  )
}

