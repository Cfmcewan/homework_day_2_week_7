const instrumentFamilyData = require('./data/instrument_family_data.js');
const SelectView = require('./views/select_view.js');
const InstrumentFamilies = require('./models/instrument_families.js');
const DisplayView = require('./views/display_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

const displayView = new DisplayView();
  displayView.bindEvents('')

const selectElement = document.querySelector('#instrument-families');

const selectView = new SelectView(selectElement);
selectView.bindEvents();



const instrumentFamilies = new InstrumentFamilies(instrumentFamilyData);
instrumentFamilies.bindEvents();



});
