const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "./Images/shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Kojiro Ramen", restaurant: "Menya", image: "./Images/kojiro.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Naruto Ramen", restaurant: "Ramen-ya", image: "./Images/naruto.jpg" },
    { id: 4, name: "Nirvana Ramen", restaurant: "Ramen-ya", image: "./Images/nirvana.jpg" },
    { id: 5, name: "Gyukotsyu Ramen", restaurant: "Ramen-ya", image: "./Images/gyukotsu.jpg" },
];

const ramenMenu = document.getElementById('ramen-menu');
const ramenDetail = document.getElementById('ramen-detail');

ramens.forEach(ramen => {
    const img = document.createElement('img');
    img.src = ramen.image;
    img.alt = ramen.name;
    img.style.width = '100px';
    img.style.height = '100px';
    img.addEventListener('click', () => handleClick(ramen));
    ramenMenu.appendChild(img);
});

function handleClick(ramen) {
    ramenDetail.innerHTML = `
        <h2>${ramen.name}</h2>
        <p>Restaurant: ${ramen.restaurant}</p>
        ${ramen.rating ? `<p>Rating: ${ramen.rating}</p>` : ''}
        ${ramen.comment ? `<p>Comment: ${ramen.comment}</p>` : ''}
    `;
}

function addSubmitListener() {
   const form = document.getElementById('new-ramen-form');
   form.addEventListener('submit', (event) => {
       event.preventDefault();
       const newRamen = {
           id: ramens.length + 1,
           name: document.getElementById('name').value,
           restaurant: document.getElementById('restaurant').value,
           image: document.getElementById('image').value,
           rating: document.getElementById('rating').value,
           comment: document.getElementById('comment').value
       };
       ramens.push(newRamen);
       const img = document.createElement('img');
       img.src = newRamen.image;
       img.alt = newRamen.name;
       img.style.width = '200px';
       img.style.height = '200px';
       img.addEventListener('click', () => handleClick(newRamen));
       ramenMenu.appendChild(img);
       form.reset();
   });
}

function main() {
    displayRamens();
    addSubmitListener();
}

document.addEventListener('DOMContentLoaded', main);