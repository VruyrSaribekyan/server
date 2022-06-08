const {buildSchema} = require('graphql')

const schema = buildSchema(`
    
type AmountA {
    pv: Int
    amt: Int
    uv: Int
} 
type AmountB {
    pv: Int
    amt: Int
    uv: Int
} 
type AmountC {
    pv: Int
    amt: Int
    uv: Int
}

    
  
    
    type Query {
        getAmountA: [AmountA]
        getAmountB: [AmountB]
        getAmountC: [AmountC]
    }
  
`)

module.exports = schema