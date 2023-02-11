const btn = document.querySelector('.btn');
const result = document.querySelector('.result');
btn.addEventListener('click', () => {
    fetchJokes();
})
const fetchJokes = async = () => {
    result.textContent = 'Loading ...';
    try {
        const response = await fetch(url, {
            
        })
    }
}