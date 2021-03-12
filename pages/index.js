import React, {useState } from 'react';

const swapi = {
    peoples: require('./services/handle-peoples.js')
}

function Home() {

   const [people, setPeople] = useState([])

   async function onSearch() {
        const searchTerm = document.getElementById('searchName').value;
        const response = await swapi.peoples(searchTerm)
        setPeople(response)
    }

    return (
        <div>
            <input type="text" placeholder='Name' id="searchName" />
            <button onClick={onSearch}>Search</button>

            <div>
                {people.length > 0 && (
                    <ul>
                        {
                            people.map(peaple => (
                                <li>{peaple.name}</li>
                            ))
                        }
                    </ul>
                )}
            </div>
        </div>
    )  
}

export default Home