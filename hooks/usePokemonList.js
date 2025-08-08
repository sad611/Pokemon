import { useState, useEffect } from 'react';


// Não é mais usado
export function usePokemonList() {
  const [pokemons, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
        if (!response.ok) {
          throw new Error('HTTP error: error fetching data from API');
        }
        const pokemonJson = await response.json();
        setPokemon(pokemonJson.results);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  return { pokemons, loading, error };
}
