
// add to local storage
export const addToDb = id =>{

    let favoriteRecipe = getFavoriteId()

    const storedRecipe = localStorage.getItem('applied')
    if(storedRecipe){
        favoriteRecipe = JSON.parse(storedRecipe);
    }
    

    const quantity = favoriteRecipe[id]
    if(!quantity){
        favoriteRecipe[id] = 1 
    }

    localStorage.setItem('favorite', JSON.stringify(favoriteRecipe))
}


//get from local storage

export const getFavoriteId = ()=>{
    let favoriteRecipe = {}
    const storedRecipe = localStorage.getItem('favorite')
    if(storedRecipe){
        favoriteRecipe = JSON.parse(storedRecipe);
    }
    return favoriteRecipe;
}

