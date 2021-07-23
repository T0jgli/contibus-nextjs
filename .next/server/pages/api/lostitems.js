(function() {
var exports = {};
exports.id = 681;
exports.ids = [681];
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

/***/ 6442:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ formHandler; }
/* harmony export */ });
/* harmony import */ var _lib_helpers_ApiHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(926);
/* harmony import */ var _lib_helpers_Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(787);
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5391);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9421);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_helpers_middlewares__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6027);
/* harmony import */ var express_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7756);
/* harmony import */ var express_validator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express_validator__WEBPACK_IMPORTED_MODULE_4__);







const nodemailer = __webpack_require__(8123);

const transporter = nodemailer.createTransport(_lib_helpers_ApiHelper__WEBPACK_IMPORTED_MODULE_0__/* .transport */ .t);
const validateBody = (0,_lib_helpers_middlewares__WEBPACK_IMPORTED_MODULE_5__/* .initMiddleware */ .q)((0,_lib_helpers_middlewares__WEBPACK_IMPORTED_MODULE_5__/* .validateMiddleware */ .M)([(0,express_validator__WEBPACK_IMPORTED_MODULE_4__.check)("name").trim().escape(), (0,express_validator__WEBPACK_IMPORTED_MODULE_4__.check)("phone").trim().escape(), (0,express_validator__WEBPACK_IMPORTED_MODULE_4__.check)("email").trim().escape(), (0,express_validator__WEBPACK_IMPORTED_MODULE_4__.check)("date").trim().escape(), (0,express_validator__WEBPACK_IMPORTED_MODULE_4__.check)("bus").trim().escape(), (0,express_validator__WEBPACK_IMPORTED_MODULE_4__.check)("desc").trim().escape(), (0,express_validator__WEBPACK_IMPORTED_MODULE_4__.check)("comment").trim().escape()], express_validator__WEBPACK_IMPORTED_MODULE_4__.validationResult));
async function formHandler(req, res) {
  if (req.method === "POST") {
    await validateBody(req, res);
    const {
      name,
      phone,
      email,
      date,
      bus,
      desc,
      comment,
      newsletterlost
    } = req.body;
    let success = false;

    try {
      const mail = {
        from: `"Elveszett tárgyak – ${name}" "Kovalik.adam.86@unibge.hu"`,
        to:  true ? "buszrendeles@contibus.hu" : 0,
        subject: "Elveszett tárgy > contibus.hu",
        html: ` <html><body style="text-align: center;">
                <h1>Elveszett tárgy űrlap a contibus.hu-n keresztül</h1>
                <hr>
                <p style="font-weight: bold;">Utas neve:</p><p style="padding-bottom: 20px">${name}</p>
                <p style="font-weight: bold;">Utas telefonszáma:</p><p style="padding-bottom: 20px">${phone}</p>
                <p style="font-weight: bold;">Utas email címe:</p><p style="padding-bottom: 20px">${email}</p>
                <p style="font-weight: bold;">Utazás dátuma:</p><p style="padding-bottom: 20px">${date}</p>
                <p style="font-weight: bold;">Busz:</p><p style="padding-bottom: 20px">${bus}</p>
                <p style="font-weight: bold;">Tárgy leírása:</p><p style="padding-bottom: 20px">${desc}</p>
                <br>
                <p style="font-weight: bold;">Egyéb megjegyzés:</p><p>${comment}</p>
                </body>
                </html> `
      };
      transporter.verify(error => {
        if (error) {
          (0,_lib_helpers_Logger__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)("error", error);
        } else {
          (0,_lib_helpers_Logger__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)("email", "Pörgünk, megyünk, nyomjuk! (elveszett tárgyak)");
        }
      });
      await transporter.sendMail(mail);
      success = true;
      (0,_lib_helpers_Logger__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)("email", "elküldve (elveszett tárgyak)");
      res.status(200).json({
        status: "success"
      });
    } catch (error) {
      (0,_lib_helpers_Logger__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)("error", error);
      res.status(500).json({
        error: "Error"
      });
    } finally {
      _lib_firebase__WEBPACK_IMPORTED_MODULE_2__/* .default.collection */ .Z.collection("lostitemusers").add({
        name: name,
        phone: phone,
        email: email,
        date: date,
        bus: bus,
        desc: desc,
        sent: success,
        comment: comment,
        timestamp: firebase_app__WEBPACK_IMPORTED_MODULE_3___default().firestore.FieldValue.serverTimestamp()
      });

      if (newsletterlost) {
        _lib_firebase__WEBPACK_IMPORTED_MODULE_2__/* .default.collection */ .Z.collection("newsletterusers").doc(email).set({
          name: name,
          phone: phone,
          email: email,
          timestamp: firebase_app__WEBPACK_IMPORTED_MODULE_3___default().firestore.FieldValue.serverTimestamp()
        });
      }
    }
  } else {
    res.send("Rossz helyen jarsz");
  }

  res.end();
}

/***/ }),

/***/ 7756:
/***/ (function(module) {

"use strict";
module.exports = require("express-validator");;

/***/ }),

/***/ 9421:
/***/ (function(module) {

"use strict";
module.exports = require("firebase/app");;

/***/ }),

/***/ 8123:
/***/ (function(module) {

"use strict";
module.exports = require("nodemailer");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [829], function() { return __webpack_exec__(6442); });
module.exports = __webpack_exports__;

})();