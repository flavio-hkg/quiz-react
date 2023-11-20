
import { useState } from 'react';
import './App.css'; // Add this line

const questions = [
  {
    question: 'Qual é a capital do Brasil?',
    options: ['Brasília', 'Rio de Janeiro', 'São Paulo', 'Salvador', 'Belém'],
    correctAnswer: 'Brasília',
  },
  {
    question: 'Quem é o autor de "Dom Casmurro"?',
    options: ['Machado de Assis', 'Carlos Drummond de Andrade', 'Graciliano Ramos', 'Monteiro Lobato', 'Cecília Meireles'],
    correctAnswer: 'Machado de Assis',
  },
  {
    question: 'Quantos planetas existem no sistema solar?',
    options: ['7', '8', '9', '10', '11'],
    correctAnswer: '8',
  },
  {
    question: 'Quem pintou a Mona Lisa?',
    options: ['Leonardo da Vinci', 'Vincent van Gogh', 'Pablo Picasso', 'Claude Monet', 'Michelangelo'],
    correctAnswer: 'Leonardo da Vinci',
  },
  {
    question: 'Quem foi o primeiro presidente dos Estados Unidos?',
    options: ['Thomas Jefferson', 'John Adams', 'George Washington', 'Abraham Lincoln', 'Andrew Jackson'],
    correctAnswer: 'George Washington',
  },
  {
    question: 'Em que ano a Segunda Guerra Mundial começou?',
    options: ['1939', '1941', '1943', '1945', '1936'],
    correctAnswer: '1939',
  },
  {
    question: 'Qual é o oceano mais extenso do mundo?',
    options: ['Oceano Atlântico', 'Oceano Índico', 'Oceano Pacífico', 'Oceano Antártico', 'Oceano Ártico'],
    correctAnswer: 'Oceano Pacífico',
  },
  {
    question: 'Quem é o autor de "Cem Anos de Solidão"?',
    options: ['Julio Cortázar', 'Mario Vargas Llosa', 'Gabriel García Márquez', 'Isabel Allende', 'Pablo Neruda'],
    correctAnswer: 'Gabriel García Márquez',
  },
  {
    question: 'Quantos elementos químicos existem na tabela periódica?',
    options: ['92', '104', '118', '109', '87'],
    correctAnswer: '118',
  },
  {
    question: 'Qual é a capital do Japão?',
    options: ['Pequim', 'Tóquio', 'Seul', 'Bangcoc', 'Cidade de Ho Chi Minh'],
    correctAnswer: 'Tóquio',
  },
  {
    question: 'Quem escreveu "Romeu e Julieta"?',
    options: ['Charles Dickens', 'Jane Austen', 'William Shakespeare', 'Fyodor Dostoevsky', 'Homer'],
    correctAnswer: 'William Shakespeare',
  },
  {
    question: 'Qual é o maior planeta do nosso sistema solar?',
    options: ['Terra', 'Júpiter', 'Vênus', 'Marte', 'Saturno'],
    correctAnswer: 'Júpiter',
  }
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleAnswer = (selectedAnswer: string) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setCorrectAnswers(correctAnswers + 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setCorrectAnswers(0);
    setShowResults(false);
  };

  if (showResults) {
    return (
      <div className="container">
        <p className="resultsText">Resultados:</p>
        <p className="resultsText">{`Você acertou ${correctAnswers} de ${questions.length} perguntas.`}</p>
        <button className="nextButton" onClick={resetQuiz}>
          Reiniciar Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <p className="question">{questions[currentQuestion].question}</p>
      {questions[currentQuestion].options.map((option, index) => (
        <button
          key={index}
          className="option"
          onClick={() => {
            handleAnswer(option);
            handleNextQuestion();
          }}
        >
          {option}
        </button>
      ))}
      <button className="nextButton" onClick={handleNextQuestion}>
        Próxima Pergunta
      </button>
    </div>
  );
}

export default App;
