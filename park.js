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

  static submitCreateParkForm = (e) => {
    let form = document.getElementById('park-form')
    e.preventDefault()
    const stateId = e.target.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.value
    const parkName = e.target.firstElementChild.nextElementSibling.value 
    const parkLocation = e.target.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.value
    ParkAdapter.createPark(parkName, parkLocation, stateId)
    form.reset()
  }
}