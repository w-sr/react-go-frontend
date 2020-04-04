import axios from 'axios';

const backend_url = 'http://localhost:8080';

export const jokesSearch = async () => {
  return new Promise((resolve, reject) => {
    axios.get(backend_url + '/api/jokes')
      .then((res) => {
        resolve(res.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
};

export const jokeCreate = async (data) => {
  return new Promise((resolve, reject) => {
    axios.post(backend_url + '/api/joke', {
      id: 0,
      joke: data.joke.joke
    })
      .then((res) => {
        resolve(res.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
};

export const jokeUpdate = async (params) => {
  return new Promise((resolve, reject) => {
    axios.put(backend_url + '/api/joke', {
      id: params.id,
      joke: params.joke
    })
      .then((res) => {
        resolve(res.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
};

export const jokeDelete = async (id) => {
  return new Promise((resolve, reject) => {
    axios.delete(backend_url + '/api/joke', {
      data: { id, joke: ''}
    })
      .then((res) => {
        resolve(res.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
};
