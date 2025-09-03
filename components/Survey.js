import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import axios from 'axios';

const Survey = ({ surveyData, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [loading, setLoading] = useState(false);

  const totalQuestions = surveyData?.questions?.length || 0;
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNext = async () => {
    if (!selectedOption) return;

    const newAnswers = [...answers];
    const existingAnswerIndex = newAnswers.findIndex(
      answer => answer.questionId === surveyData.questions[currentQuestion].id
    );

    if (existingAnswerIndex >= 0) {
      newAnswers[existingAnswerIndex] = {
        questionId: surveyData.questions[currentQuestion].id,
        answer: selectedOption.text
      };
    } else {
      newAnswers.push({
        questionId: surveyData.questions[currentQuestion].id,
        answer: selectedOption.text
      });
    }

    setAnswers(newAnswers);

    if (currentQuestion === totalQuestions - 1) {
      // Submit survey and get result
      setLoading(true);
      try {
        const response = await axios.post('/api/calculate-result', {
          answers: newAnswers
        });
        
        // Store result in sessionStorage for the Result component
        sessionStorage.setItem('surveyResult', JSON.stringify(response.data));
        onComplete('result');
      } catch (error) {
        console.error('Error calculating result:', error);
        alert('There was an error processing your survey. Please try again.');
      } finally {
        setLoading(false);
      }
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      const previousAnswer = answers.find(
        answer => answer.questionId === surveyData.questions[currentQuestion - 1].id
      );
      if (previousAnswer) {
        const option = surveyData.questions[currentQuestion - 1].options.find(
          opt => opt.text === previousAnswer.answer
        );
        setSelectedOption(option);
      } else {
        setSelectedOption(null);
      }
    }
  };

  const currentQuestionData = surveyData?.questions[currentQuestion];

  if (!currentQuestionData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="quiz-container">
      <div className="quiz-card">
        {/* Progress Bar */}
        <div className="quiz-progress-bar">
          <div 
            className="quiz-progress-fill" 
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="quiz-question-container">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="quiz-question-text">{currentQuestionData.text}</h2>
            
            <div className="quiz-options-container">
              {currentQuestionData.options.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div
                    className={`quiz-option ${selectedOption?.text === option.text ? 'selected' : ''}`}
                    onClick={() => handleOptionSelect(option)}
                  >
                    {option.text}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="navigation">
            <button
              className="btn btn-secondary"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              <ChevronLeft size={20} />
              Previous
            </button>
            
            <div className="question-counter">
              Question {currentQuestion + 1} of {totalQuestions}
            </div>
            
            <button
              className="btn"
              onClick={handleNext}
              disabled={!selectedOption || loading}
            >
              {loading ? 'Processing...' : currentQuestion === totalQuestions - 1 ? 'Get Results' : 'Next'}
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Survey;
