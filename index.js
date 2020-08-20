StateAdapter.fetchAndCreateStates()
  .then(ParkAdapter.fetchAndCreateParks)
  .then(State.renderStates)
  
  document.getElementById('state-form')
  .addEventListener('submit', State.submitCreateStateForm)

  document.getElementById('park-form')
  .addEventListener('submit', Park.submitCreateParkForm)