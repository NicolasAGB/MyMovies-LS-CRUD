import Storage from "./storage.js";
import List from "./list.js";

export default function () {

    // Object instance
    const storage = new Storage();
    const list = new List();

    //get DOM element
    let content = document.querySelector("#content");
    let search_btn = document.querySelector("#search");

    //event
    search_btn.onclick = (e) => { //can use an arrow function because I dont use THIS
        e.preventDefault();

        // text in search input
        let wanted = document.querySelector("#search_field").value;
        // get updated movie data
        let pelis_stored = storage.getData();
        //filter
        const new_pelis = pelis_stored.filter(peli => {
            return peli.title.toLowerCase().includes(wanted.toLowerCase());
        })
        //show movies filtered list
        if (wanted.length < 2) {
            alert("You should write something...")
        } else {
            if (new_pelis.length <= 0) {
                console.log("No match found..");
                content.innerHTML = "<div> <h2> No hay concidencias </h2> </div>"
            } else {
                list.show(new_pelis);
            }
        }



        return false;
    }

}