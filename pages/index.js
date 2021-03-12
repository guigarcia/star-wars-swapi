import React, {useState } from 'react';

const swapi = {
    peoples: require('../services/handle-peoples.js'),
    image: require('../services/handle-image.js')
}

function Home() {
   const [people, setPeople] = useState([])
   const [loading, setLoading] = useState(false)

   async function onSearch() {
        setLoading(true)
        const searchTerm = document.getElementById('searchName').value;
        const response = await swapi.peoples(searchTerm)

        for (let i = 0; i < response.length; i++) {
           const personImage = await swapi.image(response[i].name)
           response[i].image = personImage
        }

        setPeople(response)
        setLoading(false)
    }

    return (
        <div>
            <input type="text" placeholder='Name' id="searchName" />
            <button onClick={onSearch}>Search</button>

            <div>
                {people.length > 0 && !loading && (
                    <ul>
                        {
                            people.map(people => (
                                <li>
                                    <strong>{people.name}</strong>
                                    <br></br>
                                    <img src={people.image} width='200'></img>
                                </li>
                            ))
                        }
                    </ul>
                )}
            </div>
            
            {loading && (
                <div>
                    <img src="https://cdn.dribbble.com/users/601803/screenshots/2037073/bb8.gif" id="loading" />
                </div>
            )}
        </div>
    )  
}

export default Home