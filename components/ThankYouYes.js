import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Heart, Mail, Phone, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ThankYouYes = () => {
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
            Thank You for Your Interest!
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            We've received your information and our team is excited to connect with you! 
            Your personalized product recommendation has been saved and our representatives 
            will review your specific needs.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            style={{ 
              background: '#f8f9fa', 
              padding: '20px', 
              borderRadius: '15px', 
              margin: '20px 0',
              border: '2px solid #e9ecef'
            }}
          >
            <h3 style={{ color: '#667eea', marginBottom: '15px' }}>What happens next?</h3>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <Clock size={20} color="#667eea" style={{ marginRight: '10px' }} />
              <span>We'll contact you within 24 hours</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <Mail size={20} color="#667eea" style={{ marginRight: '10px' }} />
              <span>You'll receive a detailed proposal</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Phone size={20} color="#667eea" style={{ marginRight: '10px' }} />
              <span>Schedule a personalized demo</span>
            </div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            In the meantime, feel free to explore our website or reach out if you have 
            any immediate questions. We're here to help you succeed!
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
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

export default ThankYouYes;
