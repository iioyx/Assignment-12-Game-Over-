import { UI } from "./UI.js";

const header = document.querySelector("header");
const nav = document.querySelector("nav");

export class Games {
  constructor() {
    this.links = document.querySelectorAll(".nav-link");
    this.newUI = new UI();
    this.getCategory();
    this.getApi("mmorpg");
  }

  async getApi(category = "mmorpg") {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "9dc24ac970msh268d498100e2e38p10f795jsn0837d2a686b3",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      this.newUI.displaygames(result);
      this.showdetails(result);
    } catch (error) {
      console.error(error);
    }
  }

  getCategory() {
    for (let i = 0; i < this.links.length; i++) {
      this.links[i].addEventListener("click", (e) => {
        this.getApi(this.links[i].textContent.toLowerCase());
        document.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
      });
    }
  }

  showdetails(result) {
    const cards = document.querySelectorAll(".item");
    cards.forEach((card) => {
      card.addEventListener("click", (e) => {
        const id = e.currentTarget.getAttribute("id");
        const game = result.find((game) => game.id == id);
        if (game) {
          nav.classList.add("d-none");
          header.classList.add("d-none");
          this.newUI.displaydetails(game);

          document.getElementById("icon").addEventListener("click", () => {
            nav.classList.remove("d-none");
            header.classList.remove("d-none");
            this.newUI.displaygames(result);
            this.showdetails(result);
          });
        }
      });
    });
  }
}
