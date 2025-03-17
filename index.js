const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "./images/shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "kojiro Ramen", restaurant: "Menya", image: "./images/kojiro.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "naruto Ramen", restaurant: "Ramen-ya", image: "./images/naruto.jpg" },
    { id: 4, name: "nirvana Ramen", restaurant: "Ramen-ya", image: "./images/nirvana.jpg" },
    { id: 5, name: "gyukotsyu Ramen", restaurant: "Ramen-ya", image: "./images/gyukotsyu.jpg" },
 ];
 const ramens = [
   { src: './Images/gyukotsu.jpg', alt: 'gyukotsu ramen' },
   { src: './Images/kojiro.jpg', alt: 'kojiro ramen' },
   { src: './Images/naruto.jpg', alt: 'naruto ramen' },
   { src: './Images/nirvana.jpg', alt: 'nirvana ramen' },
   { src: './Images/shoyu.jpg', alt: 'shoyu ramen' }
];

const ramenMenu = document.getElementById('ramen-menu');

ramens.forEach(ramen => {
   const img = document.createElement('img');
   img.src = ramen.src;
   img.alt = ramen.alt;
   ramenMenu.appendChild(img);
});
