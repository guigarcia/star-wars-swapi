async function searchPeople(searchTerm) {
    const resp = await fetch('/api/people', {
         method: 'POST',
         headers: {
             'Content-Type' : 'application/json'
         },
         body: JSON.stringify({
             name:searchTerm,
         })
     });
     
    const json = await resp.json()
    return json.data.results
 }

 module.exports = searchPeople