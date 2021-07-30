export function standardPlot(plotInfo, regional) {
  d3.selectAll("svg > *").remove();

  const { stateData, regionData, settings } = plotInfo;

  var data;
  if (regional) {
    data = regionData;
  } else data = stateData;

  var [x, y] = setScales(settings);
  initializeTooltip();

  const mouseover = function (event, d) {
    var message;
    if (regional) {
      message = regionNames[d[0]] + ": " + d[1].numGrads * 100 + " H.S. grads";
    } else {
      message = d.state + ": " + d.numGrads * 100 + " H.S. grads";
    }
    d3.select("#tooltip")
      .transition()
      .duration(200)
      .style("background-color", "lightgrey")
      .style("color", "darkblue")
      .style("opacity", 0.6)
      .style("left", event.pageX + "px")
      .style("top", event.pageY + "px")
      .text(message);
  };

  d3.select("svg")
    .append("g")
    .attr("transform", "translate(50,20)")
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", function (d) {
      if (regional) {
        return x(d[1][settings.xKey]);
      } else {
        return x(d[settings.xKey]);
      }
    })
    .attr("cy", function (d) {
      if (regional) {
        return y(d[1][settings.yKey]);
      } else {
        return y(d[settings.yKey]);
      }
    })
    .attr("r", function (d) {
      if (regional) {
        return 2 + Math.sqrt(d[1][settings.sizeKey]) / 2;
      } else {
        return 2 + Math.sqrt(d[settings.sizeKey]) / 2;
      }
    })
    .style("stroke", function (d) {
      if (regional) {
        return dataColors[d[0]];
      } else {
        return dataColors[d.region];
      }
    })
    .style("stroke-width", 2)
    .on("mouseover", mouseover)
    .on("mouseout", function () {
      d3.select("#tooltip").style("opacity", 0);
    });

  d3.select("svg")
    .selectAll("legendSymbols")
    .data(Array.from(regionData.keys()))
    .enter()
    .append("circle")
    .attr("cx", 600)
    .attr("cy", function (d, i) {
      return 30 + i * 25;
    })
    .attr("r", 7)
    .style("stroke", function (d) {
      return dataColors[d];
    })
    .style("stroke-width", 2);

  d3.select("svg")
    .selectAll("legendLabels")
    .data(Array.from(regionData.keys()))
    .enter()
    .append("text")
    .attr("x", 620)
    .attr("y", function (d, i) {
      return 30 + i * 25;
    })
    .style("stroke", function (d) {
      return dataColors[d];
    })
    .attr("font-family", "Arial, Helvetica, sans-serif")
    .text(function (d) {
      return regionNames[d];
    })
    .attr("text-anchor", "left")
    .style("alignment-baseline", "middle");

  d3.select("svg")
    .selectAll("numGraduateSymbols")
    .data([200, 1000, 2000])
    .enter()
    .append("circle")
    .attr("cx", 600)
    .attr("cy", function (d, i) {
      return (320 + i * 50 + 0.2 * i) ^ 2;
    })
    .attr("r", function (d) {
      return 2 + Math.sqrt(d) / 2;
    });

  d3.select("svg")
    .selectAll("numGraduateLabels")
    .data(["20,000", "100,000", "200,000"])
    .enter()
    .append("text")
    .attr("x", 640)
    .attr("y", function (d, i) {
      return (320 + i * 50 + 0.2 * i) ^ 2;
    })
    .text(function (d) {
      return d;
    })
    .attr("text-anchor", "left")
    .style("alignment-baseline", "middle");

  d3.select("svg")
    .append("text")
    .attr("x", 640)
    .attr("y", 300)
    .style("text-anchor", "middle")
    .style("font-weight", "bold")
    .style("font-size", 18)
    .text("# HS grads");

  d3.select("svg")
    .append("g")
    .attr("transform", "translate(50,420)")
    .call(d3.axisBottom(x))
    .append("text")
    .attr("fill", "black")
    .attr("transform", "translate(240,40)")
    .text(settings.xLabel)
    .style("font-size", 18);

  d3.select("svg")
    .append("text")
    .attr("x", 330)
    .attr("y", 20)
    .style("text-anchor", "middle")
    .style("font-weight", "bold")
    .style("font-size", 20)
    .text(settings.title);

  d3.select("svg")
    .append("g")
    .attr("transform", "translate(50,20)")
    .call(d3.axisLeft(y))
    .append("text")
    .attr("fill", "black")
    .attr("transform", "rotate(-90), translate(-85,-37)")
    .text(settings.yLabel)
    .style("font-size", 18);

  const makeCommonAnnotations = d3
    .annotation()
    .annotations(settings.commonAnnotations);

  const makeStateAnnotations = d3
    .annotation()
    .annotations(settings.stateAnnotations);

  const makeRegionalAnnotations = d3
    .annotation()
    .annotations(settings.regionalAnnotations);

  d3.select("svg").append("g").call(makeCommonAnnotations);

  if (regional) {
    d3.select("svg").append("g").call(makeRegionalAnnotations);
  } else {
    d3.select("svg").append("g").call(makeStateAnnotations);
  }
}

function setScales(settings) {
  var x = d3
    .scaleLinear()
    .domain([settings.xMin, settings.xMax])
    .range([0, settings.xSize]);
  var y = d3
    .scaleLinear()
    .domain([settings.yMin, settings.yMax])
    .range([settings.ySize, 0]);

  return [x, y];
}

function initializeTooltip() {
  d3.select("body")
    .append("div")
    .attr("id", "tooltip")
    .attr("style", "position: absolute; opacity: 0;");
}
