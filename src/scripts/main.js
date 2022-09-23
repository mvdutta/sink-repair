import { SinkRepair } from "./SinkRepair.js"

import { fetchRequests } from "./dataAccess.js"


const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests().then(//running fetchRequests which returns a promise so need a .then(). Inside this .then(), telling it to run the function SinkRepair() and store the output of that function in mainContainer which is the DOM
        () => { 
            mainContainer.innerHTML = SinkRepair()
        }
    )
}

render()