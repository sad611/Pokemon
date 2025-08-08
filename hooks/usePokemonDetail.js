import { useState, useEffect } from 'react';

// Não é mais usado
export function usePokemonDetail(url) {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('HTTP error: error fetching data from API');
        }
        const pokemonJson = await response.json();
        setPokemon(pokemonJson);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  return { pokemon, loading, error };
}
