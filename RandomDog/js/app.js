const URL = "https://random.dog/woof.json";
const btnGenerate = document.getElementById('btnGenerate'); 
const main = document.querySelector('main');




const createDogRan = () =>  {
    fetch(URL)
    .then(response => response.json())
    .then( data => {

    const divContent = document.createElement('div');
    divContent.classList.add('card');
    const imgDoggy = document.createElement('img');
    imgDoggy.classList.add('img-card');
    imgDoggy.src = data.url;

    divContent.appendChild(imgDoggy);
    main.appendChild(divContent);
    console.log(data);}
)}
btnGenerate.addEventListener('click', createDogRan);


/////////////////////////////////////////////////
// EJEMPLO EL EJERCICIO ANTERIOR
// const GetCharter = () => {
//     fetch(URL)
//     .then(response => response.json())
//     .then(data =>{
//         imgsCharter.setAttribute = ('src', data[0].fileSizeBytes);
//     console.log(imgsCharter);

//     })
// }



