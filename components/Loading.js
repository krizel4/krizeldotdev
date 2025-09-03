import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="quiz-container">
      <div className="quiz-card">
        <div className="quiz-loading">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <div className="quiz-spinner"></div>
          </motion.div>
          <p style={{ marginTop: '20px', color: '#666' }}>Loading survey...</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
