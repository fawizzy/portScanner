# portScanner


## Overview

This Node.js script serves as a simple port scanner that allows you to check the status of ports on a given host. The script utilizes asynchronous operations and the `net` module for networking tasks, and it returns ports that are open.

## Requirements

- Node.js installed on your machine ([Download Node.js](https://nodejs.org/))

## Usage

1. Clone the repository or download the script.
2. Open a terminal and navigate to the directory containing the script.
3. Run the script with the following command:

    ```
    ./portscan.js -h <hostname>
    ```

    Replace `<hostname>` with the target host's IP address or domain name. The script will scan all the ports.

    For example:

    ```
    ./portscan.js -h example.com
    ```

## Options

- `-h <hostname>`: Specify the target host's IP address or domain name.

## Output

The script outputs an array of objects, each containing information about a port. The `status` field indicates whether the port is "open".


## Challenge Link

This script is a solution for the [Port Scanner Challenge](https://codingchallenges.fyi/challenges/challenge-port-scanner/) on CodingChallenges.fyi.

## Note

- This script is designed for educational purposes and may have limitations. Please ensure that you have the right to scan ports on the target machine before using this script.
