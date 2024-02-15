import { AppState } from "../AppState.js"
import { PresentController } from "../controllers/PresentController.js"
import { Present } from "../models/Present.js"
import { api } from "./AxiosService.js"

class PresentService {


    async openPresent(presentId) {
        const indexOfPresent = AppState.presents.findIndex(present => present.id == presentId)
        const specificPresent = AppState.presents[indexOfPresent]
        const openedState = { opened: true }
        let response = await api.put(`api/gifts/${presentId}`, openedState)
        // console.log(response, specificPresent);
        const newPresent = new Present(response.data)
        console.log(newPresent);
        AppState.presents.splice(indexOfPresent, 1, newPresent)

    }

    async getPresents() {
        const response = await api.get('api/gifts')
        console.log(response.data);
        const newPresents = response.data.map(presentPjoj => new Present(presentPjoj))
        // const newPresents = response.data(presentPjoj => new Present(presentPjoj))
        AppState.presents = newPresents
    }
}



export const presentService = new PresentService()