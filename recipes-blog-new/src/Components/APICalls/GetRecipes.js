import React, { useState, useEffect } from 'react'
import DisplayRecipes from '../UI/DisplayRecipes';

const GetRecipes = ({ input }) => {
    const [recipes, setRecipes] = useState([]);


    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=f46cf03ebc8143f48bce9f23bdf675f6&query=${input}`);
                //console.log(response.url)

                const data = await response.json();
                const item = data.results
                setRecipes(item)
            } catch (e) {
                alert("There has been an error. Please try again")
                return
            }
        }

        fetchData();
    }, [input])


    return (
        <div>
            {recipes.map(i => <DisplayRecipes key={i.id} title={i.title} image={i.image} />)}
        </div>
    )
}

export default GetRecipes