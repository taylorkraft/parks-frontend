class Park {

  static all = []

  constructor(id, name, location, state_id) {
    this.id = id
    this.name = name
    this.location = location
    this.stateId = state_id

    Park.all.push(this)
  }

  renderLI() {
    return `<li>${this.name} - ${this.location}</li>`
  }
}