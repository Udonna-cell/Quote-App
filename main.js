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
      <span>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z"/></svg>
      </span>
          <p>${data[index].text}</p>
          <p class="creator">${data[index].author}</p>
        </section>`;
        index++;
  };
  load.style.display = "none";
  button.style.display = "inline";
  loops += 100;
}

function loadMore() {
  button.style.display = "none";
  load.style.display = "block";
  console.log(result(url));
}