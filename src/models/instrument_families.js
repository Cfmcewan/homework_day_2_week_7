const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function(){
  PubSub.publish('InstrumentFamily:instrument-ready', this.data);
  console.log('published on instrument-ready', this.data);

  PubSub.subscribe('SelectView:instrument-selected', (event)=>{
    const index = event.detail;
    const foundInstrument = this.findInstrument(index);
    PubSub.publish('InstrumentFamily:instrument-found', foundInstrument);
    console.log(foundInstrument);
  })
}

InstrumentFamilies.prototype.findInstrument = function(index){
  return this.data[index];
}

module.exports = InstrumentFamilies;
