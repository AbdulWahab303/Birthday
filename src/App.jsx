import React, { useState, useEffect } from 'react';
import './App.css';
import Lottie from 'react-lottie';
import cakeData from './assets/cake.json';
import confettiData from './assets/confeitti.json';
import gift from './assets/gift.json';
import hbd from './assets/hbd.json';
import congrats from './assets/congrats.json';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const cakeOptions = {
    loop: true,
    autoplay: true,
    animationData: cakeData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const giftOptions = {
    loop: true,
    autoplay: true,
    animationData: gift,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const conOptions = {
    loop: true,
    autoplay: true,
    animationData: congrats,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const confettiOptions = {
    loop: true,
    autoplay: true,
    animationData: confettiData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const hbdOptions = {
    loop: true,
    autoplay: true,
    animationData: hbd,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const [state, setState] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setState(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {state ? (
        <motion.div
          key="main"
          className="container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
        >
          <div className="animations-container">
            <Lottie options={confettiOptions} height={400} width={400} />
            <div className='giftLine'>
              <Lottie options={giftOptions} height={200} width={200} />
              <Lottie options={cakeOptions} height={200} width={200} />
              <Lottie options={giftOptions} height={200} width={200} />
            </div>
            <Lottie options={hbdOptions} height={250} width={250} />
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="initial"
          className="fullscreen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Lottie options={conOptions} height={250} width={250} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
