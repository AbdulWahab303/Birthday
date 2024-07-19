import React from 'react';
import Lottie from 'react-lottie';
import cakeData from './assets/cake.json';
import confettiData from './assets/confeitti.json';

function Decorations() {
  const cakeOptions = {
    loop: true,
    autoplay: true,
    animationData: cakeData,
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

  return (
    <div className="decorations">
      <Lottie options={confettiOptions} height={200} width={200} />
      <Lottie options={cakeOptions} height={200} width={200} />
    </div>
  );
}

export default Decorations;
