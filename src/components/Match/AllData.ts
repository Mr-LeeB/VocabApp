// import data from '../../utils/json/data1.json';

// export interface AllDataProps {
//   vocabL: string[][];
//   vocabR: string[][];
// }

// const AllData = () => {
//   type DataType = {
//     [key: string]: string;
//   };

//   const dataType: DataType = data;
//   const vocabData = Object.keys(data).map((key) => [key, dataType[key]]);

//   const vocabL = vocabData.map((vocab) => [vocab[0], vocab[0]]);
//   vocabData.sort(() => Math.random() - 0.5);
//   const vocabR = vocabData.map((vocab) => [vocab[0], vocab[1]]);

//   const allData: AllDataProps = { vocabL, vocabR };

//   return allData;
// };

// export default AllData;

import data from '../../utils/json/data1.json';

export interface AllDataProps {
  vocabL: string[][];
  vocabR: string[][];
}

type DataType = {
  [key: string]: string;
};

const dataType: DataType = data;
const vocabData = Object.keys(data).map((key) => [key, dataType[key]]);

const vocabL = vocabData.map((vocab) => [vocab[0], vocab[0]]);
vocabData.sort(() => Math.random() - 0.5);
const vocabR = vocabData.map((vocab) => [vocab[0], vocab[1]]);

const AllData: AllDataProps = { vocabL, vocabR };

export default AllData;
