class ParkAdapter {

  static baseURL = "http://127.0.0.1:3000/parks"

  //using static is the same as writing ParkAdapter.fetchAndCreateParks()
  static fetchAndCreateParks() {
    return fetch(ParkAdapter.baseURL)
    //fetch all parks
    .then(resp => resp.json())
    //jsonify backend obj response
    .then(function(allParks) {
      allParks.forEach(function(park) {
        new Park(park)
        //iterate over array of parks
        //create new js instance/obj of park
      })
    })
  }

  static createPark(name, location, stateId) {
    return fetch(`${ParkAdapter.baseURL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "appliction/json"
      },
      body: JSON.stringify({
        park: {
          name,
          location,
          state_id: stateId
        }
      })
    })
    .then(resp => resp.json())
    .then(park => {
      let parkContainer = document.querySelector('#state-container').querySelector(`#state-${stateId}-parks`)
      let parkLI = document.createElement('li')
      parkLI.innerHTML = `NP: ${park.name} - Location: ${park.location}`
      parkContainer.appendChild(parkLI)
      //append new park to the DOM
    })
  }

  // static editPark(id, name, location) {
  //   return fetch(`${ParkAdapter.baseURL}/${id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "appliction/json"
  //     },
  //     body: JSON.stringify({
  //       park: {
  //         name,
  //         location
  //       }
  //     })
  //   })
  // }
}