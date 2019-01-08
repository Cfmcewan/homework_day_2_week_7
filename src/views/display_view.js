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

  const infoInstrumentName = document.createElement('h2');
  infoInstrumentName.textContent = `${instrument.name}:`

  const inforInstrumentDescription = document.createElement('p');
  inforInstrumentDescription.textContent = `${instrument.description}`

  const instrumentsHeading = this.createHeading(instrument);
  const instrumentList = this.createInfoList(instrument);

  instrumentDiv.innerHTML = '';
  instrumentDiv.appendChild(infoInstrumentName);
  instrumentDiv.appendChild(inforInstrumentDescription);
  instrumentDiv.appendChild(instrumentsHeading);
  instrumentDiv.appendChild(instrumentList);
};

DisplayView.prototype.createHeading = function(instrument) {
  const heading = document.createElement('h3');
  heading.textContent = `Instruments for ${instrument.name}:`;
  return heading;
}

DisplayView.prototype.createInfoList = function(instrument) {
  const infoList = document.createElement('ul');

  const liInstrumentA = this.createLi(`${instrument.instruments[0]} `, infoList);
  const liInstrumentB = this.createLi(`${instrument.instruments[1]} `, infoList);
  const liInstrumentC = this.createLi(`${instrument.instruments[2]} `, infoList);
  const liInstrumentD = this.createLi(`${instrument.instruments[3]} `, infoList);
  const liInstrumentE = this.createLi(`${instrument.instruments[4]} `, infoList);
  return infoList;
};

DisplayView.prototype.createLi = function(textContent, ul) {
  const li = document.createElement('li');
  li.textContent = textContent;
  ul.appendChild(li);
};

module.exports = DisplayView;
