exports.id = 815;
exports.ids = [815];
exports.modules = {

/***/ 554:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ GlobalComponents_Gallery; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "mdbreact"
var external_mdbreact_ = __webpack_require__(2436);
// EXTERNAL MODULE: external "react-awesome-reveal"
var external_react_awesome_reveal_ = __webpack_require__(104);
;// CONCATENATED MODULE: ./lib/gallery.json
var gallery_namespaceObject = JSON.parse('["/img/galeria/1.jpg","/img/galeria/2.jpg","/img/galeria/3.jpg","/img/galeria/4.jpg","/img/galeria/5.jpg","/img/galeria/6.jpg","/img/galeria/7.jpg","/img/galeria/8.jpg","/img/galeria/9.jpg","/img/galeria/10.jpg","/img/galeria/11.jpg","/img/galeria/12.jpg","/img/galeria/13.jpg","/img/galeria/14.jpg","/img/galeria/15.jpg","/img/galeria/16.jpg"]');
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__(9639);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);
;// CONCATENATED MODULE: ./components/GlobalComponents/Gallery.js









const Fslightboxes = dynamic_default()(() => __webpack_require__.e(/* import() */ 590).then(__webpack_require__.bind(__webpack_require__, 8590)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(8590)],
    modules: ["..\\components\\GlobalComponents\\Gallery.js -> " + "./Fslightboxes"]
  }
});

const Gallery = () => {
  const router = (0,router_.useRouter)();
  const {
    0: galleryopen,
    1: setgalleryopen
  } = (0,external_react_.useState)({
    toggler: false,
    slide: 0
  });

  const galleryfill = id => {
    let galleryimages = [];

    for (let index = id; index < id + 4; index++) {
      galleryimages.push( /*#__PURE__*/jsx_runtime_.jsx("div", {
        md: "3",
        className: "my-2 p-0 col-md-3 kartya",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_mdbreact_.MDBCard, {
          style: {
            boxShadow: "none"
          },
          className: "",
          onClick: () => setgalleryopen({
            toggler: true,
            slide: index
          }),
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_mdbreact_.MDBCardImage, {
            waves: true,
            className: `img-fluid ${(index + 1) % 4 === 1 ? "roundedimage1" : (index + 1) % 4 === 0 && "roundedimage2"} roundedimagemobile mx-auto`,
            alt: `Galéria ${index}`,
            src: gallery_namespaceObject[index]
          }), /*#__PURE__*/jsx_runtime_.jsx(external_mdbreact_.MDBMask, {
            className: "",
            overlay: "black-light"
          })]
        })
      }, index));
    }

    return galleryimages;
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      id: "gallerycontainer",
      className: "pt-5 row pb-4 mx-auto w-75",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "col",
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_awesome_reveal_.Fade, {
          triggerOnce: true,
          direction: "down",
          children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
            className: "pb-2 mb-0 text-center",
            id: "gallerytext",
            children: router.locale === "en" ? "Gallery" : "Galéria"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_awesome_reveal_.Fade, {
          triggerOnce: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(external_mdbreact_.MDBCarousel, {
            activeItem: 1,
            length: 4,
            showControls: true,
            showIndicators: false,
            slide: true,
            className: "carousel slide carousel-multi-item carousel-multi-item-2",
            "data-ride": "carousel",
            multiItem: true,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_mdbreact_.MDBCarouselInner, {
              className: "carousel-inner",
              children: [/*#__PURE__*/jsx_runtime_.jsx(external_mdbreact_.MDBCarouselItem, {
                className: "carousel-item",
                itemId: "1",
                children: galleryfill(0)
              }), /*#__PURE__*/jsx_runtime_.jsx(external_mdbreact_.MDBCarouselItem, {
                className: "carousel-item",
                itemId: "2",
                children: galleryfill(4)
              }), /*#__PURE__*/jsx_runtime_.jsx(external_mdbreact_.MDBCarouselItem, {
                className: "carousel-item",
                itemId: "3",
                children: galleryfill(8)
              }), /*#__PURE__*/jsx_runtime_.jsx(external_mdbreact_.MDBCarouselItem, {
                className: "carousel-item",
                itemId: "4",
                children: galleryfill(12)
              })]
            })
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Fslightboxes, {
      gallery: true,
      data: gallery_namespaceObject,
      imgtoggler: galleryopen,
      setimgtoggler: setgalleryopen
    })]
  });
};

/* harmony default export */ var GlobalComponents_Gallery = (Gallery);

/***/ })

};
;