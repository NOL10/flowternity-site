import React, { useState, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './styles/coming-soon-popup.css';

const ComingSoonContext = createContext(null);

let globalOpenPopup = null;

export const useComingSoon = () => {
  const context = useContext(ComingSoonContext);
  return context;
};

export const ComingSoonProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  // Set global function for easy access
  React.useEffect(() => {
    globalOpenPopup = openPopup;
  }, []);

  return (
    <ComingSoonContext.Provider value={{ openPopup, closePopup }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="coming-soon-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
          >
            <motion.div
              className="coming-soon-popup"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="coming-soon-close" onClick={closePopup}>
                ×
              </button>
              <h2 className="coming-soon-title">Coming Soon</h2>
              <p className="coming-soon-message">
                We're working hard to bring you this feature. Stay tuned!
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ComingSoonContext.Provider>
  );
};

// Global function to open popup from anywhere
export const showComingSoon = () => {
  if (globalOpenPopup) {
    globalOpenPopup();
  }
};

export default ComingSoonProvider;

