import React, { createContext, useState, useEffect, useContext } from 'react';

const PokemonDataContext = createContext();

import LoadingScreen from '../screens/LoadingScreen'

export default function PokemonProvider({children}) {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const initialPokemonLimit = 151;
        const totalPokemonLimit = 1302;

        const listRes = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=${totalPokemonLimit}`
        );
        
        if (!listRes.ok) {
          throw new Error(`HTTP error: ${listRes.status}`);
        }
        
        const listData = await listRes.json();

        const fetchPokemonWithRetry = async (url, retries = 3) => {
          for (let i = 0; i < retries; i++) {
            try {
              const response = await fetch(url);
              
              if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
              }
              
              return await response.json();
            } catch (error) {
              console.warn(`Tentativa ${ i + 1 } falhou par a url (${url}):`, error.message);
              if (i === retries - 1) {
                console.error(`Tentativa de fetch a url (${url}) falhou após ${retires} tentativas`);
                return null;
              }
              await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000));
            }
          }
        };

        const initialPokemonBatch = listData.results.slice(0, initialPokemonLimit);
        const initialPokemonPromises = initialPokemonBatch.map(pokemon => 
          fetchPokemonWithRetry(pokemon.url)
        );
        
        const initialPokemonResults = await Promise.all(initialPokemonPromises);
        const initialValidPokemon = initialPokemonResults.filter(result => result !== null);
        
        setPokemonList(initialValidPokemon);
        setIsLoading(false);
        
        if (listData.results.length > initialPokemonLimit) {
          setIsLoadingMore(true);
          
          const pokemonBatchSize = 20;
          
          for (let i = initialPokemonLimit; i < listData.results.length; i += pokemonBatchSize) {
            const pokemonBatch = listData.results.slice(i, i + pokemonBatchSize);
            const pokemonBatchPromises = pokemonBatch.map(pokemon => 
              fetchPokemonWithRetry(pokemon.url)
            );
            
            const pokemonBatchResults = await Promise.all(pokemonBatchPromises);
            const validPokemon = pokemonBatchResults.filter(result => result !== null);
            
            if (validPokemon.length > 0) {
              setPokemonList(prevPokemonList => [...prevPokemonList, ...validPokemon]);
            }
            
            if (i + pokemonBatchSize < listData.results.length) {
              await new Promise(resolve => setTimeout(resolve, 100));
            }
          }
          
          setIsLoadingMore(false);
        }

      } catch (error) {
        console.error('Failed to fetch Pokemon data: ', error);
        setIsLoading(false);
        setIsLoadingMore(false);
      }
    };

    fetchInitialData();
  }, []);

    if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <PokemonDataContext.Provider value={{ pokemonList, isLoadingMore }}>
      {children}
    </PokemonDataContext.Provider>
  );
}

export const usePokemonList = () => {
  return useContext(PokemonDataContext)
}

