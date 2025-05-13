var images = ["img1.png","img2.webp","img3.jpg","img4.jpg","img5.jpg"]

function changeImg(){

    let randomIndex = Math.floor(Math.random() * images.length)
    console.log(randomIndex);
    
    let img = document.getElementById("img")

    img.src = "https://tse1.mm.bing.net/th?id=OIP.KtDfV0WZAuNwSfIoWt1M7gHaDF&pid=Api&P=0&h=180"+images[randomIndex]

}