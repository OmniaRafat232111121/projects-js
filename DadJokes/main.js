<<<<<<< HEAD
const url = 'https://icanhazdadjoke.com/';
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');
btn.addEventListener('click', () => {
    fetchJokes();
})
const fetchJokes =  async () => {
    result.textContent = 'Loading ...';
    try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
       },
    });
    const data = await response.json();
    result.textContent = data.joke;
    }
    catch (error) {
        console.log(error.message);
        result.textContent = "There is error..."
    }
};
fetchJokes();
=======
const url = 'https://icanhazdadjoke.com/';
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');
btn.addEventListener('click', () => {
    fetchJokes();
})
const fetchJokes =  async () => {
    result.textContent = 'Loading ...';
    try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
       },
    });
    const data = await response.json();
    result.textContent = data.joke;
    }
    catch (error) {
        console.log(error.message);
        result.textContent = "There is error..."
    }
};
fetchJokes();
>>>>>>> d8386487acc694cdd3ca41752ffa54818bb79d81
