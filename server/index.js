const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const schema = require("./schema");
const AmountAdata = [
  { amt: 3284, pv: 8255, uv: 6500 },
  { amt: 5284, pv: 4255, uv: 7500 },
  { amt: 7284, pv: 2255, uv: 5500 },
  { amt: 4284, pv: 4255, uv: 2500 },
  { amt: 2284, pv: 1255, uv: 4500 },
  { amt: 1284, pv: 6255, uv: 1500 },
  { amt: 3284, pv: 9255, uv: 1500 },
  { amt: 8284, pv: 5255, uv: 4500 },
  { amt: 6284, pv: 4255, uv: 7500 },
  { amt: 6284, pv: 4255, uv: 1500 },
  { amt: 3284, pv: 1255, uv: 5500 },
  { amt: 6284, pv: 2255, uv: 4500 },
];
const AmountBdata = [
  { amt: 6284, pv: 1255, uv: 5500 },
  { amt: 1284, pv: 2255, uv: 4500 },
  { amt: 4284, pv: 1255, uv: 2500 },
  { amt: 7284, pv: 4255, uv: 2500 },
  { amt: 5284, pv: 1255, uv: 4500 },
  { amt: 1284, pv: 6255, uv: 1500 },
  { amt: 3284, pv: 9255, uv: 1500 },
  { amt: 8284, pv: 5255, uv: 4500 },
  { amt: 6284, pv: 4255, uv: 7500 },
  { amt: 6284, pv: 4255, uv: 1500 },
  { amt: 3284, pv: 1255, uv: 5500 },
  { amt: 6284, pv: 2255, uv: 4500 },
];
const AmountCdata = [
  { amt: 3284, pv: 8255, uv: 6500 },
  { amt: 5284, pv: 4255, uv: 7500 },
  { amt: 7284, pv: 2255, uv: 5500 },
  { amt: 4284, pv: 4255, uv: 2500 },
  { amt: 2284, pv: 1255, uv: 4500 },
  { amt: 1284, pv: 6255, uv: 1500 },
  { amt: 3284, pv: 9255, uv: 1500 },
  { amt: 8284, pv: 5255, uv: 4500 },
  { amt: 6284, pv: 4255, uv: 7500 },
  { amt: 6284, pv: 4255, uv: 1500 },
  { amt: 3284, pv: 1255, uv: 5500 },
  { amt: 6284, pv: 2255, uv: 4500 },
];

const app = express();
app.use(cors());

const root = {
  getAmountA: () => {
    return AmountAdata;
  },
  getAmountB: () => {
    return AmountBdata;
  },
  getAmountC: () => {
    return AmountCdata;
  },
};

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root,
  })
);

app.listen(5000, () => console.log("server started on port 5000"));
