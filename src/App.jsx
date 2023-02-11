
import { createSignal, For } from 'solid-js';

// var fuelPrice = 1.729;
// var drivenFuelkm = 950;
// var Fuel_l = 75;
// var CNG_Price = 1.996;
// var drivenCNGkm = 360;
// var CNG_kg = 16;
// var dieselPrice = 1.699;
// var drivenDieselkm = 950;
// var diesel_l = 60;
// var LPG_Price = 0.730;
// var drivenLPGkm = 600;
// var LPG_l = 70;

// var Fuel_l_km;
// var CNG_kg_km;

// Fuel_l_km = FuelAquired / (drivenFuelkm / 100);
// CNG_kg_km = CNGkg / (drivenCNGkm / 100);
// 
const [fuels, setFuel] = createSignal([
  {title: 'Fuel', price: 1.729, driven: 950, aquired: 75},
  {title: 'CNG', price: 1.996, driven: 360, aquired: 16},
  {title: 'Diesel', price: 1.699, driven: 950, aquired: 60},
  {title: 'LPG', price: 0.730, driven: 600, aquired: 70},
]);

let yearly_km = 20000;

function App() {
  function consumption() {

  }
  function hundred_km() {
    
  }
  function yearlyCost() {
    
  }
  function comparison() {
    
  }

  return (
    <div class="top-0 left-0 h-screen w-screen bg-stone-900 p-4">

      <div class="mt-5 ml-5">
        <input value={yearly_km} type="text" class="p-1.0 rounded-lg bg-yellow-200 w-40" />
        <p class="text-light-50 font-thin ml-2">km per year</p>
      </div>

      <div class="float-left">
        
        <For each={fuels()}>{(fuel, i) =>
          <div class="float-left ml-5 mt-4">
            <h4 class="font-bold ml-2 text-yellow-200">{fuel.title}</h4>
            <h1 class="text-light-50 ml-2 font-thin">Price eur/l or eur/kg:</h1>
            <input value={fuel.price} type="text" class="p-1.0 rounded-lg m-1 bg-yellow-200 w-40" />
            <h1 class="text-light-50 font-thin ml-2">Driven km:</h1>
            <input value={fuel.driven} type="text" class="p-1.0 rounded-lg m-1 bg-yellow-200 w-40" />
            <h1 class="text-light-50 font-thin ml-2">Refilled l or kg:</h1>
            <input value={fuel.aquired} type="text" class="p-1.0 rounded-lg m-1 bg-yellow-200 w-40" /> 
            <p class="text-light-50 font-thin ml-2">consumption: {consumption}</p>
            <p class="text-light-50 font-thin ml-2">100km price: {hundred_km}</p>
            <p class="text-light-50 font-thin ml-2">Cost per year: {yearlyCost}</p>
            <p class="text-light-50 font-thin ml-2">{comparison}</p>
          </div>
        }
        </For>

      </div>
    </div>
  );
}

export default App;
