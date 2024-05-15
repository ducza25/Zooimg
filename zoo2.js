const container = document.querySelector("#container");
const targetImg = document.querySelector("#targetImg");
const kepek = ["panda.png", "egypupu-teve.png", "szurikata.png"];

for (const kep of kepek) {
  const img = document.createElement("img");
  img.src = "allatok/" + kep;
  img.width = "200";
  console.log("kep:" + img.src);
  container.appendChild(img);
  img.addEventListener("click", function () {
    console.log(this.src);
    targetImg.src = this.src;
  });
}
