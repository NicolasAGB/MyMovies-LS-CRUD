import Storage from "./storage.js";
import List from "./list.js";

export default function () {

    //create objects
    const storage = new Storage();
    const list = new List();
    //get the movies
    let pelis_stored = storage.getData();
    let pelis_viewed = document.querySelectorAll(".item");

    //showed movies iteration
    pelis_viewed.forEach(peli => {

        //edit button select
        let edit_btn = peli.querySelector(".edit");
        //event on clcick assignation
        edit_btn.onclick = function () {


            //id from the editing movie
            const peli_id = parseInt(this.getAttribute("data-id"));

            //old btn delete
            edit_btn.remove();
            peli.querySelector(".delete").remove();



            //innetHTML 
            let peli_edit_html = `
                <div class="edit_form">

                <h3 class="title">Editar pelicula </h3>
                <form>
                     <input type="text" class="edited_title" value=${peli.querySelector(".title").innerHTML}>
                     <textarea class="edited_description"> ${peli.querySelector(".description").innerHTML} </textarea>
                     <input type="submit" class="update" value="update..">

                </form>
                
                </div>
            `;
            peli.innerHTML += peli_edit_html;
            //update button select
            let update_btn = peli.querySelector(".update");
            //onclick event
            update_btn.onclick = function (e) {
                e.preventDefault();
                //find the movie index
                let index = pelis_stored.findIndex(peli => peli.id === peli_id);
                //save object
                pelis_stored[index] = {
                    id: peli_id,
                    title: peli.querySelector(".edited_title").value,
                    description: peli.querySelector(".edited_description").value
                };
                console.log(pelis_stored);
                //update localstorage
                storage.save(pelis_stored);
                //return
                list.show(pelis_stored);
                return false;
            }

        }


    });


}