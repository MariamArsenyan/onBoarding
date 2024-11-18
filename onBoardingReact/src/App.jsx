import React, { useState } from 'react';
import managment from './assets/time_managment.svg'; 
import programming from './assets/programming.svg'; 
import meditation from './assets/meditation.svg'; 
import { Card } from './components/card/Card';

export const App = () => {
  const tutorialData = [
  {
    title: 'Dedica moltes hores',
    description: "Un minim de 30 hores a la setmana. Si no en tens prou, hauras de dedicar-li més hores. Al principi sembla imposible, pero notaras una millora rápidament.",
    bgColor: '#17a2b8',
    image: managment,
  },
  {
    title: 'Programa projects propis',
    description: "Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge",
    bgColor: '#6a737b59',
    image: programming,
  },
  {
    title: 'Procura descansar',
    description: "Descansar bé i desconectar són vitals.D'aquesta manera reduiràs l'estrès i l'a sietat. Milloraràs la teva concentració i con olidaras el teu aprenentatge",
    bgColor: '#f3b704c4',
    image: meditation,
  },
];

  const [step, setStep] = useState(0);
  const nextStep = () => {
    if (step < tutorialData.length - 1) {
      setStep(step + 1);
    }
  };
  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const currentCardData = tutorialData[step];

  return (
    <div>
      <Card
        title={currentCardData.title}
        description={currentCardData.description}
        bgColor={currentCardData.bgColor}
        image={currentCardData.image}
        nextStep={nextStep}
        prevStep={prevStep}
        step={step}
        totalSteps={tutorialData.length}
      />
    </div>
  );
};

