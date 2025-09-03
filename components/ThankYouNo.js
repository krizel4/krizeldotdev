import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Heart, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ThankYouNo = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="card">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="thank-you"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <CheckCircle size={80} color="#667eea" style={{ marginBottom: '20px' }} />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Thank You for Your Time!
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            We appreciate you taking the time to complete our product survey. 
            Your responses have helped us understand your needs and provide 
            you with a personalized product recommendation.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            We hope our recommendation helps you make an informed decision 
            about your technology needs. If you change your mind and would 
            like to learn more, feel free to reach out to us anytime.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            style={{ marginTop: '40px' }}
          >
            <Heart size={40} color="#667eea" />
            <p style={{ marginTop: '10px', fontSize: '16px', color: '#666' }}>
              Best of luck with your decision!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            style={{ marginTop: '30px' }}
          >
            <button 
              className="btn btn-secondary"
              onClick={() => navigate('/')}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '0 auto' }}
            >
              <ArrowLeft size={20} />
              Take Survey Again
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ThankYouNo;
