ParkAdapter.fetchAndCreateParks()
  .then(StateAdapter.fetchAndCreateStates)
  .then(State.renderStates)
  
  document.getElementById('state-form')
  .addEventListener('submit', State.submitCreateStateForm)
