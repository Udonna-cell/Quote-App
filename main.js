let container = document.querySelector('main');
let button = document.querySelector('div.button button');
let load = document.querySelector('div.button div');

fetch("https://type.fit/api/quotes")
.then(response=>response.json())
.then(data=>{
  console.log(data);
  for(i=0; i <= 100; i++){
    container.innerHTML +=
      `<section class="quote">
          <p>${data[i].text}</p>
          <p class="creator">${data[i].author}</>
        </section>`;
  };
/* let noValue = data.filter(item=>item.author == null);
 console.log(noValue);*/
});

window.addEventListener("load",()=>{
});

function loadMore() {
  button.style.display = "none";
  load.style.display = "block";
}