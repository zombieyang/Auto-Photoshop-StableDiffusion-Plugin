import { SDApi } from "./entry";

const api = new SDApi("http://sdhalft4.djzombie.club");

(async function() {
    console.log(await api.loras());
})();