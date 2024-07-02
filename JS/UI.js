export class UI {
  constructor(data) {
    this.data = data;
  }

  displaygames(result) {
    let box = ``;
    for (let i = 0; i < result.length; i++) {
      box += `
        <div id="${
          result[i].id
        }" class="item col-lg-3 col-md-4 col-sm-12 px-2 mb-3">
            <div class="card bg-transparent text-white px-2 ">
                <img class="mt-3 rounded" src="${
                  result[i].thumbnail
                }" alt="Pic">
                <div class="mt-3 d-flex justify-content-between align-items-center">
                    <h5 class="card-title">${result[i].title}</h5>
                    <p class="price">Free</p>
                </div>
                <div class="desc m-0 text-center mb-3">${
                  result[i].short_description.length > 50
                    ? result[i].short_description.slice(0, 55) + "..."
                    : result[i].short_description
                }</div>
                <div class="card-footer px-0 d-flex justify-content-between">
                    <p class="card-footer-item mb-0">MMORGP</p>
                    <p class="card-footer-item mb-0">${result[i].platform}</p>
                </div>
            </div>
        </div>
      `;
    }
    document.getElementById("data").innerHTML = box;
  }

  displaydetails(game) {
    let box = `
    
      <div class= "container vh-100 ">
      <div class="h-100 row gy-1">
      
      <div class= "d-flex justify-content-between align-items-center text-white">
        <p class = "fs-3">Game Details :</p>
        <i id="icon" class="icon fa-solid fa-circle-xmark fs-3 text-white"></i>
    </div>

      <div class="col-md-4 m-0">
      <img src="${game.thumbnail}" class="w-100" alt="image details" />
    </div>
    <div class="col-md-7 text-white m-0" >
      <h3>Title : ${game.title}</h3>
      <p>Category : <span class="badge text-bg-info"> ${game.genre}</span> </p>
      <p>Platform : <span class="badge text-bg-info"> ${game.platform}</span> </p>
      <p class="small">${game.short_description}</p>
      <a class="btn btn-outline-warning" target="_blank" href="${game.game_url}">Show Game</a>
   </div>
      </div>
      </div>
      `;
    document.getElementById("data").innerHTML = box;
  }
}
