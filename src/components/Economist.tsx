import React from 'react';
import { Button } from '@/components/ui/button';

interface EconomistProps {
  isReady: boolean;
  isPossessed: boolean;
  onPrepareTools: () => void;
  onStartPeeling: () => void;
}

export default function Economist({ isReady, isPossessed, onPrepareTools, onStartPeeling }: EconomistProps) {
  const getDialogue = () => {
    if (isPossessed) {
      const peelingDialogues = [
        "🔪 TECHNIQUE D'ÉPLUCHAGE ANTI-DÉMONIAQUE!",
        "🥄 ON VA TE PELER COMME UNE PATATE MAUDITE!",
        "⚔️ ÉPLUCHAGE NIVEAU MAÎTRE CUISINIER!",
        "🍽️ PRÉPARE-TOI À ÊTRE DÉCORTIQUÉ, DÉMON!"
      ];
      return peelingDialogues[Math.floor(Math.random() * peelingDialogues.length)];
    }
    if (isReady) {
      return "⚡ Mes lames sont affûtées, mes cuillères prêtes!";
    }
    return "🥔 Un bon épluchage vaut mieux qu'un mauvais exorcisme!";
  };

  return (
    <div className={`relative flex flex-col items-center ${isReady ? 'economist-ready' : ''}`}>
      {/* L'économe détaillé */}
      <div className="relative">
        {/* Toque de chef */}
        <div className="text-4xl mb-1">👨‍🍳</div>
        
        {/* Visage expressif */}
        <div className="text-6xl mb-2">
          {isPossessed ? '😈' : isReady ? '😤' : '🤓'}
        </div>
        
        {/* Moustache de maître cuisinier */}
        <div className="text-2xl -mt-4 mb-2">🥸</div>
        
        {/* Collection d'outils d'épluchage */}
        <div className="grid grid-cols-3 gap-1 mb-4 p-2 bg-gray-100 rounded">
          <div className={`text-2xl ${isReady ? 'animate-bounce' : ''}`}>🔪</div>
          <div className={`text-2xl ${isReady ? 'animate-bounce' : ''}`} style={{animationDelay: '0.1s'}}>🥄</div>
          <div className={`text-2xl ${isReady ? 'animate-bounce' : ''}`} style={{animationDelay: '0.2s'}}>⚔️</div>
          <div className={`text-2xl ${isReady ? 'animate-bounce' : ''}`} style={{animationDelay: '0.3s'}}>🗡️</div>
          <div className={`text-2xl ${isReady ? 'animate-bounce' : ''}`} style={{animationDelay: '0.4s'}}>🔧</div>
          <div className={`text-2xl ${isReady ? 'animate-bounce' : ''}`} style={{animationDelay: '0.5s'}}>⛏️</div>
        </div>
        
        {/* Tablier professionnel */}
        <div className="text-4xl mb-1">👨‍🍳</div>
        
        {/* Gants de protection */}
        <div className="text-2xl">🧤</div>
      </div>
      
      {/* Bulle de dialogue */}
      <div className="relative mt-4 bg-white rounded-lg p-3 shadow-lg max-w-xs">
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-white"></div>
        <p className={`text-xs font-bold text-center ${isPossessed ? 'text-red-600' : 'text-green-700'}`}>
          {getDialogue()}
        </p>
      </div>
      
      {/* Texte et actions */}
      <div className="text-center mt-4">
        <h3 className="text-xl font-bold text-green-700 mb-2">
          Maître Éplucheur Bernard
        </h3>
        <p className="text-xs text-gray-600 mb-4 max-w-48">
          {isPossessed 
            ? "🍽️ Mode épluchage extrême activé!" 
            : isReady 
            ? "⚡ Certification anti-démon niveau 5"
            : "🥔 Expert en épluchage depuis 1985"
          }
        </p>
        
        {/* Statistiques d'épluchage */}
        <div className="text-xs text-gray-500 mb-4">
          <div>🏆 Pommes de terre épluchées: 50,847</div>
          <div>👹 Démons épluchés: 3</div>
        </div>
        
        {/* Boutons d'action */}
        <div className="space-y-2">
          {!isReady && !isPossessed && (
            <Button 
              onClick={onPrepareTools}
              className="bg-green-600 hover:bg-green-700 text-white text-xs"
            >
              🔧 Affûter les Outils
            </Button>
          )}
          
          {isPossessed && (
            <Button 
              onClick={onStartPeeling}
              className="bg-red-600 hover:bg-red-700 text-white font-bold animate-pulse"
            >
              🍽️ ÉPLUCHAGE D'URGENCE!
            </Button>
          )}
          
          {isReady && !isPossessed && (
            <div className="text-green-600 font-bold">
              ✅ PRÊT POUR L'ACTION
            </div>
          )}
        </div>
      </div>
    </div>
  );
}