import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Archbishop from './Archbishop';
import RedheadMan from './RedheadMan';
import Economist from './Economist';

export default function ExorcismScene() {
  const [isExorcising, setIsExorcising] = useState(false);
  const [isPossessed, setIsPossessed] = useState(false);
  const [economistReady, setEconomistReady] = useState(false);
  const [scenePhase, setScenePhase] = useState<'idle' | 'exorcism' | 'possession' | 'peeling' | 'success'>('idle');
  const [storyText, setStoryText] = useState("Jean-Roux Tignasse se présente devant Monseigneur l'Archevêque. Ses cheveux flamboyants éveillent les soupçons...");

  const getStoryNarration = () => {
    switch(scenePhase) {
      case 'idle':
        return "📖 Dans les couloirs sacrés de la cathédrale, une menace capillaire se profile...";
      case 'exorcism':
        return "⛪ L'archevêque entonne ses prières les plus puissantes : 'QUE LA CALVICIE TE LIBÈRE!'";
      case 'possession':
        return "👹 LE DÉMON CAPILLAIRE SE RÉVÈLE! Belzébuth des Cheveux prend possession de Jean-Roux!";
      case 'peeling':
        return "🔪 Maître Éplucheur Bernard entre en action avec sa technique légendaire d'épluchage anti-démoniaque!";
      case 'success':
        return "✅ VICTOIRE! Le démon a été épluché avec succès! Jean-Roux arbore maintenant une magnifique calvitie libératrice!";
      default:
        return storyText;
    }
  };

  const startExorcism = () => {
    setIsExorcising(true);
    setScenePhase('exorcism');
    setStoryText("L'archevêque lève sa croix et s'écrie : 'Par la puissance du chauve tout-puissant, que la calvicie te libère!'");
    
    // Après 3 secondes, le démon se révèle
    setTimeout(() => {
      setIsPossessed(true);
      setScenePhase('possession');
      setStoryText("🔥 CATASTROPHE! Le démon des cheveux roux résiste à l'exorcisme! Il faut appeler l'économe!");
    }, 3000);
  };

  const prepareEconomistTools = () => {
    setEconomistReady(true);
    setStoryText("Maître Éplucheur Bernard affûte ses lames sacrées et prépare ses cuillères bénites!");
  };

  const startPeeling = () => {
    setScenePhase('peeling');
    setStoryText("🍽️ 'TECHNIQUE D'ÉPLUCHAGE ANTI-DÉMONIAQUE NIVEAU MAXIMUM!' crie Bernard en brandissant ses outils!");
    
    // Après 4 secondes, succès!
    setTimeout(() => {
      setScenePhase('success');
      setIsExorcising(false);
      setIsPossessed(false);
      setStoryText("✅ MIRACLE! Bernard a réussi à éplucher le démon! Jean-Roux est maintenant chauve et libéré!");
    }, 4000);
  };

  const resetScene = () => {
    setIsExorcising(false);
    setIsPossessed(false);
    setEconomistReady(false);
    setScenePhase('idle');
    setStoryText("Jean-Roux Tignasse se présente devant Monseigneur l'Archevêque. Ses cheveux flamboyants éveillent les soupçons...");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-green-100 p-6">
      {/* Titre principal avec plus de style */}
      <div className="text-center mb-8">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-600 via-red-500 to-green-600 bg-clip-text text-transparent mb-4 animate-pulse">
          🔥 L'EXORCISME DES CHEVEUX ROUX 🔥
        </h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          "QUE LA CALVICIE TE LIBÈRE!"
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Une comédie épique où Monseigneur l'Archevêque et Maître Éplucheur Bernard unissent leurs forces contre les forces démoniaques capillaires!
        </p>
      </div>

      {/* Narrateur amélioré */}
      <Card className="max-w-5xl mx-auto mb-8 p-6 bg-white/90 backdrop-blur-sm border-2 border-yellow-200">
        <div className="text-center">
          <div className="text-3xl mb-3">📜</div>
          <h3 className="text-lg font-bold text-purple-800 mb-2">CHRONIQUE SACRÉE</h3>
          <p className="text-lg font-medium text-gray-800 italic mb-2">
            "{getStoryNarration()}"
          </p>
          <div className="text-sm text-gray-600 font-semibold">
            Phase actuelle: <span className="capitalize text-purple-600">{scenePhase}</span>
          </div>
        </div>
      </Card>

      {/* Scène principale avec les 3 personnages améliorés */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
          {/* Archevêque */}
          <Card className="p-6 bg-white/95 backdrop-blur-sm border-2 border-purple-200 hover:shadow-xl transition-shadow">
            <Archbishop 
              isExorcising={isExorcising}
              onStartExorcism={startExorcism}
            />
          </Card>

          {/* Homme aux cheveux roux */}
          <Card className="p-6 bg-white/95 backdrop-blur-sm border-2 border-red-200 hover:shadow-xl transition-shadow">
            <RedheadMan 
              isExorcising={isExorcising}
              isPossessed={isPossessed}
            />
          </Card>

          {/* Économe */}
          <Card className="p-6 bg-white/95 backdrop-blur-sm border-2 border-green-200 hover:shadow-xl transition-shadow">
            <Economist 
              isReady={economistReady}
              isPossessed={isPossessed}
              onPrepareTools={prepareEconomistTools}
              onStartPeeling={startPeeling}
            />
          </Card>
        </div>
      </div>

      {/* Contrôles de scène améliorés */}
      <div className="text-center mt-8">
        <Card className="max-w-md mx-auto p-6 bg-white/95 backdrop-blur-sm border-2 border-blue-200">
          <h3 className="text-xl font-bold mb-4 text-blue-800">🎬 RÉGIE DE LA COMÉDIE SACRÉE</h3>
          <div className="space-y-3">
            {scenePhase === 'success' && (
              <Button 
                onClick={resetScene}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold w-full py-3"
              >
                🔄 Nouvelle Représentation
              </Button>
            )}
            
            {scenePhase === 'idle' && !economistReady && (
              <Button 
                onClick={prepareEconomistTools}
                className="bg-green-600 hover:bg-green-700 text-white w-full py-3"
              >
                ⚡ Préparer Maître Éplucheur (Recommandé)
              </Button>
            )}
          </div>
          
          {/* Compteur de spectacle */}
          <div className="mt-4 p-3 bg-gray-100 rounded-lg">
            <div className="text-sm text-gray-600">
              <div>🎭 Spectacles donnés: ∞</div>
              <div>😂 Taux de rire: si tu 'haha' pas je t'encule</div>
              <div>👹 Démons épluchés: En cours...</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Footer comique amélioré */}
      <div className="text-center mt-12 text-gray-500 text-sm space-y-2">
        <p>⚠️ Aucun roux n'a été maltraité dans la création de ce site ⚠️ (il sont rend les miskine, pas la peine d'en rajouter)</p>
        <p>🎭 Comédie sacrée certifiée par l'Église du Rire Éternel</p>
        <p>🏆 Prix Nobel de la Calvitie Libératrice 2024</p>
        <p className="italic">"Que la calvicie te libère!" - Devise officielle</p>
      </div>
    </div>
  );
}