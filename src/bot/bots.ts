import uciWorker from "./worker";

const bots = {
  'op12no2/lozza (l:1,d:10)': uciWorker('./lozza.js', [
    'setoption name Skill Level value 1',
    'go depth 10',
  ]),
  'op12no2/lozza (l:20,d:10)': uciWorker('./lozza.js', [
    'setoption name Skill Level value 20',
    'go depth 10',
  ]),
  'op12no2/lozza (l:20,t:1s)': uciWorker('./lozza.js', [
    'setoption name Skill Level value 20',
    'go movetime 1000',
  ]),
};

export default bots