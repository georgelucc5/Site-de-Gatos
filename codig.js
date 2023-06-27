const BASE_URL = 'https://api.thecatapi.com/v1/images/search/'
const botaoCat = document.getElementById('change-cat');
const imagCat = document.getElementById('cat')

const getCats = async() => {

    try {
      const data = await fetch(BASE_URL);
      const json = await data.json();

      return json[0].url
    }
    catch(e) {
      console.log(e.menssage);
    }

};

const loadImag = async() => {
    imagCat.src = await getCats();
}

botaoCat.addEventListener('click', loadImag);

loadImag();