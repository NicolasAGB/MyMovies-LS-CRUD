import Storage from "./storage.js";
import List from "./list.js";

export default class Add {

    constructor() {
        //object
        this.Storage = new Storage();
        this.list = new List();


        //dom element catch

        this.titleField = document.querySelector("#title");
        this.descriptionField = document.querySelector("#description");
        this.save_btn = document.querySelector("#save");
    }

    movieSave() {
        this.save_btn.onclick = (e) => {
            e.preventDefault();

            // get updated data

            let pelis = this.Storage.getData();
            let lastId = this.Storage.getLastId();



            //data to save
            let title = this.titleField.value;
            let description = this.descriptionField.value;

            //validator
            if (title != "" || description != "") {
                //create object to save
                let peli = {
                    id: lastId++,
                    title,
                    description,
                }

                //add to the array
                pelis.push(peli);

                //save it on localstorage
                this.Storage.save(pelis);


                //update list
                this.list.show(pelis);

            } else {
                alert("Wrong data!");
            }



            return false;
        }
    }
}