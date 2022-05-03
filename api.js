// let pkm_arr = []

const axios = require('axios')

// let getPkm = () => {

//   return axios.get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
//   .then((response) => {
//     // pkm_arr.push(response.results.name);
//     // console.log(response.data.results[0]);
//     return response.data.results
//   })
//   // .then((data) => {
//     //   pkm_arr.push(data.results.name)
//     // })
//     .catch((error) => console.log(error));
// }

// getPkm().then(data => {
//   for (let pkm of data) {
//     // console.log(pkm.name);
//     pkm_arr.push(pkm.name)
//   }
//   test(pkm_arr);
// })

// let test = (arr) => {
//   const fs = require('fs');
//   for (let pkm of arr) {
//     axios.get(`https://pokeapi.co/api/v2/pokemon/${pkm}`).then((response) => {
//       // console.log(response.data);
//       try {
//         fs.writeFileSync("pkm.json", JSON.stringify(response.data), { flag: "a+" });
//         //file written successfully
//       } catch (err) {
//         console.error(err);
//       }
//     })
//   }
// }

const fs = require("fs");

fs.readFile("pkm.json", function (error, content) {
  var data = JSON.parse(content);
  console.log(data.forms.name);
});
