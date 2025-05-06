
import React from 'react';
import { Relic } from '../types/cosmic';

interface RelicCardProps {
  relic: Relic;
}

const RelicCard: React.FC<RelicCardProps> = ({ relic }) => {
  return (
    <div className="relic-card">
      <h3 className="relic-name">{relic.name}</h3>
      <p className="relic-effect">{relic.effect}</p>
      <div className="relic-cost">
        <span className="relic-cost-label">Activation Cost:</span>
        <span className="relic-cost-value">{relic.activationCost}</span>
      </div>
    </div>
  );
};

export default RelicCard;
