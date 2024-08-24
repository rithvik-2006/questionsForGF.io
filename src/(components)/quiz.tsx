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
const bunch_of_questions = [
  {
    id: 1,
    question: "What’s your favorite way for us to spend a day together?",
    options: ["🍿 Watching movies at home", "🥾 Going on a hike", "🌆 Exploring a new city", "🍽️ Having a romantic dinner"],
    correctAnswer: ""
  },
  {
    id: 2,
    question: "Which of these romantic gestures do you appreciate the most?",
    options: ["💐 Surprise flowers", "✉️ Handwritten love notes", "👩‍🍳 Cooking dinner together", "🎉 Planning a surprise date"],
    correctAnswer: ""
  },
  {
    id: 3,
    question: "What’s your idea of a perfect date night?",
    options: ["🍷 Dinner at a fancy restaurant", "🌠 Stargazing on a rooftop", "🎶 Attending a live concert", "🌊 Going for a long walk on the beach"],
    correctAnswer: ""
  },
  {
    id: 4,
    question: "Which of these love languages do you feel closest to?",
    options: ["🗣️ Words of Affirmation", "🧹 Acts of Service", "🎁 Receiving Gifts", "🤗 Physical Touch"],
    correctAnswer: ""
  },
  {
    id: 5,
    question: "What’s something you’d love for us to do together that we haven’t done yet?",
    options: ["🚗 Go on a road trip", "👩‍🍳 Take a cooking class", "🌍 Visit a new country", "🎨 Start a new hobby together"],
    correctAnswer: ""
  },
  {
    id: 6,
    question: "How would you describe our relationship in one word?",
    options: ["💪 Supportive", "🌍 Adventurous", "🔥 Passionate", "🛋️ Comforting"],
    correctAnswer: ""
  },
  {
    id: 7,
    question: "What kind of love story do you think ours would be?",
    options: ["❤️ A classic romance", "😂 A romantic comedy", "🗺️ An epic adventure", "🌟 A sweet fairy tale"],
    correctAnswer: ""
  },
  {
    id: 8,
    question: "Which of these is your favorite way to receive affection?",
    options: ["🤝 Holding hands", "🤗 Cuddling", "💋 Kissing", "💬 Compliments"],
    correctAnswer: ""
  },
  {
    id: 9,
    question: "What’s your favorite memory of us together?",
    options: ["🍽️ Our first date", "✈️ Our first vacation together", "🎁 A surprise you planned for me", "🏠 A quiet night in together"],
    correctAnswer: ""
  },
  {
    id: 10,
    question: "What do you love most about our relationship?",
    options: ["🤝 Our trust in each other", "😂 Our ability to laugh together", "🎯 Our shared dreams and goals", "💪 The way we support each other"],
    correctAnswer: ""
  },
  {
    id: 11,
    question: "If you could travel anywhere in the world with me, where would it be?",
    options: ["🗼 Paris", "🏝️ Bali", "🗽 New York", "🏯 Tokyo"],
    correctAnswer: ""
  },
  {
    id: 12,
    question: "What’s your favorite type of movie to watch together?",
    options: ["😂 Romantic comedies", "💥 Action", "👻 Horror", "🎥 Documentaries"],
    correctAnswer: ""
  },
  {
    id: 13,
    question: "How do you like to spend a lazy Sunday?",
    options: ["🛌 Sleeping in", "🥞 Brunch and a walk", "📺 Binge-watching shows", "📚 Reading a book"],
    correctAnswer: ""
  },
  {
    id: 14,
    question: "What’s your favorite way to celebrate special occasions?",
    options: ["🍽️ A fancy dinner", "🌄 A weekend getaway", "🏠 A quiet evening at home", "🎉 Throwing a party"],
    correctAnswer: ""
  },
  {
    id: 15,
    question: "Which season do you find the most romantic?",
    options: ["🌸 Spring", "☀️ Summer", "🍂 Autumn", "❄️ Winter"],
    correctAnswer: ""
  },
  {
    id: 16,
    question: "Which of these desserts would you most like to share with me?",
    options: ["🍫 Chocolate cake", "🍦 Ice cream", "🍮 Tiramisu", "🥧 Fruit tart"],
    correctAnswer: ""
  },
  {
    id: 17,
    question: "If we could live in any city in the world, where would it be?",
    options: ["🗼 Paris", "🗽 New York", "🌉 Sydney", "🏛️ Rome"],
    correctAnswer: ""
  },
  {
    id: 18,
    question: "Which of these activities would you prefer for a weekend date?",
    options: ["🖼️ Going to a museum", "🥾 Hiking in the mountains", "🎢 Visiting a theme park", "🏖️ Relaxing on the beach"],
    correctAnswer: ""
  },
  {
    id: 19,
    question: "What’s your favorite thing to do on a rainy day?",
    options: ["🛋️ Cuddling and watching movies", "📚 Reading a book", "🍰 Baking something sweet", "😴 Taking a long nap"],
    correctAnswer: ""
  },
  {
    id: 20,
    question: "Which of these vacation types do you prefer?",
    options: ["🏝️ Beach resort", "🏔️ Mountain retreat", "🏙️ City exploration", "🎭 Cultural tour"],
    correctAnswer: ""
  },
  {
    id: 21,
    question: "Which of these is your favorite way to relax?",
    options: ["🛀 Taking a long bath", "🎧 Listening to music", "🧘‍♀️ Meditating", "📺 Watching TV"],
    correctAnswer: ""
  },
  {
    id: 22,
    question: "What’s your favorite kind of date night music?",
    options: ["🎷 Jazz", "🎻 Classical", "🎤 Pop", "🎼 R&B"],
    correctAnswer: ""
  },
  {
    id: 23,
    question: "What’s your dream vacation destination?",
    options: ["🏝️ Santorini", "🌴 Bali", "🏖️ Maldives", "🗼 Paris"],
    correctAnswer: ""
  },
  {
    id: 24,
    question: "Which of these would you most like to learn together?",
    options: ["🗣️ A new language", "🍲 Cooking a new cuisine", "💃 Dancing", "📸 Photography"],
    correctAnswer: ""
  },
  {
    id: 25,
    question: "How do you prefer to spend the holidays?",
    options: ["🎄 With family", "✈️ Traveling", "🏠 Having a quiet time at home", "🎉 Hosting a gathering"],
    correctAnswer: ""
  },
  {
    id: 26,
    question: "Which of these would you consider the ultimate romantic getaway?",
    options: ["🏕️ A cabin in the woods", "🏖️ A beach resort", "🚢 A luxury cruise", "🌹 A city known for its romance"],
    correctAnswer: ""
  },
  {
    id: 27,
    question: "Which of these meals would you most like us to cook together?",
    options: ["🍝 Pasta", "🥩 Steak and potatoes", "🍣 Sushi", "🍕 Pizza"],
    correctAnswer: ""
  },
  {
    id: 28,
    question: "What’s your favorite way to wake up in the morning?",
    options: ["💋 With a kiss", "☕ To the smell of coffee", "🎶 With music", "😴 Slowly and quietly"],
    correctAnswer: ""
  },
  {
    id: 29,
    question: "Which of these would be the most romantic setting for a proposal?",
    options: ["🌅 On a beach at sunset", "🌌 Under a starry sky", "🍷 At a fancy restaurant", "🌷 In a beautiful garden"],
    correctAnswer: ""
  },
  {
    id: 30,
    question: "What’s your idea of the perfect weekend getaway?",
    options: ["🏕️ A cozy cabin in the mountains", "🏖️ A beachside resort", "🏙️ A city escape", "🏡 A countryside retreat"],
    correctAnswer: ""
  },
  {
    id: 31,
    question: "What’s your favorite type of outdoor activity to do together?",
    options: ["🥾 Hiking", "🍇 Picnicking", "🚴‍♂️ Biking", "🏕️ Camping"],
    correctAnswer: ""
  },
  {
    id: 32,
    question: "Which of these romantic movies do you like the most?",
    options: ["❤️ The Notebook", "🌿 Pride and Prejudice", "🚢 Titanic", "🎶 La La Land"],
    correctAnswer: ""
  },
  {
    id: 33,
    question: "Which of these flowers do you find most romantic?",
    options: ["🌹 Roses", "💐 Lilies", "🌻 Sunflowers", "🌸 Cherry blossoms"],
    correctAnswer: ""
  },
  {
    id: 34,
    question: "Which of these special days do you enjoy celebrating the most?",
    options: ["🎂 Birthdays", "🎄 Christmas", "🎉 Anniversaries", "💖 Valentine's Day"],
    correctAnswer: ""
  },
  {
    id: 35,
    question: "What’s your favorite type of date night drink?",
    options: ["🍷 Wine", "🍸 Cocktails", "🍹 Mocktails", "🍻 Beer"],
    correctAnswer: ""
  },
  {
    id: 36,
    question: "Which of these pets would you most like to have together?",
    options: ["🐶 Dog", "🐱 Cat", "🐦 Bird", "🐠 Fish"],
    correctAnswer: ""
  },
  {
    id: 37,
    question: "What’s your favorite time of day to spend together?",
    options: ["🌅 Morning", "🌞 Afternoon", "🌇 Evening", "🌙 Night"],
    correctAnswer: ""
  },
  {
    id: 38,
    question: "What’s your favorite way to unwind together after a long day?",
    options: ["📺 Watching TV", "🗣️ Talking about our day", "🚶 Taking a walk", "🍷 Enjoying a glass of wine"],
    correctAnswer: ""
  },
  {
    id: 39,
    question: "Which of these would you most enjoy on a lazy weekend morning?",
    options: ["🍳 Breakfast in bed", "🥂 Going out for brunch", "😴 Sleeping in", "🚶 Taking a morning walk"],
    correctAnswer: ""
  },
  {
    id: 40,
    question: "Which of these would you prefer for a romantic night in?",
    options: ["👩‍🍳 Cooking dinner together", "🎥 Watching a romantic movie", "🎲 Playing a board game", "🗣️ Having a deep conversation"],
    correctAnswer: ""
  },
  {
    id: 41,
    question: "What’s your favorite type of cuisine to enjoy together?",
    options: ["🍝 Italian", "🌮 Mexican", "🍣 Japanese", "🥖 French"],
    correctAnswer: ""
  },
  {
    id: 42,
    question: "Which of these would you most like to experience together?",
    options: ["🪂 Skydiving", "🤿 Scuba diving", "🎈 Hot air balloon ride", "🧗‍♂️ Zip-lining"],
    correctAnswer: ""
  },
  {
    id: 43,
    question: "Which of these hobbies would you most like to try together?",
    options: ["🖌️ Pottery", "🎨 Painting", "🌱 Gardening", "📸 Photography"],
    correctAnswer: ""
  },
  {
    id: 44,
    question: "Which of these would you prefer for a romantic getaway?",
    options: ["🌳 Staying in a treehouse", "🧖‍♀️ A luxury spa retreat", "🏝️ A beachfront bungalow", "🏕️ A cozy cabin"],
    correctAnswer: ""
  },
  {
    id: 45,
    question: "What’s your favorite thing to do together during the winter?",
    options: ["🔥 Cuddling by the fireplace", "⛸️ Ice skating", "⛄ Building a snowman", "☕ Drinking hot cocoa"],
    correctAnswer: ""
  },
  {
    id: 46,
    question: "What’s your favorite way to celebrate an anniversary?",
    options: ["🍽️ A special dinner", "🏖️ A weekend trip", "🎁 Exchanging thoughtful gifts", "💑 Reliving our first date"],
    correctAnswer: ""
  },
  {
    id: 47,
    question: "Which of these would you most like to do for a spontaneous date?",
    options: ["🚗 Go for a drive", "🥪 Have a picnic", "🌠 Go stargazing", "🍲 Visit a new restaurant"],
    correctAnswer: ""
  },
  {
    id: 48,
    question: "What’s your favorite type of chocolate to share?",
    options: ["🍫 Dark chocolate", "🍫 Milk chocolate", "🍫 White chocolate", "🍬 Truffles"],
    correctAnswer: ""
  },
  {
    id: 49,
    question: "What’s your favorite way to spend a summer day together?",
    options: ["🏖️ Going to the beach", "🍖 Having a barbecue", "🌳 Visiting a park", "🚗 Going on a road trip"],
    correctAnswer: ""
  },
  {
    id: 50,
    question: "What’s your favorite type of book to read together?",
    options: ["💖 Romance novels", "🕵️‍♂️ Mystery thrillers", "🚀 Science fiction", "📚 Non-fiction"],
    correctAnswer: ""
  },
  {
    id: 51,
    question: "Which of these would you most enjoy as a surprise date?",
    options: ["💆‍♂️ A day at a spa", "🎶 A night at a concert", "👩‍🍳 A cooking class", "🛥️ A boat ride"],
    correctAnswer: ""
  },
  {
    id: 52,
    question: "Which of these would be your favorite way to start a special day together?",
    options: ["🍳 Breakfast in bed", "🚶 A morning walk", "🎁 Opening a gift", "🎶 Listening to our favorite music"],
    correctAnswer: ""
  },
  {
    id: 53,
    question: "Which of these would be your favorite way to end a perfect day together?",
    options: ["🌅 Watching the sunset", "🍽️ Having a romantic dinner", "🛀 Taking a bath together", "🤗 Cuddling in bed"],
    correctAnswer: ""
  },
  {
    id: 54,
    question: "Which of these would you most like to try for a unique date?",
    options: ["🚗 Going to a drive-in theater", "💃 Taking a dance class", "🗼 Visiting a new city", "🍲 Going on a food tour"],
    correctAnswer: ""
  },
  {
    id: 55,
    question: "Which of these desserts would you most like to share on a romantic date?",
    options: ["🍫 Chocolate fondue", "🍰 Cheesecake", "🍮 Crème brûlée", "🍓 Tiramisu"],
    correctAnswer: ""
  },
  {
    id: 56,
    question: "Which of these would be your favorite way to spend a fall day together?",
    options: ["🎃 Pumpkin picking", "🍂 Walking through the leaves", "🍇 Visiting a winery", "🔥 Having a bonfire"],
    correctAnswer: ""
  },
  {
    id: 57,
    question: "What’s your favorite thing to do together during the holiday season?",
    options: ["🎄 Decorating the tree", "🍪 Baking cookies", "🎥 Watching holiday movies", "🎁 Exchanging gifts"],
    correctAnswer: ""
  },
  {
    id: 58,
    question: "Which of these would be your favorite way to spend a rainy afternoon together?",
    options: ["📚 Reading books", "🎲 Playing board games", "🍪 Baking something sweet", "🎥 Watching movies"],
    correctAnswer: ""
  },
  {
    id: 59,
    question: "Which of these would be your favorite way to spend a spring day together?",
    options: ["🌷 Visiting a garden", "🚴‍♂️ Going for a bike ride", "🥪 Having a picnic", "🌾 Exploring a farmer's market"],
    correctAnswer: ""
  },
  {
    id: 60,
    question: "Which of these would be your favorite way to end a romantic weekend?",
    options: ["🚶‍♂️ Taking a walk together", "👩‍🍳 Cooking dinner together", "🌅 Watching a sunset", "🍰 Sharing a dessert"],
    correctAnswer: ""
  }
]