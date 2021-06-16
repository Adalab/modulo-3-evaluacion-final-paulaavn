const getApiData =()=>{
    return (
        fetch('//raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json')
    .then(response => response.json())
    .then(data=>{
        const cleanData = data.results.map(user=>{
            return{
                id: user.id,
                image: user.image,
                name: user.name,
                specie: user.species,
                planet: user.origin.name,
                episodes:user.episode.length,
                status: user.status,
            };
        });
        return cleanData;
    })
    );
};

export default getApiData;