export async function runApp() {

  const plotModule = await import("./plotUtils.js");
  const dataModule = await import("./dataUtils.js");

  const allData = await dataModule.getData();
  console.log(allData);
  console.log((Array.from(allData.regionData.keys())));

  const plotFunctions = buildPlotFunctions(allPlots);

  document.getElementById("button1").addEventListener("click", plotFunctions[0]);
  document.getElementById("button2").addEventListener("click", plotFunctions[1]);
  document.getElementById("button3").addEventListener("click", plotFunctions[2]);
  document.getElementById("regionState").onchange = toggleRegState

  var plotIndex = 0;
  plotFunctions[plotIndex]();

  function setPlotIndex(value) {
      plotIndex = value;
  }

  function buildPlotFunctions(plotDescriptors) {
    var plotFunctions = Array(allPlots.length);

    plotDescriptors.forEach((element, index) => {
      plotFunctions[index] = function () {
        setPlotIndex(index);
        plotModule.standardPlot({
          ...allData,
          ...{ settings: element },
        }, getRegStateVal());
      };
    });
    return plotFunctions;
  }

  function toggleRegState () {
      plotFunctions[plotIndex]();
  }
}

function getRegStateVal() {
  return Boolean(parseInt(document.getElementById("regionState").value));
}