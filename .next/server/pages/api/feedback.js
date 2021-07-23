(function() {
var exports = {};
exports.id = 240;
exports.ids = [240];
exports.modules = {

/***/ 5391:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ firebase; }
});

// UNUSED EXPORTS: storage

// EXTERNAL MODULE: external "firebase/app"
var app_ = __webpack_require__(9421);
var app_default = /*#__PURE__*/__webpack_require__.n(app_);
;// CONCATENATED MODULE: external "firebase/firestore"
var firestore_namespaceObject = require("firebase/firestore");;
;// CONCATENATED MODULE: external "firebase/storage"
var storage_namespaceObject = require("firebase/storage");;
;// CONCATENATED MODULE: ./lib/firebase.js



const firebaseConfig = {
  apiKey: "AIzaSyAxSFg3SrlRSQxRGhFNuDPpdkIsCmAA6OA",
  authDomain: "contibus.firebaseapp.com",
  databaseURL: "https://contibus.firebaseio.com",
  projectId: "contibus",
  storageBucket: "contibus.appspot.com",
  messagingSenderId: "259076631653",
  appId: "1:259076631653:web:46630ae72536bb95006a8c"
};
const firebaseapp = !(app_default()).apps.length ? app_default().initializeApp(firebaseConfig) : app_default().app();
const db = firebaseapp.firestore();
const storage = firebaseapp.storage();
/* harmony default export */ var firebase = (db);

/***/ }),

/***/ 787:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ logger; }
/* harmony export */ });
const getDate = () => new Date().toLocaleString();

const typeColors = {
  info: "\x1b[36m",
  build: "\x1b[33m",
  error: "\x1b[31m",
  email: "\x1b[32m"
};
function logger(type, message, object) {
  console.log(`${typeColors[type]}[${type.toUpperCase()}] -- [${getDate()}], \x1b[0m${message} ${object || ""}`);
}

/***/ }),

/***/ 9889:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ formHandler; }
/* harmony export */ });
/* harmony import */ var _lib_helpers_Logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(787);
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5391);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9421);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);



async function formHandler(req, res) {
  if (req.method === "POST") {
    const {
      value,
      label,
      textareavalue
    } = req.body;

    try {
      await _lib_firebase__WEBPACK_IMPORTED_MODULE_1__/* .default.collection */ .Z.collection("feedbacks").add({
        feedbackstar: value,
        feedbacktext: label,
        details: textareavalue,
        timestamp: firebase_app__WEBPACK_IMPORTED_MODULE_2___default().firestore.FieldValue.serverTimestamp()
      });
    } catch (error) {
      (0,_lib_helpers_Logger__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)("error", error);
      res.status(500).json({
        error: error
      });
    }
  } else {
    res.send("Rossz helyen jarsz");
  }

  res.end();
}

/***/ }),

/***/ 9421:
/***/ (function(module) {

"use strict";
module.exports = require("firebase/app");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(9889));
module.exports = __webpack_exports__;

})();