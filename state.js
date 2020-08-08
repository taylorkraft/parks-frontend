class State {
  constructor(id, name, flower) {
    this.id = id
    this.name = name
    this.flower = flower
  }

  renderState() {
    let statesDiv = document.getElementById("states-container")

    statesDiv.innerHTML +=
    `
      
        <label>Name: </label><h4>${this.name}</h4>
        <label>State Flower: </label><h4>${this.flower}</h4>
      
    `
  }
}