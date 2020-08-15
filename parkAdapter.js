class ParkAdapter {

  static baseURL = "http://127.0.0.1:3000/parks"

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

  static createPark({name, location}) {
    return fetch(`${ParkAdapter.baseURL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "appliction/json"
      },
      body: JSON.stringify({
        state: {
          name,
          location
          //destructuring - key of obj has a variable with same name
        }
      })
    })
    .then(resp => resp.json())
    .then(park => {
      return new Park(park)
    })
  }

  static editPark({id, name, location}) {
    return fetch(`${ParkAdapter.baseURL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "appliction/json"
      },
      body: JSON.stringify({
        state: {
          name,
          location
          //destructuring - key of obj has a variable with same name
        }
      })
    })
  }
}