import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

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
  },
];

export default function App() {
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

  const handleAnswer = (selectedAnswer) => {
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
      <View style={styles.container}>
        <Text style={styles.resultsText}>Resultados:</Text>
        <Text style={styles.resultsText}>{`Você acertou ${correctAnswers} de ${questions.length} perguntas.`}</Text>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={resetQuiz}
        >
          <Text>Reiniciar Quiz</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{questions[currentQuestion].question}</Text>
      {questions[currentQuestion].options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.option}
          onPress={() => {
            handleAnswer(option);
            handleNextQuestion();
          }}
        >
          <Text>{option}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={handleNextQuestion}
      >
        <Text>Próxima Pergunta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  question: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  option: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginVertical: 5,
    width: '80%',
    alignItems: 'center',
  },
  nextButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },
  resultsText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
});
