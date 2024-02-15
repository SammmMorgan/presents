import { AppState } from "../AppState.js"
import { Present } from "../models/Present.js"
import { api } from "./AxiosService.js"

class PresentService {

    async getPresents() {
        const response = await api.get('api/gifts')
        console.log(response.data);
        const newPresents = response.data.map(presentPjoj => new Present(presentPjoj))
        // const newPresents = response.data(presentPjoj => new Present(presentPjoj))
        AppState.presents = newPresents
    }
}



export const presentService = new PresentService()