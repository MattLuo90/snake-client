const net = require("net");
const { IP, PORT } = require("./constants");
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("connected to snek server")
  })
  conn.on('connect', () => {
    conn.write('Name: MLJ');
  });
  conn.on('connect', () => {
    conn.write('Say: faster');
  });
   conn.on("data", (message) => {
    console.log(message);
  })
  return conn;

};


module.exports = {connect};