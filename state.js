class State {

  static all = []
  static stateContainer = document.getElementById('state-container')

  constructor({id, name, parks}) {
    this.id = id
    this.name = name
    this.parks = parks

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

    this.edit.addEventListener('click', this.renderEditStateForm)
    this.form.addEventListener('submit', this.submitEditStateForm)
    
    State.all.push(this)
  }

  renderInfo() {
    this.info.innerHTML = 
    `
    <p>State: <span>${this.name}</span></p>
    `
  }

  allParks() {
    return Park.all.filter(park => park.stateId == this.id)
  }

  renderParks() {
    this.parks.innerHTML = this.allParks().map(park => park.renderLI()).join("")
    //renderLI from park.js - sets inner html of li
    const selectState = document.querySelector('#state')

    selectState.innerHTML = ''

    State.all.forEach(function(s) {
      selectState.innerHTML += 
      `
      <option value=${s.id}>${s.name}</option>
      `
    })
  }

  //arrow function because it is used as callback - binds keyword this without having to manually bind
  renderEditStateForm = () => {
    this.edit.disabled = true
    //allows the button to be clicked (enabled)
    this.info.innerHTML = ''
    this.info.appendChild(this.form)
    this.form.innerHTML = `
      <label>Name:</label>
      <input type="text" name="name" value="${this.name}">
      <br/>
      <input id="edit-state" type="submit" value="Submit">
    `
  }

  //not static - references a state instance, not entire class
  submitEditStateForm = (e) => {
    e.preventDefault()
    this.form.querySelectorAll('input').forEach(function(input){
      input.name !== "submit" && (this[`${input.name}`] = input.value)
    }, this)
    this.renderInfo()
    //sets inner html input
    StateAdapter.editState(this)
  }

  //we want to render all states in our states array to user
  static renderStates() {
    State.all.forEach((state) => {
      state.renderInfo()
      state.renderParks()
      State.stateContainer.appendChild(state.main)
    })
  }


  static submitCreateStateForm = (e) => {
    e.preventDefault()
    const formValues = {}
    const stateForm = document.getElementById('state-form')
    stateForm.querySelectorAll('input').forEach(function(input){
      input.name !== "submit" && (formValues[`${input.name}`] = input.value)
    })
    StateAdapter.createState(formValues)
    .then(state => {
      const list = document.getElementById('state-container')
      state.renderInfo()
      list.appendChild(state.main)
      // state.main.focus()
    })
  }
}
