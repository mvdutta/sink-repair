const applicationState = {
    plumbers: [],
    completions: [],
    requests: []
}



const API = "http://localhost:8088"//api endpoint
//whenever this function is run, the requests from the database will be stored in requests in applicationState so we have our own copy b/c applicationState is inside the front end.
export const fetchRequests = () => {//function makes a get request(retrieve the data). 
    return fetch(`${API}/requests`)//called a promise. A promise can either resolve or reject. function given to .then() only runs if the promise is resolved/fulfilled
        .then(response => response.json())//After the data comes back, its going to convert (parse) the data into an ordinary JS array b/c data was stored in json. 
        .then(
            (serviceRequests) => {//making a new property for the applicationState object called requests and storing the array that we received in this property (called serviceRequests). Now we have access to the external data.
                // Store the external state in application state
                console.log(serviceRequests)
                applicationState.requests = serviceRequests
            }
        )
}

export const getRequests = () => {//getter function to get the data from applicationState
    return applicationState.requests.map((request) => ({ ...request}))
}