import React, { useEffect, useState, Fragment } from 'react'
import { getAllPokemon, getPokemons } from './FetchData';
import Cards from '../UI/Card';
import { Button } from '@material-ui/core'
import BerryCards from '../UI/BerryCards';

const GetPokemon = () => {
    const [resourceType, setResourceType] = useState('pokemon');
    const [data, setData] = useState([]);
    const [nextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                let response = await getAllPokemon(`https://pokeapi.co/api/v2/${resourceType}`);
                setNextUrl(response.next)
                setPrevUrl(response.previous)
                setLoading(false)
                await loadingPokemon(response.results);
            }
            catch (e) {
                console.log(e);
                return null;
            }
        }
        fetchData();
    }, [resourceType])

    const next = async () => {
        setLoading(true)
        let nextData = await getAllPokemon(nextUrl)
        await loadingPokemon(nextData.results)
        setNextUrl(nextData.next)
        setPrevUrl(nextData.previous)
        setLoading(false)
    }


    const prev = async () => {
        if (!prevUrl) {
            return;
        } else {
            setLoading(true)
            let nextData = await getAllPokemon(prevUrl)
            await loadingPokemon(nextData.results)
            setNextUrl(nextData.next)
            setPrevUrl(nextData.previous)
            setLoading(false)
        }

    }

    const loadingPokemon = async (pokemonData) => {
        let _pokemon = await Promise.all(pokemonData.map(async pokemon => {
            let pokemonRecord = await getPokemons(pokemon.url);
            return pokemonRecord;
        }))

        setData(_pokemon)
    }

    return (
        <div>
            {loading ? <h1>Loading...</h1> : (
                <Fragment>
                    <div>
                        <Button color="primary" onClick={() => setResourceType('berry')}>Berries</Button>
                        <Button color="primary" onClick={() => setResourceType('pokemon')}>Pokemon</Button>
                    </div>

                    <div>
                        {!prevUrl ? <Button onClick={prev} variant="outlined" disabled>Prev</Button> :
                            <Button onClick={prev} variant="outlined" color="primary">Prev</Button>}
                        {!nextUrl ? <Button onClick={next} disabled variant="outlined">Next</Button> :
                            <Button onClick={next} color="primary" variant="outlined">Next</Button>}
                    </div>
                    {resourceType === 'pokemon' ? data && data.map((pokemon, i) => {
                        return (
                            <div key={i}>
                                <Cards key={i}
                                    pokemon={pokemon} />
                            </div>
                        )
                    }) : data && data.map((berry, i) => {
                        return (
                            <div key={i}>
                                <BerryCards key={i}
                                    berry={berry} />
                            </div>
                        )

                    })}
                </Fragment>
            )
            }

        </div >
    )
}

export default GetPokemon
