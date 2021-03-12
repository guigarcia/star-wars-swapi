const axios = require('axios')
const swapiUrl = require('../../credentials/swapi.json').apiUrl
const peopleUrl = swapiUrl+"people/?search="

async function getPeople(request, response) {
    const searchTerm = request.body.name
    const url = `${peopleUrl}${searchTerm}&format=json`

    const peoples =  await axios
    .get(url)
    .then(({ data }) => {
        response.status(200).json({ data })
    })
    .catch(({ err }) => {
        response.status(400).json({ err })
    })

    return peoples
}

export default getPeople