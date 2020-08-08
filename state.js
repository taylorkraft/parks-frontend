class State {

  static all = []
  static stateContainer = document.getElementById('state-container')

  constructor({id, name, flower}) {
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
    this.edit.innerText = "Edit State"
    this.main.append(this.info, this.parks, this.edit)

    this.form = document.createElement('form')

    State.all.push(this)
  }

  renderInfo() {
    this.info.innerHTML = 
    `
    <p>State: <span>${this.name}</span></p>
    <p>Flower: <span>${this.flower}</span><p>
    `
  }

  parksArray() {
    return Park.all.filter(park => park.stateId == this.id)
  }

  renderParks() {
    this.parks.innerHTML = this.parksArray()
  }

  renderEditStateForm = () => {
    this.edit.disabled = true
    console.log(this);
    this.info.innerHTML = ''
    this.info.appendChild(this.form)
    this.form.innerHTML = `
      <label>Name:</label>
      <input type="text" name="name" value="${this.name}">
      <br/>
      <label>Flower:</label>
      <input type="text" name="flower" value="${this.flower}">
      <br/>
      <input id="edit-state" type="submit" value="Submit">
    `
  }

  static renderStates() {
    State.all.forEach((state) => {
      state.renderInfo()
      state.renderParks()
      State.stateContainer.appendChild(state.main)
    })
  }
}