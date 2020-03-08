# 🐞 bug-w10-auth

A minimal working example for reproducing a crash on Windows 10 Mobile devices

## 🛠️ Development

These instructions will get you a copy of this project up and running on your local machine for development and testing purposes.

### 📋 Prerequisites

* [Node.js](https://nodejs.org/en/download/) - A JavaScript run-time environment
* [Visual Studio 2015/2017](https://www.visualstudio.com/de/vs/) - Fully-featured IDE for Android, iOS, Windows, web, & cloud

### 🚀 Getting Started

1. Install all dependencies
    - `npm i`
1. Add Windows as platform
    - `.\node_modules\.bin\cordova platform add windows`
1. Open `platforms/windows/CordovaApp.sln` in Visual Studio
1. Configure *CordovaApp.Windows10* as **Startup Project**
1. Run the project on a connected mobile device
1. Stop the debug session (the app doesn't crash during debugging)
1. Launch the app manually
1. Press *Send POST* (the device needs to successfully receive the response from `http://PutsReq.com`)

Now the authentication dialog should pop up. If the dialog isn't closed within ~5 seconds, the app will crash.

## ✉️ About the response

For the dialog to pop up, the following conditions have to be met by the response:

* Status code needs to be `401`
* Header `WWW-Authenticate` needs to be present
* Header `WWW-Authenticate` needs to be configured for Basic Authentication (e.g. set to  `Basic realm="PutsReq.com"`)

## 📋 Tested on

Device|Windows Variant|Windows Version|Crash
---|---|---|---
x64-based PC|Pro|1703 (10.0.15063.0)|NO
x64-based PC|Pro|1511 (10.0.10586.1106)|NO
HP Elite x3|Mobile|1703 (10.0.15063.608)|NO
NOKIA Lumia 930|Mobile|1607 (10.0.14393.1715)|YES
Zebra TC700J|Mobile Enterprise|1607 (10.0.14393.1715)|YES
PANASONIC FZ-F1|Mobile Enterprise|1511 (10.0.10586.1106)|YES

## 🧰 Built With

* [Cordova](https://cordova.apache.org/) - Mobile apps with HTML, CSS & JS
* [PutsReq](http://putsreq.com/) - Lets you record HTTP requests and fake responses

## 👨‍💻 Authors

* **Robin Hartmann** - [robin-hartmann](https://github.com/robin-hartmann)

## 📃 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
