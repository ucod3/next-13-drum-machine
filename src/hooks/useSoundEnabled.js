// useSoundEnabled.js
'use client';
import React from 'react';

const SoundEnabledContext = React.createContext();

export function SoundEnabledProvider({ children }) {
  const [soundEnabled, setSoundEnabled] = React.useState(true);
  const toggleSound = () => setSoundEnabled((prev) => !prev);

  return (
    <SoundEnabledContext.Provider value={{ soundEnabled, toggleSound }}>
      {children}
    </SoundEnabledContext.Provider>
  );
}

export function useSoundEnabled() {
  const context = React.useContext(SoundEnabledContext);
  if (!context) {
    throw new Error(
      'useSoundEnabled must be used within a SoundEnabledProvider',
    );
  }
  return context;
}
