import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import Survey from '../components/Survey';
import Result from '../components/Result';
import ContactForm from '../components/ContactForm';
import ThankYou from '../components/ThankYou';
import ThankYouNo from '../components/ThankYouNo';
import ThankYouYes from '../components/ThankYouYes';
import Loading from '../components/Loading';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

function Quiz() {
  const [surveyData, setSurveyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentStep, setCurrentStep] = useState('survey');
  const router = useRouter();

  useEffect(() => {
    const fetchSurveyData = async () => {
      try {
        const response = await axios.get('/api/survey');
        setSurveyData(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load survey data');
        setLoading(false);
      }
    };

    fetchSurveyData();
  }, []);

  const handleStepChange = (step) => {
    setCurrentStep(step);
  };

  if (loading) {
    return (
      <Layout>
        <SEO title="Quiz - Loading" />
        <Loading />
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <SEO title="Quiz - Error" />
        <div className="quiz-container">
          <div className="quiz-card">
            <h1>Error</h1>
            <p>{error}</p>
            <button className="quiz-btn" onClick={() => window.location.reload()}>
              Try Again
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO title="Product Survey Quiz" />
      <div className="App">
        <AnimatePresence mode="wait">
          {currentStep === 'survey' && (
            <motion.div
              key="survey"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Survey 
                surveyData={surveyData} 
                onComplete={(step) => handleStepChange(step)}
              />
            </motion.div>
          )}
          {currentStep === 'result' && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Result onNext={(step) => handleStepChange(step)} />
            </motion.div>
          )}
          {currentStep === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <ContactForm onNext={(step) => handleStepChange(step)} />
            </motion.div>
          )}
          {currentStep === 'thank-you' && (
            <motion.div
              key="thank-you"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <ThankYou />
            </motion.div>
          )}
          {currentStep === 'thank-you-no' && (
            <motion.div
              key="thank-you-no"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <ThankYouNo />
            </motion.div>
          )}
          {currentStep === 'thank-you-yes' && (
            <motion.div
              key="thank-you-yes"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <ThankYouYes />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
}

export default Quiz;
