const PubSub = require('../helpers/pub_sub.js');

const DisplayView = function(){

}

DisplayView.prototype.bindEvents = function(){
  PubSub.subscribe('InstrumentFamily:instrument-found', (event) =>{
  this.render(event.detail);
  })
}

DisplayView.prototype.render = function(instrument){
  const instrumentDiv = document.querySelector('#instrument-info');
  const infoInstrumentName = document.createElement('p');
  infoInstrumentName.textContent = `${instrument.name}:`
  const inforInstrumentDescription = document.createElement('p');
  inforInstrumentDescription.textContent = `${instrument.description}`
  instrumentDiv.innerHTML = '';
  instrumentDiv.appendChild(infoInstrumentName);
  instrumentDiv.appendChild(inforInstrumentDescription);
};


module.exports = DisplayView;
