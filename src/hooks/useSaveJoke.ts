import { useState } from 'react';
import { Joke } from '../types';
import axios from 'axios';

interface UseSaveJokeResult {
  isLoading: boolean;
  error: Error | null;
  saveJoke: (joke: Joke) => Promise<void>;
}

export function useSaveJoke(): UseSaveJokeResult {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  async function saveJoke(joke: Joke) {
    setIsLoading(true);

    try {
      let response;

      if (joke.id) {
        response = await axios.put(`https://retoolapi.dev/zu9TVE/jokes/${joke.id}`, joke);
      } else {
        response = await axios.post('https://retoolapi.dev/zu9TVE/jokes', joke);
      }

    } catch (err: any ) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    error,
    saveJoke,
  };
}
