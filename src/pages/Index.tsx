
import { useState } from 'react';
import CelestialPrompt from '../components/CelestialPrompt';
import HarmonyVisualizer from '../components/HarmonyVisualizer';
import { CosmicData } from '../types/cosmic';
import '../assets/cosmic-style.css';

const Index = () => {
  const [cosmicResponse, setCosmicResponse] = useState<CosmicData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleCosmicSubmit = async (prompt: string) => {
    setIsLoading(true);
    // Simulated API call
    setTimeout(() => {
      setCosmicResponse({
        protector: 'Nebula Weaver',
        relic: 'Prism of Echoes',
        phase: 'Quantum Entanglement',
        harmonyLevel: 92
      });
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="cosmic-container">
      <div className="stellar-bg" />
      
      <header className="galactic-header">
        <h1 className="neon-title">Celestial Accord Initiative</h1>
        <p className="starlight-subtitle">Universal Balance Interface</p>
      </header>

      <CelestialPrompt onSubmit={handleCosmicSubmit} />
      
      {isLoading && (
        <div className="quantum-loader">
          <div className="pulsar-effect" />
          <span>Harmonizing Dimensions...</span>
        </div>
      )}

      {cosmicResponse && <HarmonyVisualizer data={cosmicResponse} />}
    </div>
  );
};

export default Index;
