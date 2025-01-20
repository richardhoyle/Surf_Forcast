import { useState } from 'react';
    import './App.css';

    function calculateSurfScore(waveHeight, wavePeriod, windSpeed, windDirection, tide) {
      let score = 0;

      if (waveHeight >= 1.2 && waveHeight <= 2.5) {
        score += 2;
      } else if (waveHeight >= 0.8 && waveHeight < 1.2 || waveHeight > 2.5 && waveHeight <= 3.5) {
        score += 1;
      }

      if (wavePeriod >= 8) {
        score += 2;
      } else if (wavePeriod >= 6) {
        score += 1;
      }

      if (windSpeed <= 15) {
        score += 1;
      }

      if (windDirection === "offshore" || windDirection === "side-offshore") {
        score += 1;
      }

      if (tide === "mid") {
        score += 1;
      }

      return Math.min(score, 6); //Changed from  return score > 6 ? "6+" : score;
    }

    function App() {
        // ... rest of component code
    }
    export default App;
