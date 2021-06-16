//Creo una función para recoger los datos del Api y la exporto

const getApiData =()=>{
    return (
        fetch('//rickandmortyapi.com/documentation/#get-all-characters')
    .then(response => response.json())
    .then(data=>{
        //Limpio los datos recogidos
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

//('//raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json')