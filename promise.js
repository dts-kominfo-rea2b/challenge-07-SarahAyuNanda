const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async value => {
  let [dataIXX, dataVGC] = await Promise.all([promiseTheaterIXX(), promiseTheaterVGC()])
    .then(res => res)
    .catch(err => console.log(err))

  let response = 0
  let allData = []
  if (Array.isArray(dataIXX) && Array.isArray(dataVGC)) {
    allData = [...dataIXX, ...dataVGC]
    response = allData.filter(item => item.hasil === value).length
  }
  return response
};

module.exports = {
  promiseOutput,
};
