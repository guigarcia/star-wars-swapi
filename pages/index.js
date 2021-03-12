import React, {useState } from 'react';

const swapi = {
    peoples: require('../services/handle-peoples.js')
}

function Home() {

   const [people, setPeople] = useState([])
   const [loading, setLoading] = useState(false)


   async function onSearch() {
        setLoading(true)
        const searchTerm = document.getElementById('searchName').value;
        const response = await swapi.peoples(searchTerm)
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
                            people.map(peaple => (
                                <li>{peaple.name}</li>
                            ))
                        }
                    </ul>
                )}
            </div>
            
            {loading == true && (
                <div>
                    <img src="https://cdn.dribbble.com/users/601803/screenshots/2037073/bb8.gif" id="loading" />
                </div>
            )}
        </div>
    )  
}

export default Home