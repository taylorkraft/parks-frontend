class Park {

  static all = []

  constructor({id, name, location, state_id}) {
    this.id = id
    this.name = name
    this.location = location
    this.stateId = state_id

    Park.all.push(this)
  }

  renderLI() {
    return `<li>NP: ${this.name} - Location: ${this.location}</li>`
  }

  // static submitCreateStateForm = (e) => {
  //   e.preventDefault()
  //   const formValues = {}
  //   const parkForm = document.getElementById('park-form')
  //   parkForm.querySelectorAll('input').forEach(function(input){
  //     input.name !== "submit" && (formValues[`${input.name}`] = input.value)
  //   })
  //   ParkAdapter.createPark(formValues)
  //   .then(park => {
  //     const list = document.getElementById('park-container')
  //     park.renderInfo()
  //     list.appendChild(park.main)
  //     // state.main.focus()
  //   })
  // }
}