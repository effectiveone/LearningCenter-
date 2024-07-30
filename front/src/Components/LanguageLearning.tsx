import React, { useState, useEffect } from 'react';
import './LanguageLearningGrid.scss';

interface Question {
  id: string;
  question: string;
  answer: string;
}

interface LanguageLearningGridProps {
  data: Question[];
}

const LanguageLearning: React.FC<LanguageLearningGridProps> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isAnswerMode, setIsAnswerMode] = useState(true);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [timer, setTimer] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [incorrectAnswers, setIncorrectAnswers] = useState<Question[]>([]);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    } else if (timer === 0 && feedback) {
      nextQuestion();
    }
  }, [timer, feedback]);

  const checkAnswer = () => {
    const currentQuestion = data[currentIndex];
    let isCorrect = false;

    if (isAnswerMode) {
      isCorrect =
        inputValue.trim().toLowerCase() ===
        currentQuestion.answer.trim().toLowerCase();
    } else {
      isCorrect =
        inputValue.trim().toLowerCase() ===
        currentQuestion.question.trim().toLowerCase();
    }

    if (isCorrect) {
      setFeedback('Odpowiedź jest poprawna!');
      setCorrectAnswersCount(correctAnswersCount + 1);
    } else {
      const correctAnswer = isAnswerMode
        ? currentQuestion.answer
        : currentQuestion.question;
      setFeedback(
        `Odpowiedź jest niepoprawna. Poprawna odpowiedź to: ${correctAnswer}`,
      );
      setIncorrectAnswers([...incorrectAnswers, currentQuestion]);
    }

    setQuestionsAnswered(questionsAnswered + 1);
    setTimer(3);
  };

  const toggleMode = () => {
    setIsAnswerMode(!isAnswerMode);
    setFeedback('');
  };

  const nextQuestion = () => {
    if (questionsAnswered >= data.length) {
      setCompleted(true);
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
      setInputValue('');
      setFeedback('');
      setTimer(0);
    }
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setInputValue('');
    setFeedback('');
    setIsAnswerMode(true);
    setCorrectAnswersCount(0);
    setQuestionsAnswered(0);
    setTimer(0);
    setCompleted(false);
    setIncorrectAnswers([]);
  };

  const currentQuestion = data[currentIndex];

  if (data?.length === 0) {
    return (
      <div>
        <p>Nie masz pytań w tej kategorii</p>
      </div>
    );
  }

  if (completed) {
    return (
      <div className='language-learning-grid'>
        <h2>Ukończyłeś quiz!</h2>
        <p>Poprawne odpowiedzi: {correctAnswersCount}</p>
        <p>Błędne odpowiedzi: {incorrectAnswers.length}</p>
        <button onClick={resetQuiz}>Rozpocznij ponownie</button>
        <button
          onClick={() => {
            /* Navigate to UserProgress */
          }}
        >
          Zobacz postępy
        </button>
        <button
          onClick={() => {
            /* Navigate to UserRevision */
          }}
        >
          Powtórz pytania
        </button>
      </div>
    );
  }

  return (
    <div className='language-learning-grid'>
      <h2>Sprawdź {isAnswerMode ? 'odpowiedź' : 'pytanie'}</h2>
      <div className='question-answer-display'>
        <p>
          {isAnswerMode
            ? `Pytanie: ${currentQuestion?.question}`
            : `Odpowiedź: ${currentQuestion?.answer}`}
        </p>
      </div>
      <input
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={isAnswerMode ? 'Wpisz odpowiedź' : 'Wpisz pytanie'}
      />
      <button onClick={checkAnswer}>Sprawdź</button>
      <button onClick={toggleMode}>
        {isAnswerMode ? 'Zmień na pytanie' : 'Zmień na odpowiedź'}
      </button>
      <button onClick={nextQuestion} disabled={timer > 0}>
        Następne pytanie
      </button>
      <div className='feedback'>{feedback}</div>
      {timer > 0 && (
        <div className='timer'>
          Przechodzę do następnego pytania za {timer} sekund
        </div>
      )}
      <div className='statistics'>
        <p>Liczba pytań: {data.length}</p>
        <p>Poprawne odpowiedzi: {correctAnswersCount}</p>
        <p>Odpowiedzi udzielone: {questionsAnswered}</p>
      </div>
    </div>
  );
};

export default LanguageLearning;
