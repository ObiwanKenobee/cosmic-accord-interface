
export interface CosmicData {
  protector: string;
  relic: string;
  phase: string;
  harmonyLevel: number;
}

export interface Protector {
  name: string;
  domain: 'Entropy' | 'Symbiosis' | 'Resonance';
  powerLevel: number;
}

export interface Relic {
  name: string;
  effect: string;
  activationCost: number;
}

export interface Phase {
  title: string;
  status: 'active' | 'completed' | 'pending';
  timeline: string;
}
