exports.id = 555;
exports.ids = [555];
exports.modules = {

/***/ 555:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wz": function() { return /* binding */ pageVariants; },
/* harmony export */   "t_": function() { return /* binding */ tableAnimation; },
/* harmony export */   "Ic": function() { return /* binding */ cardAnimation; },
/* harmony export */   "Vc": function() { return /* binding */ muzeumAnimation; }
/* harmony export */ });
/* unused harmony export loadingAnimation */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(762);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5477);

const pageVariants = {
  initial: {
    y: -50,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};
const tableAnimation = {
  initial: {
    x: "-2rem",
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  },
  exit: {
    x: "2rem",
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};
const cardAnimation = {
  initial: {
    x: "2rem",
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  },
  exit: {
    x: "-2rem",
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};
const muzeumAnimation = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};
const loadingAnimation = {
  initial: {
    opacity: 0,
    zIndex: -5
  },
  animate: {
    opacity: 1,
    zIndex: 50,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  },
  exit: {
    opacity: 0,
    zIndex: -5,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};
/*
import { useState } from 'react'
import { motion } from "framer-motion";
import { useRouter } from 'next/router';
 const blackBox = {
    initial: {
        height: "100%",
        bottom: 0,
    },
    animate: {
        height: 0,
        transition: {
            when: "afterChildren",
            duration: 1.5,
            ease: [0.87, 0, 0.13, 1],
        },
    },
};

const textContainer = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 0,
        transition: {
            duration: 0.5,
            when: "afterChildren",
        },
    },
};

const text = {
    initial: {
        y: 40,
    },
    animate: {
        y: 80,
        transition: {
            duration: 1.5,
            ease: [0.87, 0, 0.13, 1],
        },
    },
};

const InitialTransition = () => {
    const { locale } = useRouter()
    const [complete, setcomplete] = useState(false)
    return (
        <>
            <motion.div
                className={`position-absolute animdiv ${complete ? ("d-none") : ("d-flex")} justify-content-center align-items-center w-100 p-0 m-0`}
                style={{ zIndex: "1031", backgroundColor: "black" }}
                initial="initial"
                animate="animate"
                variants={blackBox}
                onAnimationStart={() => {
                    document.body.classList.add("overflow-hidden")
                }}
                onAnimationComplete={() => {
                    localStorage.setItem("InitalTransition", false)
                    setcomplete(true)
                    document.body.classList.remove("overflow-hidden")
                }
                }
            >
                <motion.svg variants={textContainer} className="position-absolute w-100 d-flex" style={{ zIndex: "1029" }}>
                    <pattern
                        id="pattern"
                        patternUnits="userSpaceOnUse"
                        width={window.innerWidth}
                        height={window.innerHeight}
                        className="text-white"
                    >
                        <rect className="w-100 h-100" style={{ fill: "currentcolor" }} />
                        <motion.rect
                            variants={text}
                            className="w-100 h-100 text-dark" style={{ fill: "currentcolor" }}
                        />
                    </pattern>
                    <text
                        className="font-weight-bold"
                        textAnchor="middle"
                        x="50%"
                        y="50%"
                        style={{ fill: "url(#pattern)", fontSize: "25px" }}
                    >
                        {locale === "en" ? ("There is something new") : ("Megújultunk")}
                    </text>
                </motion.svg>
            </motion.div>
        </>
    );
};



export default InitialTransition */






const FullscreenLoading = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const {
    0: pageLoading,
    1: setPageLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    const handleStart = () => {
      setPageLoading(true);
    };

    const handleComplete = () => {
      setPageLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);
  if (pageLoading) return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
    initial: "initial",
    exit: "exit",
    animate: "animate",
    variants: loadingAnimation,
    className: `d-flex justify-content-center position-fixed align-items-center`,
    style: {
      backgroundColor: "rgba(0,0,0,0.6)",
      left: "0",
      top: "0",
      width: "100%",
      height: "100%"
    },
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
      style: {
        color: "white"
      },
      size: 60
    })
  });
  return null;
};

/* harmony default export */ __webpack_exports__["ZP"] = (FullscreenLoading);

/***/ })

};
;