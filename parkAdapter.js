class ParkAdapter {

  static baseURL = "http://127.0.0.1:3000/parks"

  static fetchAndCreateParks() {
    return fetch(ParkAdaper.baseURL)
    //fetch all parks
    .then(resp => resp.json())
    //jsonify backend obj response
    .then(function(allParks) {
      return allParks.forEach(function(park) {
        return new Park(park)
        //iterate over array of parks
        //create new js instance/obj of park
      })
    })
  }
}