const jokeBtn = document.getElementById('joke-btn');
const jokeDisplay = document.querySelector('.joke-display p');

jokeBtn.addEventListener('click', async () => {
    jokeDisplay.textContent = 'Yükleniyor...';
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();
        jokeDisplay.textContent = data.value;
    } catch (error) {
        jokeDisplay.textContent = 'Bir hata oluştu. Lütfen tekrar deneyin.';
    }
});

