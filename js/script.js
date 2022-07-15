let apiKey = "cb717e5a8ace4d66a82493946b96ee56";
let country = "in";

// Using Fetch Api
function fetching() {
  fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&category=technology&apiKey=${apiKey}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let articles = data.articles;
      let accordionExample = document.getElementById("accordionExample");
      let newsContent = "";
      articles.forEach((element, index) => {
        let html = `<div class="card my-2 badge-info">
    <div class="card-header" id="headingOne">
              <h2 class="mb-0">
              <button class="btn btn-link btn-block text-left " type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                  ${element["title"]}
              </button>
              </h2>
    </div>

    <div id="collapse${index}" class="collapse " aria-labelledby="heading${index}" data-parent="#accordionExample">
      <div class="card-body">
      ${element["description"]} <a href=" ${element["url"]}"> Read More </a>
      </div>
    </div>
  </div>`;
        newsContent += html;
      });
      accordionExample.innerHTML = newsContent;
    });
}
fetching();

// Dark Mode For UI
let darkMode = document.getElementById("darkMode");
darkMode.addEventListener("click", () => {
  let NightMode = document.getElementById("nightMode");
  NightMode.classList.toggle("nightMode");
});
