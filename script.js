const search = document.querySelector("button");
const zipcode = document.getElementById("zipcode");

search.addEventListener("click", () => {
  fetch("https://zipcloud.ibsnet.co.jp/api/search?zipcode=" + zipcode.value)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.results[0]);
    })
    .catch((error) => {
      console.log(error);
    });
});
