let connection;

  const setupInput = (conn) => {
    connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  // process.stdin.on("data", (message)=> {
  //   try {
  //     client.write(message);
  //   } catch (err) {
  //     console.log("try again")}
  // })
  return stdin;
  };


let interval;
const handleUserInput = function (data) {
  // your code here
  if (data === "w") {
    clearInterval(interval);
    interval = setInterval(() => {
      connection.write("Move: up")
    }, 80) 
  }
  if (data === "a") {
    clearInterval(interval);
    interval = setInterval(() => {
      connection.write("Move: left")
    }, 80) 
  }
  if (data === "d") {
    clearInterval(interval);
    interval = setInterval(() => {
      connection.write("Move: right")
    }, 80)  
  }
  if (data === "s") {
    clearInterval(interval);
    interval = setInterval(() => {
      connection.write("Move: down")
    }, 80)   
  }
  if (data === '\u0003') {
    process.exit();
  }
};

module.exports = {
  setupInput
}