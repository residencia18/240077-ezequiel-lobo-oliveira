// script.js

// Função para fazer requisições usando Promises
function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

// Função para preencher o quadro de notícias educacionais (item1) com dados do IBGE
async function fillEducationalNews() {
  try {
    const newsElement = document.getElementById('item2');
    const newsApiUrl = 'https://servicodados.ibge.gov.br/api/v1/pesquisas/{pesquisa}/indicadores/{posicao}';

    const response = await fetch(newsApiUrl);
    const data = await response.json();

    if (data.articles && data.articles.length > 0) {
      newsElement.querySelector('h1').textContent = data.articles[0].title;
      newsElement.querySelector('h2').textContent = data.articles[0].source.name;
      newsElement.querySelector('p').textContent = data.articles[0].description;
    } else {
      console.error('Dados de notícias educacionais incompletos:', data);
    }
  } catch (error) {
    console.error('Erro ao obter notícias educacionais:', error);
  }
}

// Função para preencher o quadro de notícias do item2
async function fillNewsItem2() {
  try {
    const newsElement = document.getElementById('item2');
    const newsApiUrl = 'https://servicodados.ibge.gov.br/api/v1/pesquisas/{pesquisa}/indicadores/{posicao}';

    const response = await fetch(newsApiUrl);
    const data = await response.json();

    if (data.articles && data.articles.length > 1) {
      newsElement.querySelector('h1').textContent = data.articles[1].title;
      newsElement.querySelector('p').textContent = data.articles[1].description;
    } else {
      console.error('Dados de notícias do item2 incompletos:', data);
    }
  } catch (error) {
    console.error('Erro ao obter notícias do item2:', error);
  }
}

// Função para preencher o quadro de serviços com a previsão do tempo
async function fillWeather() {
  try {
    const weatherElement = document.getElementById('item4');
    const weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Ilheus&appid=6622a494d2100953d18fbb4e5c0cd4ad';

    const data = await fetchData(weatherApiUrl);

    console.log('Dados do tempo:', data);

    if (data.main && data.weather && data.weather.length > 0) {
      weatherElement.querySelector('h3').textContent = 'Previsão do Tempo';
      weatherElement.querySelector('p').textContent = `Temperatura: ${data.main.temp}°C, Condição: ${data.weather[0].description}`;
    } else {
      console.error('Dados do tempo incompletos:', data);
    }
  } catch (error) {
    console.error('Erro ao obter dados do tempo:', error);
  }
}

// Função para preencher o quadro de resultados com imagens de cachorros
async function fillDogImages() {
  try {
    const dogElement = document.getElementById('item5');
    const dogApiUrl = 'https://dog.ceo/api/breeds/image/random';

    const data = await fetchData(dogApiUrl);

    if (data.status === 'success') {
      dogElement.querySelector('h3').textContent = 'ARTIGO: Educação e Cachorros';
      dogElement.innerHTML += `<img src="${data.message}" alt="Cachorro fofo" width="100%" height="200">`;
    } else {
      console.error('Erro ao obter imagens de cachorros:', data);
    }
  } catch (error) {
    console.error('Erro ao obter imagens de cachorros:', error);
  }
}

// Função para preencher o quadro de notícias educacionais com piadas
async function fillJokesItem1() {
  try {
    const jokesElement = document.getElementById('item1');
    const jokeApiUrl = 'https://v2.jokeapi.dev/joke/Any';

    const response = await fetch(jokeApiUrl);
    const data = await response.json();

    if (data.joke) {
      jokesElement.querySelector('h5').textContent = 'ENTRETENIMENTO';
      
      jokesElement.querySelector('p').textContent = data.joke;
    } else {
      console.error('Dados de piadas incompletos:', data);
    }
  } catch (error) {
    console.error('Erro ao obter piadas:', error);
  }
}
fillJokesItem1();
// Chame as funções na ordem desejada
fillEducationalNews();
fillNewsItem2();
fillWeather();
fillDogImages();

