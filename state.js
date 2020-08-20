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
    this.parks.id = `state-${this.id}-parks`
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

    State.all.forEach(function(state) {
      selectState.innerHTML += 
      `
      <option id=${state.id}-option value=${state.id}>${state.name}</option>
      `
    })
    //option tag defines an element in a selection list
  }

  //arrow function because it is used as callback
  renderEditStateForm = () => {
    this.edit.disabled = true
    //allows the button to be clicked (enabled)
    this.info.innerHTML = ''
    this.info.appendChild(this.form)
    //info is empty before appending form
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
    const stateName = this.form.querySelector('input').value
    //selects first input, that's why this works
    this.name = stateName
    this.edit.disabled = false
    this.renderInfo()
    //renders name after edit
    StateAdapter.editState(this.id, this.name)
  }

  //we want to render all states in our states array to user
  static renderStates() {
    State.all.forEach(state => {
      state.renderInfo()
      state.renderParks()
      State.stateContainer.appendChild(state.main)
      //appends state instance to main div of state-container
    })
  }

  static renderSortedStates() {
    let stateContainer = document.getElementById('state-container')
    stateContainer.innerHTML = ''
    State.all.sort((a,b) => {
      if (a.name < b.name) {
        return -1
      }
      if (a.name > b.name) {
        return 1
      }
      else {
        return 0
      }}).forEach(state => {
        state.renderInfo()
        state.renderParks()
        State.stateContainer.appendChild(state.main)
      }) 
  }

  static submitCreateStateForm = (e) => {
    e.preventDefault()
    const formValues = {}
    //formValues is empty, we populate it below
    const stateForm = document.getElementById('state-form')
    const stateName = stateForm.querySelector('input').value
    formValues.name = stateName
    StateAdapter.createState(formValues)
    .then(state => {
      const list = document.getElementById('state-container')
      let addNewStateToList = document.querySelector('#state')
      let newStateOption = document.createElement('option')
      //option tag has a value, we set it here to equal the state's id
      newStateOption.value = state.id
      newStateOption.id = `${state.id}-option`
      newStateOption.innerText = state.name
      //user views name text in drop down, we don't want to display the id
      addNewStateToList.add(newStateOption)
      state.renderInfo()
      list.appendChild(state.main)
      stateForm.reset()
    })
  }
}