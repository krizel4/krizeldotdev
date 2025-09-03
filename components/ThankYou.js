import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Heart } from 'lucide-react';

const ThankYou = () => {
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
            Thank You!
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            We appreciate you taking the time to complete our product survey. 
            Your responses help us understand your needs better and provide 
            more accurate recommendations.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            If you chose to connect with us, our team will reach out to you 
            within 24 hours to discuss how we can help you achieve your goals.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            style={{ marginTop: '40px' }}
          >
            <Heart size={40} color="#667eea" />
            <p style={{ marginTop: '10px', fontSize: '16px', color: '#666' }}>
              We look forward to working with you!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ThankYou;
