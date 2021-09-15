const loadImage = () => {
  fetch("https://api.pexels.com/v1/search?query=your-query", {
    method: "GET",
    headers: {
      Authorization: "563492ad6f91700001000001aaaca724bb564b948d088b4b473f9bb6",
    },
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })

    .then((body) => {
      // DOM MANIPULATION
      console.log(body);

      const row = document.querySelector(".jumbotron .row");

      const array = body.photos;
      for (let i = 0; i < array.length; i++) {
        const obj = array[i];

        const col = document.createElement("div");
        col.className = "col-4";

        col.innerHTML = `
                
      <div class="card">
                
                   <img src="${obj.src.medium}" class="card-img-top" alt="...">
                  
                  <div class="card-body">
                      <h5 class="card-title">${obj.id}</h5>
                      <p class= "card-text"> ${obj.photographer}</p>
                      
                  </div>
              </div>
                `;

        row.appendChild(col);
      }
    })
    .catch((err) => {
      console.error(err);
    });
};

window.onload = () => {
  fetch("https://api.pexels.com/v1/search?query=your-secondary-query", {
    method: "GET",
    headers: {
      Authorization: "563492ad6f91700001000001aaaca724bb564b948d088b4b473f9bb6",
    },
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })

    .then((body) => {
      // DOM MANIPULATION
      console.log(body);

      const row = document.querySelector(".album .row .card");

      const array = body.photos;
      for (let i = 0; i < array.length; i++) {
        const obj = array[i];

        const col = document.createElement("div");
        col.className = "col";

        col.innerHTML = `
                
      
                
                   <img src="${obj.src.medium}" class="card-img-top" alt="...">
                  
                  <div class="card-body">
                      <h5 class="card-title">${obj.id}</h5>
                      <p class= "card-text"> ${obj.photographer}</p>
                      
                  </div>
              
                `;

        row.appendChild(col);
      }
    })
    .catch((err) => {
      console.error(err);
    });
};
