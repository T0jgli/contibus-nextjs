exports.id = 829;
exports.ids = [829];
exports.modules = {

/***/ 926:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": function() { return /* binding */ transport; }
/* harmony export */ });
const transport = {
  host: "smtp.sendgrid.net",
  port: 465,
  auth: {
    user: "apikey",
    pass: "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"
  }
};

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

/***/ 6027:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": function() { return /* binding */ initMiddleware; },
/* harmony export */   "M": function() { return /* binding */ validateMiddleware; }
/* harmony export */ });
function initMiddleware(middleware) {
  return (req, res) => new Promise((resolve, reject) => {
    middleware(req, res, result => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}
function validateMiddleware(validations, validationResult) {
  return async (req, res, next) => {
    await Promise.all(validations.map(validation => validation.run(req)));
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      return next();
    }

    res.status(422).json({
      errors: errors.array()
    });
  };
}

/***/ })

};
;