let image = document.querySelector("#image");
function getImage() {
  fetch("https://xkcd.now.sh/?comic=latest")
    .then((response) => response.json())
    .then((data) => {
      image.src = data.img;
      image.alt = data.alt;
      console.log(data);
    })
    .catch((error) => console.log(error));
}

getImage();
