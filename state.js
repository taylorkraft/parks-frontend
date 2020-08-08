class State {

  constructor(id, name, flower) {
    this.id = id
    this.name = name
    this.flower = flower

    this.main = document.createElement('div')
    this.main.id = `state-${this.id}`
    this.info = document.createElement('div')
    this.info.id = `state-${this.id}-info`
    this.parks = document.createElement('div')
    this.parks.id = `state=${this.id}-parks`
    this.edit = document.createElement('button')
    this.edit.innerText = "Edit State Info"
    this.main.append(this.info, this.parks, this.edit)
  }

  renderInfo() {
    this.info.innerHTML = 
    `
    <p>State: <span>${this.name}</span></p>
    <p>Flower: <span>${this.flower}</span><p>
    `
  }
}