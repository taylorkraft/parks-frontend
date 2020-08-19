StateAdapter.fetchAndCreateStates()
  .then(ParkAdapter.fetchAndCreateParks)
  .then(State.renderStates)
  
  document.getElementById('state-form')
  .addEventListener('submit', State.submitCreateStateForm)

  document.getElementById('park-form')
  .addEventListener('submit', Park.submitCreateParkForm)

// function scoped
//   var
// block scoped
//   let
//   const

// function Name() {

// }
// var thing

// const func = function() {
//   var thing
//   if (stuff) {
//     var thing
//   }
// }

// const arrow = (things) => things.do