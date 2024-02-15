import { AppState } from "../AppState.js";
import { presentService } from "../services/PresentService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawPresents() {
    const presents = AppState.presents
    let htmlString = ''
    presents.forEach(present => htmlString += present.PresentHTMLTemplate)
    setHTML('presentCards', htmlString)
    console.log(htmlString);
}



export class PresentController {


    constructor() {
        AppState.on('presents', _drawPresents)
        AppState.on('account', this.getPresents)

    }

    async getPresents() {
        try {
            await presentService.getPresents()
            Pop.success('The Presents are Here!')

        } catch (error) {
            Pop.error(error)
            console.log(error);

        }
    }

    async openPresent(presentId) {
        try {
            await presentService.openPresent(presentId)

        } catch (error) {
            Pop.error(error)
            console.log(error);

        }
    }
}