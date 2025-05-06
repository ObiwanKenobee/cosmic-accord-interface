
import React, { useState } from 'react';

interface CelestialPromptProps {
  onSubmit: (prompt: string) => void;
}

const CelestialPrompt: React.FC<CelestialPromptProps> = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSubmit(input);
    }
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="cosmic-prompt-form">
      <div className="nebula-input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter cosmic query..."
          className="stellar-input"
        />
        <button type="submit" className="quantum-button">
          Initiate Convergence
        </button>
      </div>
    </form>
  );
};

export default CelestialPrompt;
