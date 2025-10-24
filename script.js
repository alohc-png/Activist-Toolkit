/* .js files add interaction to your website */
var factList = [
  "Coastal ecosystems harbor a wide range of plant and animal species, many of which are unique to the region.",
  "Coastal ecosystems support fisheries, tourism, and recreation industries, which are vital to the local economy.",
  "Mangroves, coral reefs, and coastal vegetation act as natural buffers against storms and hurricanes, reducing the impact of waves and erosion.",
  "Mangroves and seagrass beds capture and store carbon dioxide, helping to mitigate climate change impacts.",
  "Coastal wetlands and mangroves filter pollutants and improve water quality, benefiting marine life and human health.",
  "Vegetation along coastlines helps stabilize sediments and prevent erosion, safeguarding infrastructure and property.",
  "Beaches, reefs, and mangrove forests provide spaces for recreation, diving, snorkeling, and eco-tourism activities.",
  ];

var fact = document.getElementById("fact");
var factButton = document.getElementById("factButton");
var count = 0;

if (factButton) {
  factButton.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count==factList.length) {
    count = 0;
  }
}