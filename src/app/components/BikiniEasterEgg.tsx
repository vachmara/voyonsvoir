'use client';

import { useEffect, useState } from 'react';
import styles from './BikiniEasterEgg.module.css';

export default function BikiniEasterEgg() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [keySequence, setKeySequence] = useState('');
  const targetSequence = 'bikini';

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      
      // Only track letter keys
      if (key.length === 1 && key.match(/[a-z]/)) {
        setKeySequence((prev) => {
          const newSequence = (prev + key).slice(-targetSequence.length);
          
          if (newSequence === targetSequence) {
            setShowOverlay(true);
            
            // Auto-dismiss after 5 seconds
            setTimeout(() => {
              setShowOverlay(false);
            }, 5000);
            
            return '';
          }
          
          return newSequence;
        });
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  if (!showOverlay) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
        <div className={styles.emojiContainer}>
          <span className={styles.emoji}>👙</span>
          <span className={styles.emoji}>🏖️</span>
          <span className={styles.emoji}>👙</span>
          <span className={styles.emoji}>☀️</span>
          <span className={styles.emoji}>👙</span>
          <span className={styles.emoji}>🌊</span>
          <span className={styles.emoji}>👙</span>
        </div>
        <h1 className={styles.title}>PUT ME IN BIKINI NOW ! 👙</h1>
        <div className={styles.waves}>
          <span className={styles.wave}>🌊</span>
          <span className={styles.wave}>🌊</span>
          <span className={styles.wave}>🌊</span>
        </div>
      </div>
    </div>
  );
}
