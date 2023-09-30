import Add from './modules/add.js';
import List from './modules/list.js';
import Storage from './modules/storage.js';
import Search from './modules/search.js';

export default class App {

    constructor() {
        this.add = new Add();
        this.list = new List();
        this.Storage = new Storage();
        
    }

    load() {
        //add movie
        this.add.movieSave();

        //get array from localstorage
        const pelis = this.Storage.getData();
        //list movie
        this.list.show(pelis);
        //search
        Search();
    }

}