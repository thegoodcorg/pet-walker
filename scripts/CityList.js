import { getWalker } from "./database.js"

const walkers = getWalker()


export const CityList = () => {
    let citiesHTML = "<ol>"

    for (const currentWalker of walkers) {
        citiesHTML += `<li>${currentWalker.city}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}

