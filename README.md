# Node.js Server Port Already in Use

This repository demonstrates a common error encountered when developing Node.js applications: the failure to start a server because the specified port is already in use.

## Problem

The `server.listen()` method in Node.js throws an error if the port number specified is already in use by another process. This typically occurs if you try to run multiple instances of your application or if another application is already using the same port.

## Solution

The solution involves checking if the port is available before attempting to start the server.  Error handling should be implemented to gracefully handle the port-in-use scenario.

## Usage

1. Clone this repository.
2. Navigate to the project directory.
3. Run `node bug.js` to observe the error. 
4. Run `node bugSolution.js` to see the solution that handles the error.
