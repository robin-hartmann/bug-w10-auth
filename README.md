# bug-w10-auth

A demonstration on how to reproduce a crash on Windows 10 Mobile devices after the authentication dialog pops up

## Tested on

Device|Windows Variant|Windows Version|Crash
---|---|---|---
x64-based PC|Pro|1703 (10.0.15063.0)|NO
x64-based PC|Pro|1511 (10.0.10586.1106)|NO
HP Elite x3|Mobile|1703 (10.0.15063.608)|NO
NOKIA Lumia 930|Mobile|1607 (10.0.14393.1715)|YES
Zebra TC700J|Mobile Enterprise|1607 (10.0.14393.1715)|YES
PANASONIC FZ-F1|Mobile Enterprise|1511 (10.0.10586.1106)|YES

## Prerequisites

### Software

* [Node.js](https://nodejs.org/en/download/) - A JavaScript run-time environment

### Setup

After installing and setting up Node.js, run the following commands in *cmd* or *powershell*:

```Batchfile
npm i
.\node_modules\.bin\cordova platform add windows
```

## How to reproduce

1. Open `"platforms/windows/CordovaApp.sln"` in Visual Studio
1. Configure *CordovaApp.Windows10* as **Startup Project**
1. Run the project on a connected mobile device
1. Stop the debug session (the app doesn't crash during debugging)
1. Launch the app manually
1. Press *Send POST* (the device needs to successfully receive the response from ``http://PutsReq.com``)

Now the authentication dialog should pop up. If the dialog isn't closed within ~5 seconds, the app will crash.

## About the response

For the dialog to pop up, the following conditions have to be met by the respsonse:

* Status code needs to be `401`
* Header `WWW-Authenticate` needs to be present
* Header `WWW-Authenticate` needs to be configured for Basic Authentication (e.g. set to  `Basic realm="PutsReq.com"`)

## Authors

* **Robin Hartmann** - *Initial work* - [RobinHartmann](https://github.com/RobinHartmann)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
