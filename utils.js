var pg = require("pg");
var Promise = require("bluebird");
const config = require("./config.json")

Object.keys(pg).forEach(function(key) {
    var Class = pg[key];
    if (typeof Class === "function") {
        Promise.promisifyAll(Class.prototype);
        Promise.promisifyAll(Class);
    }
})
Promise.promisifyAll(pg);
const client = new pg.Client(config[config.env].postgres)
client.connect()
async function query (q) {
    console.log(q)
    let res
    try {
      try {
        res = await client.query(q)
        await client.query('COMMIT')
      } catch (err) {
        console.log(err)
        throw err
      }
    } finally {
        
    }
    return res
}

const success = {
  "status": "success"
}
const failure = {
  "status": "failure"
}



module.exports = {
    pg,
    query,
    success,
    failure
}

