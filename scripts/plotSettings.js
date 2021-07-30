const regPctTakeVsSpend = {
  // data: regionData,
  xMin: 2,
  xMax: 10,
  xSize: 500,
  yMin: 0,
  yMax: 80,
  ySize: 400,
  xKey: "spendPerStudent",
  yKey: "pctSAT",
  sizeKey: "numGrads",
  xLabel: "Average spending per student ($k / student)",
  yLabel: "% of graduating seniors who took SAT",
  title: "% of SAT takers vs. Educational spending",
  regionalAnnotations: [
    {
      note: {
        label: "Mid-Atlantic",
        title: "Highest spending per student:",
      },
      x: 426,
      y: 111,
      dy: 20,
      dx: -20,
    },
    {
      note: {
        label: "East South Central",
        title: "Lowest spending per student: ",
      },
      x: 179,
      y: 373,
      dy: -10,
      dx: 250,
    },
  ],
  stateAnnotations: [
    {
      note: {
        title: "Highest spending per student: ",
        label: "New Jersey",
        
      },
      x: 498,
      y: 89,
      dy: 30,
      dx: -1,
    },
    {
      note: {
        title: "Lowest spending per student: ",
        label: "Utah",
      },
      x: 114,
      y: 385,
      dy: -30,
      dx: 280,
    },
  ],
  commonAnnotations: [
    {
      note: {
        label:
          "Higher spending correlates with a higher percentage of students taking the SAT",
        // title: "Annotation title",
      },
      x: 75,
      y: 40,
      dy: 0,
      dx: 0,
    },
  ],
};

const regScoreVsSpend = {
  // data: regionData,
  xMin: 2,
  xMax: 10,
  xSize: 500,
  yMin: 800,
  yMax: 1100,
  ySize: 400,
  xKey: "spendPerStudent",
  yKey: "netSAT",
  sizeKey: "numGrads",
  xLabel: "Average spending per student ($k / student)",
  yLabel: "Average SAT score",
  title: "Average SAT score vs. Educational spending",
  regionalAnnotations: [],
  stateAnnotations: [],
  commonAnnotations: [
    {
      note: {
        label:
          "As educational spending increases, SAT scores appear to decrease. What's going on? Hint: Look at the 'Average SAT vs. % test-takers' plot",
        // title: "Annotation title",
      },
      x: 430,
      y: 40,
      dy: 0,
      dx: 0,
    },
  ],
};

const regScoreVsPctTake = {
  // data: regionData,
  xMin: 0,
  xMax: 80,
  xSize: 500,
  yMin: 800,
  yMax: 1100,
  ySize: 400,
  xKey: "pctSAT",
  yKey: "netSAT",
  sizeKey: "numGrads",
  xLabel: "% of graduating seniors who took SAT",
  yLabel: "Average SAT score",
  title: "Average SAT score vs. % test takers",
  regionalAnnotations: [
    {
      note: {
        label: "West North Central",
        title: "Highest average SAT score:",
      },
      x: 111,
      y: 99,
      dy: 0,
      dx: 120,
    },
    {
      note: {
        label: "South Atlantic",
        title: "Lowest average SAT score:",
      },
      x: 340,
      y: 329,
      dy: 7,
      dx: -130,
    },
  ],
  stateAnnotations: [
    {
      note: {
        label: "Iowa",
        title: "Highest average SAT score:",
      },
      x: 91,
      y: 37,
      dy: 10,
      dx: 120,
    },
    {
      note: {
        label: "South Carolina",
        title: "Lowest average SAT score:",
      },
      x: 376,
      y: 375,
      dy: -10,
      dx: -200,
    },
  ],
  commonAnnotations: [
    {
      note: {
        label:
          "As the percentage test-takers increases, a broader range of students are being sampled, and the mean score decreases. ",
        // title: "Annotation title",
      },
      x: 400,
      y: 40,
      dy: 0,
      dx: 0,
    },
  ],
};

const allPlots = [regPctTakeVsSpend, regScoreVsSpend, regScoreVsPctTake];

const palette = [
  "#1f77b4",
  "#ff7f0e",
  "#2ca02c",
  "#d62728",
  "#9467bd",
  "#8c564b",
  "#e377c2",
  "#7f7f7f",
  "#bcbd22",
];

const dataColors = {
  ENC: palette[0],
  ESC: palette[1],
  MA: palette[2],
  MTN: palette[3],
  NE: palette[4],
  PAC: palette[5],
  SA: palette[6],
  WNC: palette[7],
  WSC: palette[8],
};

const regionNames = {
  ENC: "East North Central",
  ESC: "East South Central",
  MA: "Mid-Atlantic",
  MTN: "Mountain",
  NE: "New England",
  PAC: "Pacific",
  SA: "South Atlantic",
  WNC: "West North Central",
  WSC: "West South Central",
};
