exports.id = 899;
exports.ids = [899];
exports.modules = {

/***/ 3899:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": function() { return /* binding */ setOneContentfulData; }
/* harmony export */ });
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4869);
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(contentful__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(787);


const client = (0,contentful__WEBPACK_IMPORTED_MODULE_0__.createClient)({
  space: "dh9tjpmuvjl4",
  accessToken: "F5YRlXM1MDPwEeII905W7g0t3uPkf6IG1AtxkdHaHxQ"
});

const SetContentFulData = async (type, order) => {
  try {
    const entries = await client.getEntries({
      content_type: type,
      order: order
    });
    if (entries.items) return entries.items;
    return [];
  } catch (error) {
    (0,_helpers_Logger__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)("error", error);
  }
};

const setOneContentfulData = async (type, id) => {
  try {
    const entries = await client.getEntries({
      content_type: type,
      "fields.id[match]": id
    });
    if (entries.items) return entries.items;
    return [];
  } catch (error) {
    (0,_helpers_Logger__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)("error", error.message);
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (SetContentFulData);

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

/***/ })

};
;