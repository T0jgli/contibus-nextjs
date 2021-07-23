(function() {
var exports = {};
exports.id = 91;
exports.ids = [91];
exports.modules = {

/***/ 5667:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ formHandler; }
/* harmony export */ });
/* harmony import */ var express_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7756);
/* harmony import */ var express_validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express_validator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_helpers_ApiHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(926);
/* harmony import */ var _lib_helpers_Logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(787);
/* harmony import */ var _lib_helpers_middlewares__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6027);





const nodemailer = __webpack_require__(8123);

const transporter = nodemailer.createTransport(_lib_helpers_ApiHelper__WEBPACK_IMPORTED_MODULE_1__/* .transport */ .t);
const validateBody = (0,_lib_helpers_middlewares__WEBPACK_IMPORTED_MODULE_3__/* .initMiddleware */ .q)((0,_lib_helpers_middlewares__WEBPACK_IMPORTED_MODULE_3__/* .validateMiddleware */ .M)([(0,express_validator__WEBPACK_IMPORTED_MODULE_0__.check)("subject").trim().escape(), (0,express_validator__WEBPACK_IMPORTED_MODULE_0__.check)("email").trim().escape(), (0,express_validator__WEBPACK_IMPORTED_MODULE_0__.check)("name").trim().escape(), (0,express_validator__WEBPACK_IMPORTED_MODULE_0__.check)("message").trim().escape()], express_validator__WEBPACK_IMPORTED_MODULE_0__.validationResult));
async function formHandler(req, res) {
  if (req.method === "POST") {
    await validateBody(req, res);
    const {
      subject,
      name,
      email,
      message
    } = req.body;

    try {
      const mail = {
        from: `"Kapcsolat – ${name}" "Kovalik.adam.86@unibge.hu"`,
        to:  true ? "buszrendeles@contibus.hu" : 0,
        subject: `Kapcsolat > contibus.hu ${subject ? "| " + subject : ""}`,
        html: ` <html><body style="text-align: center;">
                <h1>Kapcsolat űrlap a contibus.hu-n keresztül</h1>
                <hr>
                <p style="font-weight: bold;">Név:</p><p style="padding-bottom: 20px">${name}</p>
                <p style="font-weight: bold;">Email cím:</p><p style="padding-bottom: 20px">${email}</p>
                <p style="font-weight: bold;">Tárgy:</p><p style="padding-bottom: 20px">${subject || "Nincs"}</p>
                <br>
                <p style="font-weight: bold;">Üzenet:</p><p>${message}</p>
                </body>
                </html> `
      };
      transporter.verify(error => {
        if (error) {
          (0,_lib_helpers_Logger__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)("error", error);
        } else {
          (0,_lib_helpers_Logger__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)("email", "Pörgünk, megyünk, nyomjuk! (kapcsolat)");
        }
      });
      await transporter.sendMail(mail);
      (0,_lib_helpers_Logger__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)("email", "elküldve (kapcsolat)");
      res.status(200).json({
        status: "success"
      });
    } catch (error) {
      (0,_lib_helpers_Logger__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)("error", error);
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

/***/ 7756:
/***/ (function(module) {

"use strict";
module.exports = require("express-validator");;

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
var __webpack_exports__ = __webpack_require__.X(0, [829], function() { return __webpack_exec__(5667); });
module.exports = __webpack_exports__;

})();