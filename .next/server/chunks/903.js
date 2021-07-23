exports.id = 903;
exports.ids = [903];
exports.modules = {

/***/ 2903:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2436);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mdbreact__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_ViewAgenda__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7620);
/* harmony import */ var _material_ui_icons_ViewAgenda__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ViewAgenda__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_TableChart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8348);
/* harmony import */ var _material_ui_icons_TableChart__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_TableChart__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(104);
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9639);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _GlobalComponents_Spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8966);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(762);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _GlobalComponents_Initaltransition__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(555);















const Fslightboxes = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(() => __webpack_require__.e(/* import() */ 590).then(__webpack_require__.bind(__webpack_require__, 8590)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(8590)],
    modules: ["..\\components\\BusesComponents\\Table.js -> " + "../GlobalComponents/Fslightboxes"]
  }
});
const Carddeck = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(() => __webpack_require__.e(/* import() */ 543).then(__webpack_require__.bind(__webpack_require__, 9543)), {
  loading: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_GlobalComponents_Spinner__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {}),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(9543)],
    modules: ["..\\components\\BusesComponents\\Table.js -> " + "./Carddeck"]
  }
});
const Datatable = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(() => Promise.all(/* import() */[__webpack_require__.e(664), __webpack_require__.e(13), __webpack_require__.e(270)]).then(__webpack_require__.bind(__webpack_require__, 8865)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(8865)],
    modules: ["..\\components\\BusesComponents\\Table.js -> " + "./Datatable"]
  }
});

const Table = ({
  tablazat,
  settablazat
}) => {
  const {
    locale
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
  const busesdata = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.app.busesData);
  const {
    0: imgtoggler,
    1: setimgtoggler
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    toggler: false,
    slide: 0
  });
  let idd = 0;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_7__.Fade, {
      triggerOnce: true,
      direction: "down",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
        className: "text-center desctext my-4",
        id: "buses-text",
        children: locale === "en" ? "Our current buses" : "Jelenlegi autóbuszaink"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_7__.Fade, {
      triggerOnce: true,
      direction: "up",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(mdbreact__WEBPACK_IMPORTED_MODULE_3__.MDBBtnGroup, {
        className: "my-3",
        id: "buses-btngroup",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__.MDBBtn, {
          disabled: !tablazat,
          color: "elegant",
          "aria-label": "K\xE1rty\xE1kra v\xE1lt\xE1s",
          style: {
            borderRadius: "10px 0 0 10px",
            color: "white",
            marginRight: "0"
          },
          onClick: () => {
            settablazat(!tablazat);
            localStorage.removeItem("defaultBusView");
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {
            title: locale === "en" ? "Cards" : "Kártyák",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_ViewAgenda__WEBPACK_IMPORTED_MODULE_5___default()), {
              fontSize: "small"
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__.MDBBtn, {
          disabled: tablazat,
          color: "elegant",
          "aria-label": "T\xE1bl\xE1zatra v\xE1lt\xE1s",
          style: {
            borderRadius: "0 10px 10px 0",
            color: "white"
          },
          onClick: () => {
            settablazat(!tablazat);
            localStorage.setItem("defaultBusView", "table");
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {
            title: locale === "en" ? "Table" : "Táblázat",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_TableChart__WEBPACK_IMPORTED_MODULE_6___default()), {
              fontSize: "small"
            })
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_11__.AnimatePresence, {
      exitBeforeEnter: true,
      children: [!tablazat ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_11__.motion.section, {
        id: "buses-cards",
        initial: "initial",
        animate: "animate",
        variants: _GlobalComponents_Initaltransition__WEBPACK_IMPORTED_MODULE_12__/* .tableAnimation */ .t_,
        exit: "exit",
        children: busesdata === null || busesdata === void 0 ? void 0 : busesdata.map((item, index, array) => {
          if (index % 3 === 0) {
            idd++;
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Carddeck, {
              length: array.length,
              idd: idd,
              item: item,
              nextnextitem: array[index + 2],
              nextitem: array[index + 1],
              what: "Table"
            }, index);
          } else {
            return null;
          }
        })
      }, "busesCards") : null, tablazat && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_11__.motion.section, {
        id: "buses-table",
        initial: "initial",
        animate: "animate",
        variants: _GlobalComponents_Initaltransition__WEBPACK_IMPORTED_MODULE_12__/* .cardAnimation */ .Ic,
        exit: "exit",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(mdbreact__WEBPACK_IMPORTED_MODULE_3__.MDBTable, {
          striped: true,
          hover: true,
          responsive: true,
          className: "w-100 mt-4 busestable",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__.MDBTableHead, {
            className: "z-depth-1",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
              className: "text-center z-depth-1",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                  className: "font-weight-bolder",
                  children: locale === "en" ? "Vehicles" : "Járműveink"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                className: "pr-3 text-right",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                  className: "font-weight-bolder",
                  children: locale === "en" ? "Prices" : "Árak"
                })
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__.MDBTableBody, {
            children: busesdata === null || busesdata === void 0 ? void 0 : busesdata.map((item, index) => {
              return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Datatable, {
                setimgtoggler: setimgtoggler,
                imgtoggler: imgtoggler,
                dataid: index + 1,
                data: item
              }, index);
            })
          })]
        })
      }, "busesTable")]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Fslightboxes, {
      setimgtoggler: setimgtoggler,
      data: busesdata,
      imgtoggler: imgtoggler
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ })

};
;