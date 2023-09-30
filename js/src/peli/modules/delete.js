import Storage from "./storage.js";
import List from "./list.js";

export default function () { // ya que va a ser una sola funcionalidad, no hago una clase.

    // obj instance
    const storage = new Storage();
    const list = new List();

    // available movie data

    let pelis_stored = storage.getData();
    let pelis_viewed = document.querySelectorAll("#content .item");

    // array iteration
    pelis_viewed.forEach(peli => {
        //btn capture
        let delete_btn = peli.querySelector('.delete');
        //event application
        delete_btn.onclick = function () { //cannot use THIS in an arrow function
            //get the id of the movie
            const peli_id = this.getAttribute('data-id');
            //filter
            const new_pelis_stored = pelis_stored.filter((peli) => peli.id !== parseInt(peli_id));

            //LocalStorage update
            storage.save(new_pelis_stored);
            //Updated list array show
            list.show(new_pelis_stored);
        }

    })
}