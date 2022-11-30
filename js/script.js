
const animalGrid = document.querySelector('#animal-grid');
const rhymeBox = document.querySelector('#rhyme-box');


let fetchUrl = '';
let animalType = '';

const addAnimals = async (animalType) => {
  if (animalType===1)// dogs
  {
    await addDogs();
  } else if (animalType===2)// cats
  {
    await addCats();
  }
}

const grid = document.querySelector('#animal-grid');

const addDogs = async () => {
  grid.innerHTML = '';
  const number = document.querySelector('input#how-many').value;
  const res = await fetch(`https://dog.ceo/api/breeds/image/random/${number}`);
  const responseObject = await res.json();
  const urls = responseObject.message;

  for(let i = 0; i < urls.length; i++){
    const toInsertInGrid = `<div class="col p-0"><img src="${urls[i]}" alt="dog" /></div>`;
    grid.innerHTML += toInsertInGrid;
  }
  dogRhymes();
}

// DOGS ARE SUPERIOR and I'm deathly allergic to cats so no CATS promoted here haha

// const addCats = async () => {
//   grid.innerHTML = '';
//   const number = document.querySelector('input#how-many').value;
//   let res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${number}`); 
//   const images = await res.json();

//   for(let i = 0; i < images.length; i++){
//     const toInsertInGrid = `<div class="col p-0"><img src="${images[i].url}" alt="cat" /></div>`;
//     grid.innerHTML += toInsertInGrid;
//   }
//   await catRhymes();
// }

// const catRhymes = async () => {
//   rhymeBox.innerHTML = '';
//   const number = document.querySelector('input#how-many').value;
//   const res = await fetch(`https://api.datamuse.com/words?rel_rhy=cat&max=${number}`); 
//   const wordObjects = await res.json();
//   rhymeBox.innerHTML = `${number} words that rhyme with cat: `;

//   for(let i = 0; i < wordObjects.length; i++){
//     let toInsertInBox = wordObjects[i].word;
//     if(i < wordObjects.length - 1){
//       toInsertInBox += ", ";
//     }
//     rhymeBox.innerHTML += toInsertInBox;
//   }
// }

const dogRhymes = async () => {
  rhymeBox.innerHTML = '';
  const number = document.querySelector('input#how-many').value;
  const res = await fetch(`https://api.datamuse.com/words?rel_rhy=dog&max=${number}`); 
  const wordObjects = await res.json();
  rhymeBox.innerHTML = `${number} words that rhyme with dog: `;

  if(number == 0) {
    rhymeBox.innerHTML = "Zero rhyming words, but here's a dog anyway, enjoy! ";
  } else {
  for(let i = 0; i < wordObjects.length; i++){
    let toInsertInBox = wordObjects[i].word;
    if(i < wordObjects.length - 1){
      toInsertInBox += ", ";
    }
    rhymeBox.innerHTML += toInsertInBox;
  }
}
}

 document.querySelector('#more-dogs').addEventListener('click', () => {
  addAnimals(1)
 });
 document.querySelector('#more-cats').addEventListener('click', () => {
  addAnimals(2)
 });
