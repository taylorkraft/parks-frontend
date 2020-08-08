class StateAdapter {

  static baseURL = "http://127.0.0.1:3000/states"

  static fetchAndCreateStates() {
    return fetch(StateAdapter.baseURL)
    //fetch all states
    .then(resp => resp.json())
    //jsonify backend obj response
    .then(function(allStates) {
      return allStates.forEach(function(state) {
        return new State(state)
        //iterate over array of states
        //create new js instance/obj of state
      })
    })
  }
}