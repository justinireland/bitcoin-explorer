
const handleErrors = (res) => {
  if(!res.ok) throw Error(res.statusText);
  return res
}

const fetchData = (endpoint, params = '') => {
  // console.log(`fetching: ${endpoint}?${params}`)
  return fetch(`${endpoint}?${params}`)
    .then(handleErrors)
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err))
}

export default fetchData
