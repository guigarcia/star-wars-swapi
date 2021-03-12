const axios = require("axios").default;

async function handleImage(term)
{
    var options = {
        method: 'GET',
        url: 'https://bing-image-search1.p.rapidapi.com/images/search',
        params: {q: `${term}`},
        headers: {
            "x-rapidapi-key": "d0725b82e7msh91c9b7f0ada6bbcp183265jsn72e26c48986a",
          'x-rapidapi-host': 'bing-image-search1.p.rapidapi.com'
        }
      };

    const imas = await axios.request(options)
    return  imas.data.value[0].contentUrl.toString()
}

module.exports = handleImage