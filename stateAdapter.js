class StateAdapter {

  static baseURL = "http://127.0.0.1:3000/states"

  static fetchAndCreateStates() {
    return fetch(StateAdapter.baseURL)
    //fetch all states
    .then((resp) => resp.json())
    //jsonify backend obj response
    .then(function(stateArray) {
      stateArray.forEach(function(state) {
        new State(state)
        //iterate over array of states
        //create new js instance/obj of state
      })
    })
  }
  //destructure attributes rather than passing in state instance
  static editState({id, name}) {
    return fetch(`${StateAdapter.baseURL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "appliction/json"
      },
      body: JSON.stringify({
        state: {
          name
          //destructuring - key of obj has a variable with same name
        }
      })
    })
  }

  static createState({name}) {
    return fetch(`${StateAdapter.baseURL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "appliction/json"
      },
      body: JSON.stringify({
        state: {
          name
          //destructuring - key of obj has a variable with same name
        }
      })
    })
    .then(resp => resp.json())
    .then(state => {
      return new State(state)
    })
  }
}