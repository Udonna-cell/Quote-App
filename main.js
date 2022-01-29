let container = document.querySelector('main');
let button = document.querySelector('div.button button');
let load = document.querySelector('div.button div');
let index = 0;
let loops = 100;
let url = "https://type.fit/api/quotes";
async function result(link) {
let response = await fetch(link);
let data = await response.json();

  console.log(data);
  while(index <= loops){
    container.innerHTML +=
      `<section class="quote">
          <p>${data[index].text}</p>
          <p class="creator">${data[index].author}</p>
        </section>`;
        index++;
  };
  loops += 100;
}

function loadMore() {
  button.style.display = "none";
  load.style.display = "block";
  console.log(result(url));
}