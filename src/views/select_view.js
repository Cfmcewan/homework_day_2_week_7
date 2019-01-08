const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element
};

SelectView.prototype.bindEvents = function(){
  PubSub.subscribe('InstrumentFamily:instrument-ready', (event) => {
    this.populate(event.detail);
  });

  this.element.addEventListener('change', (event) => {
    const selectedIndex = event.target.value;
    PubSub.publish('SelectView:instrument-selected', selectedIndex);
  })

}

SelectView.prototype.populate = function(instruments){

  instruments.forEach((instrument, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = instrument.name;
    this.element.appendChild(option);

  })


}
module.exports = SelectView;
