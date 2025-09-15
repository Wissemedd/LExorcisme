import React from 'react';
import { Button } from '@/components/ui/button';

interface ArchbishopProps {
  isExorcising: boolean;
  onStartExorcism: () => void;
}

export default function Archbishop({ isExorcising, onStartExorcism }: ArchbishopProps) {
  const getDialogue = () => {
    if (isExorcising) {
      const dialogues = [
        "🙏 QUE LA CALVICIE TE LIBÈRE!",
        "✝️ EXORCIZAMUS TE, SPIRITUS ROUSSUS!",
        "⛪ PAR LA PUISSANCE DU CHAUVE TOUT-PUISSANT!",
        "🔥 RETOURNE D'OÙ TU VIENS, DÉMON CAPILLAIRE!"
      ];
      return dialogues[Math.floor(Math.random() * dialogues.length)];
    }
    return "Mes enfants, les cheveux roux sont l'œuvre du malin...";
  };

  return (
    <div className={`relative flex flex-col items-center ${isExorcising ? 'exorcism-glow' : ''}`}>
      {/* Particules saintes pendant l'exorcisme */}
      {isExorcising && (
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-32 h-20">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="holy-particle" />
          ))}
        </div>
      )}
      
      {/* Mitre épiscopale */}
      <div className={`text-4xl mb-2 ${isExorcising ? 'shake' : ''}`}>
        👑
      </div>
      
      {/* Visage de l'archevêque avec expression */}
      <div className="relative">
        <div className="text-7xl mb-2">
          {isExorcising ? '😤' : '😇'}
        </div>
        {/* Barbe majestueuse */}
        <div className="text-3xl -mt-4 mb-2">🧙‍♂️</div>
      </div>
      
      {/* Habits religieux détaillés */}
      <div className="flex flex-col items-center">
        {/* Croix pectorale */}
        <div className={`text-3xl mb-1 ${isExorcising ? 'prayer-hands' : ''}`}>
          ✝️
        </div>
        {/* Soutane violette */}
        <div className="text-5xl mb-1">🟣</div>
        {/* Cape épiscopale */}
        <div className="text-4xl">🦹‍♂️</div>
      </div>
      
      {/* Bâton pastoral */}
      <div className={`text-4xl mt-2 ${isExorcising ? 'shake' : ''}`}>
        🏒
      </div>
      
      {/* Bulle de dialogue */}
      <div className="relative mt-4 bg-white rounded-lg p-3 shadow-lg max-w-xs">
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-white"></div>
        <p className="text-xs font-bold text-purple-800 text-center">
          {getDialogue()}
        </p>
      </div>
      
      {/* Texte et actions */}
      <div className="text-center mt-4">
        <h2 className="text-2xl font-bold text-purple-800 mb-2">
          Monseigneur l'Archevêque
        </h2>
        <p className="text-xs text-gray-600 mb-4 max-w-48">
          Expert en exorcisme capillaire depuis 1347
        </p>
        
        {!isExorcising && (
          <Button 
            onClick={onStartExorcism}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold"
          >
            🔥 Commencer l'Exorcisme
          </Button>
        )}
        
        {isExorcising && (
          <div className="text-yellow-600 font-bold animate-pulse">
            ✨ RITUEL EN COURS ✨
          </div>
        )}
      </div>
    </div>
  );
}