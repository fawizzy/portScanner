#!/usr/bin/node

const net = require("net");
const { performance } = require("perf_hooks");
const args = process.argv;
let host;

for (let index = 0; index < args.length; index++) {
  if (args[index] === "-h") {
    host = args[index + 1];
  }
  if (args[index] === "-p") {
    port = args[index + 1];
  }
}

const prev = performance.now();
scanPorts()
  .then((data) => {
    console.log(data);
    console.log(performance.now() - prev);
  })
  .catch((error) => {
    // console.log(error);
  });

async function scanPorts() {
  const portRange = Array.from({ length: 65535 }, (_, index) => index);

  const results = await Promise.all(portRange.map((port) => scanport(port)));

  return results.filter((result) => result.status === "open");
}

async function scanport(port) {
  return new Promise((resolve) => {
    let socket = net.Socket();
    socket.setTimeout(2000);
    socket.connect(port, host);
    socket.on("connect", () => {
      resolve({ port, status: "open" });
      socket.destroy();
    });

    socket.on("timeout", () => {
      resolve({ port, status: "close" });
      socket.destroy();
    });

    socket.on("error", (error) => {
      resolve({ port, status: "error" });
      socket.destroy();
    });
  });
}
