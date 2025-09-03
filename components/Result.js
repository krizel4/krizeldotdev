import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';

const Result = ({ onNext }) => {
  const [result, setResult] = useState(null);
  const [showContactPrompt, setShowContactPrompt] = useState(false);

  useEffect(() => {
    const storedResult = sessionStorage.getItem('surveyResult');
    if (storedResult) {
      setResult(JSON.parse(storedResult));
    } else {
      // If no result is found, go back to survey
      onNext('survey');
    }
  }, [onNext]);

  const handleContactChoice = (wantsContact) => {
    if (wantsContact) {
      onNext('contact');
    } else {
      onNext('thank-you-no');
    }
  };

  if (!result) {
    return <div>Loading...</div>;
  }

  const { title, description, image, price, features, bestFor } = result;

  return (
    <div className="quiz-container">
      <div className="quiz-card">
        <div className="quiz-result-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="quiz-product-title">Your Perfect Match!</h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <img 
                src={image} 
                alt={title}
                className="quiz-product-image"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="quiz-product-title">{title}</h2>
              <p className="quiz-product-description">{description}</p>
              
              <div className="quiz-product-price">{price}</div>
              <p className="quiz-product-best-for">Best for: {bestFor}</p>
              
              <h3>Key Features:</h3>
              <ul className="quiz-product-features">
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <CheckCircle size={20} style={{ marginRight: '10px', color: '#667eea' }} />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="contact-prompt"
            >
              <h3>Would you like to learn more and connect with a representative?</h3>
              <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '20px' }}>
                <button 
                  className="quiz-btn"
                  onClick={() => handleContactChoice(true)}
                >
                  Yes, I'm interested
                  <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                </button>
                <button 
                  className="quiz-btn quiz-btn-secondary"
                  onClick={() => handleContactChoice(false)}
                >
                  No, thank you
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Result;
