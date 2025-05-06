
import React, { useState, useEffect } from 'react';
import { CosmicData, Relic } from '../types/cosmic';
import RelicCard from './RelicCard';

interface HarmonyVisualizerProps {
  data: CosmicData;
}

const HarmonyVisualizer: React.FC<HarmonyVisualizerProps> = ({ data }) => {
  const [harmonyWidth, setHarmonyWidth] = useState(0);

  // Sample relics based on the cosmic data
  const relics: Relic[] = [
    {
      name: data.relic,
      effect: "Enhances resonance between quantum fields and stabilizes temporal fluctuations.",
      activationCost: 45,
    },
    {
      name: "Void Echo",
      effect: "Channels cosmic energy through dimensional barriers, creating harmonic bridges between realities.",
      activationCost: 60,
    },
    {
      name: "Starlight Codex",
      effect: "Contains ancient stellar knowledge and maps of cosmic pathways between distant galaxies.",
      activationCost: 30,
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setHarmonyWidth(data.harmonyLevel);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [data.harmonyLevel]);

  return (
    <div className="harmony-visualizer">
      <h2 className="cosmic-section-title">Cosmic Resonance Analysis</h2>

      <div className="cosmic-grid">
        <div className="cosmic-stat">
          <div className="cosmic-stat-label">Celestial Protector</div>
          <div className="cosmic-stat-value">{data.protector}</div>
        </div>

        <div className="cosmic-stat">
          <div className="cosmic-stat-label">Prime Relic</div>
          <div className="cosmic-stat-value">{data.relic}</div>
        </div>

        <div className="cosmic-stat">
          <div className="cosmic-stat-label">Astral Phase</div>
          <div className="cosmic-stat-value">{data.phase}</div>
        </div>
      </div>

      <div className="harmony-level">
        <h3>Harmony Level</h3>
        <div className="harmony-meter">
          <div 
            className="harmony-fill" 
            style={{ width: `${harmonyWidth}%` }}
          ></div>
        </div>
        <div className="harmony-percentage">{data.harmonyLevel}% Synchronized</div>
      </div>

      <h2 className="cosmic-section-title">Discovered Relics</h2>
      <div className="cosmic-grid">
        {relics.map((relic, index) => (
          <RelicCard key={index} relic={relic} />
        ))}
      </div>
    </div>
  );
};

export default HarmonyVisualizer;
