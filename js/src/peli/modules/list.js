import deleteOfList from "./delete.js"
import edit from "./edit.js"
export default class List {

    constructor() {
        //DOM element select
        this.content = document.querySelector("#content");
    }

    peliTemplate(peli) {
        return `<article class="item" id ="peli-${peli.id}">
        <h3 class="title">${peli.title}</h3>
        <p class="description">${peli.description}</p>

        <button class="edit" data-id="${peli.id}">Edit</button>
        <button class="delete" data-id="${peli.id}">Delete</button>
        </article>`;
    }
    addToList(peli, list_pelis) {

        //template article movie
        let peli_html = this.peliTemplate(peli);

        //add movie to dom
        this.content.innerHTML += peli.peli_html;

        //show
        this.show(list_pelis);
    }

    show(pelis) {

        //clear the DOM
        this.content.innerHTML = "";

        // get allthe obj from LocalStorage
        pelis.forEach(peli => {
            this.content.innerHTML += this.peliTemplate(peli);
        });

        //this function is for delete btns
        deleteOfList();
        // funtion edit btn call
        edit();

    }
}