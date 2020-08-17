class Park {

  static all = []

  constructor({id, name, location, state_id}) {
    this.id = id
    this.name = name
    this.location = location
    this.stateId = state_id

    this.main = document.createElement('div')
    this.main.id = `park-${this.id}`

    Park.all.push(this)
  }

  renderLI() {
    return `<li>NP: ${this.name} - Location: ${this.location}</li>`
  }

  // static submitCreateParkForm = (e) => {
  //   e.preventDefault()
  //   const formValues = {}
  //   const parkForm = document.getElementById('park-form')
  //   parkForm.querySelectorAll('input').forEach(function(input){
  //     input.name !== "submit" && (formValues[`${input.name}`] = input.value)
  //   })
  //   ParkAdapter.createPark(formValues)
  //   .then(park => {
  //     const list = document.getElementById('park-container')
  //     park.renderLI()
  //     list.appendChild(park.main)
  //     // state.main.focus()
  //   })
  // }
  static submitCreateParkForm = (e) => {
    e.preventDefault()
    const stateId = e.target.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.value
    const parkName = e.target.firstElementChild.nextElementSibling.value 
    const parkLocation = e.target.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.value 
    ParkAdapter.createPark(parkName, parkLocation, stateId)
  }
}