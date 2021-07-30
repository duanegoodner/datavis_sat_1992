function groupByRegion(stateData) {
  return d3.group(stateData, (d) => d.region);
}

async function getStateData() {
  const stateData = await d3.csv('../data/educData.csv');
  return stateData;
}

function getRegionData(stateData) {
  return d3.rollup(
    stateData,
    function (v) {
      return {
        spendPerStudent:
          d3.sum(v, (d) => d.totalEnr * d.spendPerStudent) /
          d3.sum(v, (d) => d.totalEnr),
        pctSAT:
          d3.sum(v, (d) => d.pctSAT * d.numGrads) /
          d3.sum(v, (d) => d.numGrads),
        numGrads: d3.sum(v, (d) => d.numGrads),
        netSAT:
          d3.sum(v, (d) => d.numGrads * d.pctSAT * 0.01 * d.netSAT) /
          d3.sum(v, (d) => d.numGrads * d.pctSAT * 0.01),
      };
    },
    (d) => d.region
  );
}

export async function getData() {
  const stateData = await getStateData();
  const regionData = await getRegionData(stateData);

  return {stateData: stateData, regionData: regionData}
}


