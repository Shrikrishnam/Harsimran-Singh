function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- LOGO -->\r\n<div class=\"logo navbar\">\r\n  <a href=\"#\" class=\"navbar-brand\"><img class=\"image\" src=\"./assets/img/fitness_logo1.jpg\" height=\"55px\" width=\"130px\" alt=\"Fitness\"/></a> \r\n</div>\r\n\r\n<!-- NAVBAR -->\r\n<div class=\"nav-bar navbar navbar-expand-lg navbar-light\">\r\n  <div class=\"collapse navbar-collapse \">\r\n      <ul class=\"navbar-nav\">\r\n          <li class=\"nav-item font-weight-bold\"><a routerLink=\"/landing-page\" class=\"nav-link\">Home</a></li>\r\n          <li class=\"nav-item font-weight-bold\"><a routerLink=\"/place-fitness-trainer-appointment\" class=\"nav-link\">Place Appointment</a></li>\r\n          <li class=\"nav-item font-weight-bold\"><a routerLink=\"/view-appointment\" class=\"nav-link\">View Appointment</a></li>\r\n          <li class=\"nav-item font-weight-bold\"><a routerLink=\"/contact-us\" class=\"nav-link\">Contact Us</a></li>\r\n      </ul>\r\n  </div> \r\n</div>\r\n<!-- MAIN CONTENT -->\r\n\r\n<div class=\"row col-12\">\r\n  <!-- SIDEBAR -->\r\n  <div class=\"col-2 sidebar navbar-dark bg-dark\">\r\n          <ul class=\"navbar-nav\">\r\n              <li class=\"nav-item side-item\"><a routerLink=\"/landing-page\" class=\"nav-link\">Home</a></li>\r\n              <li class=\"nav-item  side-item\"><a routerLink=\"/place-fitness-trainer-appointment\" class=\"nav-link\">Place Appointment</a></li>\r\n              <li class=\"nav-item  side-item\"><a routerLink=\"/view-appointment\" class=\"nav-link\">View Appointment</a></li>\r\n              <li class=\"nav-item  side-item\"><a routerLink=\"/contact-us\" class=\"nav-link\">Contact Us</a></li>\r\n          </ul>\r\n  </div>\r\n  <!-- RIGHT CONTENT -->\r\n  <div class=\"col-10\">\r\n      <router-outlet></router-outlet>\r\n  </div>\r\n\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactUsContactUsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3 class=\"mb-2\">Contact Us</h3>\r\n<hr/>\r\n<form [formGroup]=\"contactForm\" (ngSubmit)=\"onSubmit()\" novalidate>\r\n    <div class=\"form-group\">\r\n        <label for=\"exampleInputfirstname\">First Name</label>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"firstname\" placeholder=\"First Name\">\r\n        <small class=\"form-text text-danger\"\r\n            *ngIf=\"contactForm.controls.firstname.touched && contactForm.controls.firstname.errors?.required\">\r\n            Please enter first name.!\r\n        </small>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label for=\"exampleInputlastname\">Last Name</label>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"lastname\" placeholder=\"Last Name\">\r\n        <small class=\"form-text text-danger\"\r\n            *ngIf=\"contactForm.controls.lastname.touched && contactForm.controls.lastname.errors?.required\">\r\n            Please enter last name.!\r\n        </small>\r\n    </div>\r\n\r\n\r\n    <div class=\"form-group\">\r\n        <label for=\"exampleInputphonenumber\">Phone Number</label>\r\n        <input type=\"number\" class=\"form-control\" formControlName=\"phonenumber\" placeholder=\"Phone Number\">\r\n        <small class=\"form-text text-danger\"\r\n            *ngIf=\"contactForm.controls.phonenumber.touched && contactForm.controls.phonenumber.errors?.required\">\r\n            Please enter phone number.!\r\n        </small>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label for=\"exampleInputemail\">Email</label>\r\n        <input type=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"Email\">\r\n        <small class=\"form-text text-danger\"\r\n            *ngIf=\"contactForm.controls.email.touched && contactForm.controls.email.errors?.required\">\r\n            Please enter email.!\r\n        </small>\r\n        <small class=\"form-text text-danger\"\r\n            *ngIf=\"contactForm.controls.email.touched && contactForm.controls.email.errors?.email\">\r\n            Enter the valid email .!\r\n        </small>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"exampleInputmessage\">Message</label>\r\n        <textarea type=\"text\" class=\"form-control\" formControlName=\"message\" placeholder=\"Message\"></textarea>\r\n        <small class=\"form-text text-danger\"\r\n            *ngIf=\"contactForm.controls.message.touched && contactForm.controls.message.errors?.required\">\r\n            Please enter message.!\r\n        </small>\r\n\r\n    </div>\r\n    <div class=\"row my-4\">\r\n\t\t\t<div class=\"col-2\">\r\n\t\t\t\t<button class=\"btn btn-block btn-success\" type=\"submit\">Submit</button>\r\n\t\t\t</div>\r\n\t</div>\r\n\r\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLandingPageLandingPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3 class=\"mb-2\">Intro Text</h3>\r\n<hr />\r\n<div class=\"container row mx-auto\" style=\"width: 700px\">\r\n\t<div class=\"introtext\">\r\n\t\t<h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\r\n            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type\r\n             and scrambled it to make a type specimenbook. It has survived not only five centuries, but also \r\n             the leap into electronic typesetting, remaining essentially unchanged.\r\n        </h5>\r\n\t</div>\r\n\t\t<button class=\"apply-btn\" type=\"submit\">APPLY FOR TRAINER</button>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/place-fitness-trainer-appointment/place-fitness-trainer-appointment.component.html":
  /*!******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/place-fitness-trainer-appointment/place-fitness-trainer-appointment.component.html ***!
    \******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPlaceFitnessTrainerAppointmentPlaceFitnessTrainerAppointmentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3 class=\"mb-2\">Fill the details below to place the appointment</h3>\r\n<hr/>\r\n<div class=\"container row mx-auto\" style=\"width: 400px\">\r\n\t<form>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-6\">\r\n\t\t\t\t<!--  First Name -->\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"firstname\">First Name</label>\r\n\t\t\t\t\t<input type=\"text\" autofocus required #firstname=\"ngModel\" [class.is-invalid]=\"firstname.invalid && firstname.touched\" \r\n                    class=\"form-control\" name=\"firstname\" placeholder=\"First Name\" [(ngModel)]=\"userservice.appointmentData.firstname\"/>\r\n\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-6\">\r\n\t\t\t\t\t<!--  Last Name -->\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"lastname\">Last Name</label>\r\n\t\t\t\t\t\t<input type=\"text\" required #lastname=\"ngModel\" [class.is-invalid]=\"lastname.invalid && lastname.touched\" \r\n                        class=\"form-control\" name=\"lastname\" placeholder=\"Last Name\" [(ngModel)]=\"userservice.appointmentData.lastname\"/>\r\n\t\t\t\t    </div>\r\n\t\t\t\t</div>\r\n        </div>\r\n\r\n\t\t<div class=\"row\">\r\n\t\t\t<!--  Age -->\r\n\t\t\t<div class=\"form-group col-3\">\r\n                <label for=\"age\">Age</label>\r\n                <input type=\"number\" required min=\"16\" max=\"60\" #age=\"ngModel\" [class.is-invalid]=\"age.invalid && age.touched\" \r\n                class=\"form-control\" name=\"age\" placeholder=\"Age\" [(ngModel)]=\"userservice.appointmentData.age\"/>\r\n            </div>\r\n            <!--  Phone Number -->\r\n            <div class=\"form-group col-9\">\r\n                <label for=\"phonenumber\">Phone Number</label>\r\n                <input type=\"tel\" required #phonenumber=\"ngModel\" pattern=\"^\\d{10}$\" [class.is-invalid]=\"phonenumber.invalid && phonenumber.touched\" \r\n                class=\"form-control\" name=\"phonenumber\"placeholder=\"Phone Number\" [(ngModel)]=\"userservice.appointmentData.phonenumber\"/>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n        <!--  Email -->\r\n            <div class=\"form-group col-12\">\r\n                <label for=\"email\">Email</label>\r\n                <input type=\"email\" required #phonenumber=\"ngModel\" pattern=\"^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$\" [class.is-invalid]=\"phonenumber.invalid && phonenumber.touched\"\r\n                 class=\"form-control\" name=\"email\" placeholder=\"Email\" [(ngModel)]=\"userservice.appointmentData.email\"/>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n        <!-- Street Address -->\r\n            <div class=\"form-group col-12\">\r\n                <label for=\"streetaddress\">Street</label>\r\n                <input type=\"text\" required #streetaddress=\"ngModel\" [class.is-invalid]=\"streetaddress.invalid && streetaddress.touched\" \r\n                class=\"form-control\" name=\"streetaddress\" placeholder=\"Street Address\" [(ngModel)]=\"userservice.appointmentData.streetaddress\"/>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n\t\t\t<!--  City -->\r\n\t\t\t<div class=\"form-group col-6\">\r\n                <label for=\"city\">City</label>\r\n                <input type=\"text\" required #city=\"ngModel\" [class.is-invalid]=\"city.invalid && city.touched\" \r\n                 class=\"form-control\" name=\"city\" placeholder=\"City\" [(ngModel)]=\"userservice.appointmentData.city\"/>\r\n            </div>\r\n            <!-- State -->\r\n            <div class=\"form-group col-6\">\r\n                <label for=\"state\">State</label>\r\n                <input type=\"text\" required #state=\"ngModel\" [class.is-invalid]=\"state.invalid && state.touched\" \r\n                 class=\"form-control\" name=\"state\" placeholder=\"State\" [(ngModel)]=\"userservice.appointmentData.state\"/>\r\n            </div>\r\n        </div>            \r\n\t\t\r\n        <div class=\"row\">\r\n\t\t\t<!--  Country -->\r\n\t\t\t<div class=\"form-group col-6\">\r\n                <label for=\"country\">Country</label>\r\n                <input type=\"text\" required #country=\"ngModel\" [class.is-invalid]=\"country.invalid && country.touched\" \r\n                class=\"form-control\" name=\"country\" placeholder=\"Country\" [(ngModel)]=\"userservice.appointmentData.country\"/>\r\n            </div>\r\n            <!-- Pincode -->\r\n            <div class=\"form-group col-6\">\r\n                <label for=\"pincode\">Pincode</label>\r\n                <input type=\"number\" required min= \"0\" pattern=\"^\\d{6}$\" #pincode=\"ngModel\" [class.is-invalid]=\"pincode.invalid && pincode.touched\" \r\n                class=\"form-control\" name=\"pincode\" placeholder=\"Pincode\" [(ngModel)]=\"userservice.appointmentData.pincode\"/>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n        <!--  TrainerPreference -->\r\n            <div class=\"form-group col-12\">\r\n                <label for=\"trainerreference\">TrainerPreference</label>\r\n                <input type=\"text\" required #trainerreference=\"ngModel\" [class.is-invalid]=\"trainerreference.invalid && trainerreference.touched\" \r\n                class=\"form-control\" name=\"trainerreference\" placeholder=\"Male/Female\" [(ngModel)]=\"userservice.appointmentData.trainerreference\"/>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n        <!-- physiotherapist -->\r\n            <div class=\"form-group col-12\">\r\n                <label for=\"physiotherapist\">Physiotherapist</label>\r\n                <input type=\"text\" required #physiotherapist=\"ngModel\" [class.is-invalid]=\"physiotherapist.invalid && physiotherapist.touched\" \r\n                class=\"form-control\" name=\"physiotherapist\" placeholder=\"Yes/No\" [(ngModel)]=\"userservice.appointmentData.physiotherapist\"/>\r\n            </div>\r\n        </div>\r\n\r\n         <div class=\"row\">\r\n        <!--  Packages -->\r\n            <div class=\"form-group col-12\">\r\n                <label for=\"packages\">Packages</label>\r\n                <input type=\"number\" required #packages=\"ngModel\" [class.is-invalid]=\"packages.invalid && packages.touched\" \r\n                class=\"form-control\" name=\"packages\" placeholder=\"Packages\" [(ngModel)]=\"userservice.appointmentData.packages\"/>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n\t\t\t<!--  INR -->\r\n\t\t\t<div class=\"form-group col-6\">\r\n                <label for=\"inr\">INR</label>\r\n                <input type=\"number\" required #inr=\"ngModel\" [class.is-invalid]=\"inr.invalid && inr.touched\" \r\n                class=\"form-control\" name=\"inr\" placeholder=\"inr\" [(ngModel)]=\"userservice.appointmentData.inr\"/>\r\n            </div>\r\n            <!-- Paisa -->\r\n            <div class=\"form-group col-6\">\r\n                <label for=\"paisa\">Paisa</label>\r\n                <input type=\"number\" required #paisa=\"ngModel\" [class.is-invalid]=\"paisa.invalid && paisa.touched\" \r\n                class=\"form-control\" name=\"paisa\" placeholder=\"paisa\" [(ngModel)]=\"userservice.appointmentData.paisa\"/>\r\n            </div>\r\n        </div>\r\n\r\n\t\t<div class=\"row my-4\">\r\n\t\t\t<div class=\"col-12\">\r\n\t\t\t\t<button class=\"btn btn-block btn-success\" type=\"submit\" (click) = \"createandUpdate(userservice.appointmentData)\">Submit</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/view-appointment/view-appointment.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-appointment/view-appointment.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewAppointmentViewAppointmentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"table-responsive\">\r\n    <table class=\"table table-stripped table-hover\">\r\n        <thead>\r\n            <tr>\r\n                <th scope=\"col\" class=\"h6\">Sr.no</th>\r\n                <th scope=\"col\" class=\"h6\">Name</th>\r\n                <th scope=\"col\" class=\"h6\">Age</th>\r\n                <th scope=\"col\" class=\"h6\">Phone</th>\r\n                <th scope=\"col\" class=\"h6\">Email</th>\r\n                <th scope=\"col\" class=\"h6\">Address</th>\r\n                <th scope=\"col\" class=\"h6\">TrainerPreference</th>\r\n                <th scope=\"col\" class=\"h6\">Physiotherapist</th>\r\n                <th scope=\"col\" class=\"h6\">Package</th>\r\n                <th scope=\"col\" class=\"h6\">INR.Paisa</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor = \"let obj of appointmentList\">\r\n                <td>{{obj.id}}</td>\r\n                <td>{{obj.firstname}} {{obj.lastname}} </td> \r\n                <td>{{obj.age}}</td>\r\n                <td>{{obj.phonenumber}}</td>\r\n                <td>{{obj.email}}</td>\r\n                <td>{{obj.streetaddress}}, {{obj.city}}-{{obj.pincode}}, {{obj.state}}, {{obj.country}}</td>\r\n                <td>{{obj.trainerpreference}}</td>\r\n                <td>{{obj.physiotherapist}}</td>\r\n                <td>{{obj.package}}</td>\r\n                <td>{{obj.inr}}.{{obj.paisa}}</td>\r\n                <td>\r\n                    <button class=\"btn btn-primary btn-sm\" (click) = \"edit(obj)\">Edit</button>\r\n                </td>\r\n                <td>\r\n                    <button class=\"btn btn-danger btn-sm\" (click)=\"deleteAppointment(obj.id)\">Delete</button>\r\n                </td>            \r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    \r\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/_services/index.ts":
  /*!************************************!*\
    !*** ./src/app/_services/index.ts ***!
    \************************************/

  /*! exports provided: UserService */

  /***/
  function srcApp_servicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./user.service */
    "./src/app/_services/user.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"];
    });
    /***/

  },

  /***/
  "./src/app/_services/user.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/_services/user.service.ts ***!
    \*******************************************/

  /*! exports provided: UserService */

  /***/
  function srcApp_servicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var UserService_1;
    var httpOptions = {
      headers: new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
        "Content-Type": "application/json"
      })
    };

    var UserService = UserService_1 = /*#__PURE__*/function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
        this.appointmentData = {
          firstname: '',
          lastname: '',
          age: null,
          phonenumber: null,
          email: '',
          streetaddress: '',
          city: '',
          state: '',
          country: '',
          pincode: null,
          trainerpreference: '',
          physiotherapist: '',
          packages: null,
          inr: null,
          paisa: null,
          id: null
        };
      }

      _createClass(UserService, [{
        key: "postfitnessdata",
        value: function postfitnessdata(obj) {
          return this.http.post(UserService_1.BaseUrl + 'allfriends', obj, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response.json();
          }));
        }
      }, {
        key: "getfitnessdata",
        value: function getfitnessdata() {
          return this.http.get(UserService_1.BaseUrl + 'allfriends', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response.json();
          }));
        }
      }, {
        key: "deleteAppointment",
        value: function deleteAppointment(id) {
          return this.http["delete"](UserService_1.BaseUrl + 'allfriends' + '/' + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response.json();
          }));
        }
      }]);

      return UserService;
    }();

    UserService.BaseUrl = "http://localhost:6565/";

    UserService.ctorParameters = function () {
      return [{
        type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]
      }];
    };

    UserService = UserService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])], UserService);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./landing-page/landing-page.component */
    "./src/app/landing-page/landing-page.component.ts");
    /* harmony import */


    var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./contact-us/contact-us.component */
    "./src/app/contact-us/contact-us.component.ts");
    /* harmony import */


    var _view_appointment_view_appointment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./view-appointment/view-appointment.component */
    "./src/app/view-appointment/view-appointment.component.ts");
    /* harmony import */


    var _place_fitness_trainer_appointment_place_fitness_trainer_appointment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./place-fitness-trainer-appointment/place-fitness-trainer-appointment.component */
    "./src/app/place-fitness-trainer-appointment/place-fitness-trainer-appointment.component.ts");

    var routes = [{
      path: "landing-page",
      component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__["LandingPageComponent"]
    }, {
      path: "place-fitness-trainer-appointment",
      component: _place_fitness_trainer_appointment_place_fitness_trainer_appointment_component__WEBPACK_IMPORTED_MODULE_6__["PlaceFitnessTrainerAppointmentComponent"]
    }, {
      path: "view-appointment",
      component: _view_appointment_view_appointment_component__WEBPACK_IMPORTED_MODULE_5__["ViewAppointmentComponent"]
    }, {
      path: "contact-us",
      component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_4__["ContactUsComponent"]
    }, {
      path: "**",
      redirectTo: "landing-page"
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(router) {
        _classCallCheck(this, AppComponent);

        this.router = router;
        this.title = 'angularSPA';
      }

      _createClass(AppComponent, [{
        key: "landingpage",
        value: function landingpage() {
          this.router.navigateByUrl("landing-page");
        }
      }, {
        key: "placeAppointment",
        value: function placeAppointment() {
          this.router.navigateByUrl("place-fitness-trainer-appointment");
        }
      }, {
        key: "viewAppointment",
        value: function viewAppointment() {
          this.router.navigateByUrl("view-appointment");
        }
      }, {
        key: "contactUspage",
        value: function contactUspage() {
          this.router.navigateByUrl("contact-us");
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./contact-us/contact-us.component */
    "./src/app/contact-us/contact-us.component.ts");
    /* harmony import */


    var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./landing-page/landing-page.component */
    "./src/app/landing-page/landing-page.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/fesm2015/http.js");
    /* harmony import */


    var _place_fitness_trainer_appointment_place_fitness_trainer_appointment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./place-fitness-trainer-appointment/place-fitness-trainer-appointment.component */
    "./src/app/place-fitness-trainer-appointment/place-fitness-trainer-appointment.component.ts");
    /* harmony import */


    var _view_appointment_view_appointment_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./view-appointment/view-appointment.component */
    "./src/app/view-appointment/view-appointment.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_6__["ContactUsComponent"], _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_7__["LandingPageComponent"], _place_fitness_trainer_appointment_place_fitness_trainer_appointment_component__WEBPACK_IMPORTED_MODULE_10__["PlaceFitnessTrainerAppointmentComponent"], _view_appointment_view_appointment_component__WEBPACK_IMPORTED_MODULE_11__["ViewAppointmentComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_http__WEBPACK_IMPORTED_MODULE_9__["HttpModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
      exports: [_view_appointment_view_appointment_component__WEBPACK_IMPORTED_MODULE_11__["ViewAppointmentComponent"], _place_fitness_trainer_appointment_place_fitness_trainer_appointment_component__WEBPACK_IMPORTED_MODULE_10__["PlaceFitnessTrainerAppointmentComponent"], _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_6__["ContactUsComponent"], _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_7__["LandingPageComponent"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/contact-us/contact-us.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/contact-us/contact-us.component.ts ***!
    \****************************************************/

  /*! exports provided: Contact, ContactUsComponent */

  /***/
  function srcAppContactUsContactUsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Contact", function () {
      return Contact;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function () {
      return ContactUsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var Contact = function Contact(firstname, lastname, phonenumber, email, message) {
      _classCallCheck(this, Contact);

      this.firstname = firstname;
      this.lastname = lastname;
      this.phonenumber = phonenumber;
      this.email = email;
      this.message = message;
    };

    var ContactUsComponent = /*#__PURE__*/function () {
      function ContactUsComponent(fb) {
        _classCallCheck(this, ContactUsComponent);

        this.fb = fb;
        this.contactdata = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.obj = {};
      }

      _createClass(ContactUsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.contactForm = this.fb.group({
            firstname: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            lastname: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            phonenumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[^ @]*@[^ @]*")]],
            message: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.obj = Object.assign({}, this.contactForm.value, this.obj);
          this.contactForm.value;
          console.log("LOG: LoginComponent -> onSubmit -> this.contactForm.value", this.contactForm.value);

          if (this.contactForm.valid) {
            this.contactdata.emit(new Contact(this.contactForm.value.firstname, this.contactForm.value.lastname, this.contactForm.value.phonenumber, this.contactForm.value.email, this.contactForm.value.message));
          }
        }
      }]);

      return ContactUsComponent;
    }();

    ContactUsComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ContactUsComponent.prototype, "contactdata", void 0);
    ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact-us',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact-us.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html"))["default"]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])], ContactUsComponent);
    /***/
  },

  /***/
  "./src/app/landing-page/landing-page.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/landing-page/landing-page.component.ts ***!
    \********************************************************/

  /*! exports provided: LandingPageComponent */

  /***/
  function srcAppLandingPageLandingPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function () {
      return LandingPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LandingPageComponent = /*#__PURE__*/function () {
      function LandingPageComponent(router) {
        _classCallCheck(this, LandingPageComponent);

        this.router = router;
      }

      _createClass(LandingPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "navpage",
        value: function navpage() {
          this.router.navigateByUrl("place-gift-card-order-page");
        }
      }]);

      return LandingPageComponent;
    }();

    LandingPageComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-landing-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./landing-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page.component.html"))["default"]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], LandingPageComponent);
    /***/
  },

  /***/
  "./src/app/place-fitness-trainer-appointment/place-fitness-trainer-appointment.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/place-fitness-trainer-appointment/place-fitness-trainer-appointment.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: Fitness, PlaceFitnessTrainerAppointmentComponent */

  /***/
  function srcAppPlaceFitnessTrainerAppointmentPlaceFitnessTrainerAppointmentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Fitness", function () {
      return Fitness;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaceFitnessTrainerAppointmentComponent", function () {
      return PlaceFitnessTrainerAppointmentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_services */
    "./src/app/_services/index.ts");

    var Fitness = function Fitness(inr, paisa, streetaddress, city, state, country, pincode, phonenumber, email, firstname, lastname, age, trainerpreference, physiotherapist, packages) {
      _classCallCheck(this, Fitness);

      this.inr = inr;
      this.paisa = paisa;
      this.streetaddress = streetaddress;
      this.city = city;
      this.state = state;
      this.country = country;
      this.pincode = pincode;
      this.phonenumber = phonenumber;
      this.email = email;
      this.firstname = firstname;
      this.lastname = lastname;
      this.age = age;
      this.trainerpreference = trainerpreference;
      this.physiotherapist = physiotherapist;
      this.packages = packages;
    };

    var PlaceFitnessTrainerAppointmentComponent = /*#__PURE__*/function () {
      function PlaceFitnessTrainerAppointmentComponent(userservice) {
        _classCallCheck(this, PlaceFitnessTrainerAppointmentComponent);

        this.userservice = userservice;
      }

      _createClass(PlaceFitnessTrainerAppointmentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "createandUpdate",
        value: function createandUpdate(appointmentData) {
          console.log(appointmentData);

          if (appointmentData.id != null) {
            console.log("update");
            this.updatefitnessdata(appointmentData);
          } else {
            console.log("create");
            this.postfitnessdata(appointmentData);
          }
        }
      }, {
        key: "postfitnessdata",
        value: function postfitnessdata(obj) {
          this.userservice.postfitnessdata(obj).subscribe();
        }
      }, {
        key: "updatefitnessdata",
        value: function updatefitnessdata(obj) {}
      }]);

      return PlaceFitnessTrainerAppointmentComponent;
    }();

    PlaceFitnessTrainerAppointmentComponent.ctorParameters = function () {
      return [{
        type: _services__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    PlaceFitnessTrainerAppointmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-place-fitness-trainer-appointment',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./place-fitness-trainer-appointment.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/place-fitness-trainer-appointment/place-fitness-trainer-appointment.component.html"))["default"]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["UserService"]])], PlaceFitnessTrainerAppointmentComponent);
    /***/
  },

  /***/
  "./src/app/view-appointment/view-appointment.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/view-appointment/view-appointment.component.ts ***!
    \****************************************************************/

  /*! exports provided: ViewAppointmentComponent */

  /***/
  function srcAppViewAppointmentViewAppointmentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewAppointmentComponent", function () {
      return ViewAppointmentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_services */
    "./src/app/_services/index.ts");

    var ViewAppointmentComponent = /*#__PURE__*/function () {
      function ViewAppointmentComponent(userservice) {
        _classCallCheck(this, ViewAppointmentComponent);

        this.userservice = userservice;
      }

      _createClass(ViewAppointmentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getfitness();
        }
      }, {
        key: "getfitness",
        value: function getfitness() {
          var _this = this;

          this.userservice.getfitnessdata().subscribe(function (data) {
            _this.appointmentList = data;
          });
        }
      }, {
        key: "deleteAppointment",
        value: function deleteAppointment(id) {
          var _this2 = this;

          console.log(id);
          this.userservice.deleteAppointment(id).subscribe(function (data) {
            _this2.getfitness();
          });
        }
      }, {
        key: "edit",
        value: function edit(obj) {
          console.log(obj);
          this.userservice.appointmentData = Object.assign({}, obj);
        }
      }]);

      return ViewAppointmentComponent;
    }();

    ViewAppointmentComponent.ctorParameters = function () {
      return [{
        type: _services__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    ViewAppointmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view-appointment',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./view-appointment.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/view-appointment/view-appointment.component.html"))["default"]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["UserService"]])], ViewAppointmentComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\angular-fsd-fitness-jest\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map