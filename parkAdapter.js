class ParkAdapter {

  static baseURL = "http://127.0.0.1:3000/parks"

  static fetchAndCreateParks() {
    return fetch(ParkAdaper.baseURL)
    .then(resp => resp.json())
    .then(function(allParks) {
      return allParks.forEach(function(park) {
        return new Park(park)
      })
    })
  }
}