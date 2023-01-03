// Go to get our data in .JSON //
fetch("./data/moovies.json")

// When fullfiled launch function that parse our data in .JS //
    .then(function (response){
        return response.json()
    })

    // Linking our data to HTML document //
    // Writing style and getting wanted data from our .JS document below //
    .then(function(filmData){
        document.getElementById("movie").innerHTML = `
        <header class="my-4"></header>
        <div class="d-flex container-fluid align-items-center justify-content-center text-center bg-warning my-2">
        <img src="data:image/jpeg;base64,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" height=5% width=7%>
           <h1 class="display-3 text-center p-4 mb-3"> <strong>Projet Mini Allo-Ciné! </strong></h1>
        </div>
        ${filmData.map(function(film){
          return `
          <div class="container-fluid">
            <div class="row align-items-start">
              <div class="col col-lg-3 col-md-1 col-sm-1">
              </div>
            <div class="col col-lg-6 col-md-10 col-sm-10 my-2">
              <div class="card p-3">
                 <div class="card-body bg-light">
                   <div class="row">
                     <div class="col col-lg-4 col-md-3 col-sm-4 p-0">
                        <img class="film-photo" width=75% src="${film.Poster}">
                     </div>
                     <div class="col col-lg-8 col-md-9 col-sm-8">
                        <h4 class="card-title">"${film.Title}" ${film.Year}</h4>
                           <p class="card-text text-secondary">
                              ${film.Plot}
                          </p>
                          <p class="text-secondary">
                          Actors: ${film.Actors}
                          </p>
                     <div class="col d-flex">
                     <i class="fa-sharp py-3 fa-solid fa-star text-warning"></i>
                          <p class="text-secondary mx-1 py-3">${film.imdbRating}</p>
                          <div class="row">
                          <div class="col-lg-12 col-md-12 col-sm-8">
                          ${
                            film.Images.map((image, index)=>{
                              if(index < 3){
                                return ` 
                                <img class="film-photo ms-4 mt-1" src="${image}" height=85% width=20%>
                                `
                              }
                            }).join("")
  
                          }
                          </div>
                          </div>
                     </div>
                     <a href="${film.Trailer}" target="_blank">
                          <button type="button" class="btn btn-warning mt-3">
                          Trailer
                          </button>
                          </a>
                  </div>
              </div>
        </div>
                 </div>
              </div>
            </div>
          <div class="col col-lg-3 col-md-1 col-sm-1">
            </div>
            </div>
      </div>
          </div>
        
          `
        }).join("")}
        ` 
    });

    let element = document.querySelector(".back-to-top")

    // adding ScrolltoToTop function //
element.addEventListener("click", function() {
  window.scrollTo({top: 0,})
})

window.addEventListener("scroll", function() {
  if (window.scrollY === 0) {
    element.classList.remove("active");
  } else {
    element.classList.add("active");
  }
})


  
  
  
  