var i;
//Daily Trivia
var daily = ["In 1975, the National Academy of Sciences estimated that ocean-based sources, such as cargo ships and cruise liners had dumped 14 billion pounds of garbage into the ocean."
  , "Over 1 million seabirds and 100,000 sea mammals are killed by pollution every year."
  , "People who live in places with high levels of air pollutants have a 20% higher risk of death from lung cancer than people who live in less-polluted areas."
  , "Pollution is one of the biggest global killers, affecting over 100 million people. That’s comparable to global diseases like malaria and HIV."
  , "The Mississippi River carries an estimated 1.5 million metric tons of nitrogen pollution into the Gulf of Mexico each year, creating a “dead zone” in the Gulf each summer about the size of New Jersey."
  , "Approximately 40% of the lakes in America are too polluted for fishing, aquatic life, or swimming."
  , "Recycling and composting prevented 85 million tons of material away from being disposed of in 2010, up from 18 million tons in 1980."];
var date = new Date();
var day = date.getDay();
if (day == 0) {
  document.getElementById("daily").innerHTML = daily[0];
}
else if (day == 1) {
  document.getElementById("daily").innerHTML = daily[1];
}
else if (day == 2) {
  document.getElementById("daily").innerHTML = daily[2];
}
else if (day == 3) {
  document.getElementById("daily").innerHTML = daily[3];
}
else if (day == 4) {
  document.getElementById("daily").innerHTML = daily[4];
}
else if (day == 5) {
  document.getElementById("daily").innerHTML = daily[5];
}
else if (day == 6) {
  document.getElementById("daily").innerHTML = daily[6];
}
function setAttributes(el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}