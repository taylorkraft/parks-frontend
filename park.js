class Park {

  static all = []

  constructor(id, name, location, state_id) {
    this.id = id
    this.name = name
    this.location = location
    this.state_id = state_id

    Park.all.push(this)
  }
}