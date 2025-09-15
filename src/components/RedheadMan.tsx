import React from 'react';

interface RedheadManProps {
  isExorcising: boolean;
  isPossessed: boolean;
}

export default function RedheadMan({ isExorcising, isPossessed }: RedheadManProps) {
  const getManState = () => {
    if (isPossessed) return 'demon-possession levitate';
    if (isExorcising) return 'shake';
    return '';
  };

  const getDialogue = () => {
    if (isPossessed) {
      const demonDialogues = [
        "👹 JAMAIS JE NE RENONCERAI À MES CHEVEUX!",
        "🔥 LA ROUSSEUR EST ÉTERNELLE, MORTEL!",
        "😈 TU NE PEUX RIEN CONTRE MA TIGNASSE MAUDITE!",
        "🌋 MES MÈCHES SONT PLUS FORTES QUE TA FOI!"
      ];
      return demonDialogues[Math.floor(Math.random() * demonDialogues.length)];
    }
    if (isExorcising) {
      return "😱 NON! PAS MES BEAUX CHEVEUX ROUX!";
    }
    return "🤔 Mais... j'aime mes cheveux roux moi...";
  };

  const getManEmoji = () => {
    if (isPossessed) return '👹';
    if (isExorcising) return '😱';
    return '😐';
  };

  return (
    <div className={`relative flex flex-col items-center ${getManState()}`}>
      {/* Aura démoniaque si possédé */}
      {isPossessed && (
        <div className="absolute inset-0 bg-red-500 opacity-20 rounded-full blur-lg scale-150 animate-pulse" />
      )}
      
      {/* L'homme aux cheveux roux détaillé */}
      <div className="relative">
        {/* Cheveux roux magnifiques avec détails */}
        <div className="relative">
          <div className={`text-6xl mb-2 ${isPossessed ? 'red-hair-glow' : ''}`}>
            🦰
          </div>
          {/* Mèches supplémentaires */}
          <div className="absolute -top-2 -left-2 text-2xl">🔥</div>
          <div className="absolute -top-2 -right-2 text-2xl">🔥</div>
          {isPossessed && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-xl animate-bounce">
              👹
            </div>
          )}
        </div>
        
        {/* Visage expressif */}
        <div className="text-7xl mb-2">
          {getManEmoji()}
        </div>
        
        {/* Vêtements détaillés */}
        <div className="flex flex-col items-center">
          {/* Cravate */}
          <div className="text-2xl mb-1">👔</div>
          {/* Chemise */}
          <div className="text-4xl mb-1">👕</div>
          {/* Pantalon */}
          <div className="text-3xl">👖</div>
          {/* Chaussures */}
          <div className="text-2xl mt-1">👞</div>
        </div>
      </div>
      
      {/* Bulle de dialogue */}
      <div className="relative mt-4 bg-white rounded-lg p-3 shadow-lg max-w-xs">
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-white"></div>
        <p className={`text-xs font-bold text-center ${isPossessed ? 'text-red-600' : 'text-blue-800'}`}>
          {getDialogue()}
        </p>
      </div>
      
      {/* Texte descriptif */}
      <div className="text-center mt-4">
        <h3 className="text-xl font-bold text-red-600 mb-2">
          Jean-Roux Tignasse
        </h3>
        <p className="text-xs text-gray-600 max-w-48">
          {isPossessed 
            ? "🔥 Possédé par Belzébuth des Cheveux" 
            : isExorcising 
            ? "😰 Victime d'un rituel anti-roux"
            : "🤷‍♂️ Innocent porteur de gènes roux"
          }
        </p>
        
        {/* Indicateur de danger */}
        {isPossessed && (
          <div className="mt-2 text-red-500 font-bold animate-bounce">
            ⚠️ NIVEAU DÉMON: MAXIMUM ⚠️
          </div>
        )}
      </div>
    </div>
  );
}