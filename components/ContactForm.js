import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Building, Phone, MessageSquare } from 'lucide-react';
import axios from 'axios';

const ContactForm = ({ onNext }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post('/api/contact-form', formData);
      setSubmitted(true);
      setTimeout(() => {
        onNext('thank-you-yes');
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="quiz-container">
        <div className="quiz-card">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="quiz-thank-you"
          >
            <h1>Thank You!</h1>
            <p>Your information has been submitted successfully. We'll be in touch soon!</p>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-card">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>
            Connect With Us
          </h1>
          <p style={{ textAlign: 'center', marginBottom: '40px', color: '#666', fontSize: '18px' }}>
            Fill out the form below and our team will get back to you within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="quiz-contact-form">
            <div className="quiz-form-group">
              <label htmlFor="name">
                <User size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="quiz-form-group">
              <label htmlFor="email">
                <Mail size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Enter your email address"
              />
            </div>

            <div className="quiz-form-group">
              <label htmlFor="company">
                <Building size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Enter your company name"
              />
            </div>

            <div className="quiz-form-group">
              <label htmlFor="phone">
                <Phone size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
              />
            </div>

            <div className="quiz-form-group">
              <label htmlFor="message">
                <MessageSquare size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                placeholder="Tell us about your needs and how we can help..."
              />
            </div>

            <motion.div
              style={{ textAlign: 'center', marginTop: '30px' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <button
                type="submit"
                className="quiz-btn"
                disabled={loading}
                style={{ minWidth: '200px' }}
              >
                {loading ? (
                  <>
                    <div className="quiz-spinner" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={20} style={{ marginLeft: '8px' }} />
                  </>
                )}
              </button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;
