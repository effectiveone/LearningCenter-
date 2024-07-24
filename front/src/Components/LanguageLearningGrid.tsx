import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LanguageLearningGrid.scss';
import LanguageLearning from './LanguageLearning';

const API_URL = 'http://localhost:3000/api'; // Zaktualizuj URL API

const LanguageLearningGrid = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [languages, setLanguages] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [levels, setLevels] = useState<any[]>([]);
  const [questions, setQuestions] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  console.log('questions', questions);

  // Funkcja do pobierania danych z API
  const fetchData = async (endpoint: string) => {
    try {
      const token = localStorage.getItem('credentials');
      const response = await axios.get(`${API_URL}/${endpoint}`, {
        headers: { Authorization: `${token}` },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };

  // Ładowanie języków
  useEffect(() => {
    const loadLanguages = async () => {
      setLoading(true);
      const data = await fetchData('languages');
      setLanguages(data);
      setLoading(false);
    };
    loadLanguages();
  }, []);

  // Ładowanie kategorii, gdy wybrany język się zmienia
  useEffect(() => {
    if (selectedLanguage) {
      const loadCategories = async () => {
        setLoading(true);
        const data = await fetchData(`categories`);
        setCategories(data);
        setLoading(false);
      };
      loadCategories();
    }
  }, [selectedLanguage]);

  // Ładowanie poziomów, gdy wybrana kategoria się zmienia
  useEffect(() => {
    if (selectedCategory) {
      const loadLevels = async () => {
        setLoading(true);
        const data = await fetchData(`levels`);
        setLevels(data);
        setLoading(false);
      };
      loadLevels();
    }
  }, [selectedCategory]);

  // Ładowanie pytań, gdy wybrany poziom się zmienia
  useEffect(() => {
    if (selectedLevel) {
      const loadQuestions = async () => {
        setLoading(true);
        const data = await fetchData(`flashcards`);
        setQuestions(data);
        setLoading(false);
      };
      loadQuestions();
    }
  }, [selectedLevel]);

  return (
    <div className='language-learning-grid'>
      <div className='grid'>
        <div className='grid-item'>
          <h2>Wybierz język</h2>
          {loading && <p>Loading...</p>}
          {languages.map((language) => (
            <button
              key={language.id}
              onClick={() => setSelectedLanguage(language.id)}
              className={selectedLanguage === language.id ? 'selected' : ''}
            >
              {language.name}
            </button>
          ))}
        </div>
        {selectedLanguage && (
          <div className='grid-item'>
            <h2>Wybierz kategorię</h2>
            {loading && <p>Loading...</p>}
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? 'selected' : ''}
              >
                {category.name}
              </button>
            ))}
          </div>
        )}
        {selectedCategory && (
          <div className='grid-item'>
            <h2>Wybierz poziom</h2>
            {loading && <p>Loading...</p>}
            {levels.map((level) => (
              <button
                key={level.id}
                onClick={() => setSelectedLevel(level.id)}
                className={selectedLevel === level.id ? 'selected' : ''}
              >
                {level.name}
              </button>
            ))}
          </div>
        )}
      </div>
      {selectedLevel && (
        <div className='questions'>
          <h2>Pytania</h2>
          {loading && <p>Loading...</p>}
          {/* {questions.map((question) => (
            <div key={question.id} className='question'>
              {question.text}
            </div>
          ))} */}
          <LanguageLearning data={questions} />
        </div>
      )}
    </div>
  );
};

export default LanguageLearningGrid;
