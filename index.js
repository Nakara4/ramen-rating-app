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
