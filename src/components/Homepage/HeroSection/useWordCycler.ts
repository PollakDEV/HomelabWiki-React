import { useState, useEffect } from 'react';

export const useWordCycler = (words: string[], interval: number = 3000) => {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWord(prev => (prev + 1) % words.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [words.length, interval]);

  return currentWord;
};