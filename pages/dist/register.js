"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var router_1 = require("next/router");
var axios_1 = require("axios");
var Header_1 = require("../components/Header");
var Footer_1 = require("../components/Footer");
var Dialog_1 = require("@material-ui/core/Dialog");
var DialogActions_1 = require("@material-ui/core/DialogActions");
var Button_1 = require("@material-ui/core/Button");
var DialogTitle_1 = require("@material-ui/core/DialogTitle");
var styles_1 = require("@material-ui/core/styles");
var core_1 = require("@material-ui/core");
var router_2 = require("next/router");
function Register() {
    var _this = this;
    var router = router_1.useRouter();
    var _a = react_1.useState(""), name = _a[0], setName = _a[1];
    var _b = react_1.useState(""), email = _b[0], setEmail = _b[1];
    // const [phoneNumber, setPhoneNumber] = useState("");
    var _c = react_1.useState(""), password = _c[0], setPassword = _c[1];
    var _d = react_1.useState(""), password2 = _d[0], setPassword2 = _d[1];
    var _e = react_1.useState(false), dupEmailOpen = _e[0], setDupEmailOpen = _e[1];
    var _f = react_1.useState(false), badPassAlert = _f[0], setBadPassAlert = _f[1];
    var _g = react_1.useState(true), isAllowed = _g[0], setIsAllowed = _g[1];
    var StyledButton2 = styles_1.withStyles({
        root: {
            // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            borderRadius: 5,
            backgroundColor: "linear-gradient(144.8deg, rgba(10, 9, 9, 0.5) 0%, rgba(56, 56, 56, 0.5) 100%), #212121",
            border: "1px solid #ffffff",
            fontSize: "calc(1vw + 4vh)",
            color: "white",
            padding: "0 30px",
            fontWeight: "bold",
            // position: "absolute",
            bottom: 0,
            "&:hover": {
                // fontStyle: "italic",
                fontWeight: "bold",
                backgroundColor: "linear-gradient(144.8deg, rgba(10, 9, 9, 0.5) 0%, rgba(56, 56, 56, 0.5) 100%), #212121",
                color: "#black",
                transform: "scale(1.05)",
                transitionDuration: ".5s"
            }
        },
        label: {
            textTransform: "capitalize"
        }
    })(Button_1["default"]);
    var StyledButton = styles_1.withStyles({
        root: {
            // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            borderRadius: 5,
            backgroundColor: "linear-gradient(144.8deg, rgba(10, 9, 9, 0.5) 0%, rgba(56, 56, 56, 0.5) 100%), #212121",
            border: "1px solid #ffffff",
            fontSize: "calc(1vw + 2vh)",
            color: "white",
            height: "2em",
            padding: "0 30px",
            fontWeight: "bold",
            // position: "absolute",
            bottom: 0,
            "&:hover": {
                // fontStyle: "italic",
                fontWeight: "bold",
                backgroundColor: "linear-gradient(144.8deg, rgba(10, 9, 9, 0.5) 0%, rgba(56, 56, 56, 0.5) 100%), #212121",
                color: "#black",
                transform: "scale(1.05)",
                transitionDuration: ".5s"
            }
        },
        label: {
            textTransform: "capitalize"
        }
    })(Button_1["default"]);
    var handleDupEmail = function () {
        setDupEmailOpen(true);
    };
    var handleDupEmailClose = function (e) {
        setDupEmailOpen(false);
        router_2["default"].reload();
    };
    var handleBadPassAlert = function () {
        setBadPassAlert(true);
    };
    var handleBadPassAlertClose = function (e) {
        setBadPassAlert(false);
        router_2["default"].reload();
    };
    var nameChange = function (e) {
        setName(e.target.value);
    };
    var emailChange = function (e) {
        setEmail(e.target.value);
    };
    // const phoneNumberChange = (e) => {
    //   setPhoneNumber(e.target.value);
    // };
    var passwordChange = function (e) {
        setPassword(e.target.value);
    };
    var passwordChange2 = function (e) {
        setPassword2(e.target.value);
    };
    var onRegister = function (event) { return __awaiter(_this, void 0, void 0, function () {
        var res, decoded, error_1, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsAllowed(false);
                    event.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, , 7]);
                    if (password !== password2) {
                        throw "password != password2";
                    }
                    if (!name || !email) {
                        router_2["default"].reload();
                    }
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, axios_1["default"]("/api/register", {
                            method: "post",
                            data: {
                                name: name,
                                email: email,
                                password: password
                            }
                        })];
                case 3:
                    res = _a.sent();
                    console.log(res.data);
                    decoded = jwt_decode(token);
                    console.log(decoded);
                    res.status === 253 && router.push("/checkout/landing");
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    if (error_1.response.status) {
                        throw error_1.response.status;
                    }
                    else {
                        console.log("Error in onRegister().");
                    }
                    return [3 /*break*/, 5];
                case 5: return [3 /*break*/, 7];
                case 6:
                    error_2 = _a.sent();
                    // Duplicate email
                    if (error_2 === 409) {
                        console.log("Duplicate email.");
                        handleDupEmail();
                    }
                    else if (error_2 === "password != password2") {
                        console.log("Passwords do not match.");
                        handleBadPassAlert();
                    }
                    else {
                        console.log("Other Error");
                        console.log("Error: " + error_2);
                    }
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); };
    return (<div>
      <Dialog_1["default"] open={dupEmailOpen} onClose={handleDupEmailClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" PaperProps={{
        style: {
            backgroundColor: "#212121",
            boxShadow: "-25px -20px 300px rgba(44, 44, 44, 0.5), 10px 10px 22px rgba(28, 26, 26, 0.5)"
        }
    }}>
        <DialogTitle_1["default"] id="alert-dialog-title" style={{ color: "white", fontSize: "" }}>
          {"Your email has already been registered."}
        </DialogTitle_1["default"]>
        <DialogActions_1["default"] style={{ justifyContent: "center" }}>
          <a className="log" href="/login" style={{
        border: "2px solid #FFFFFF",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
        marginBottom: 20,
        width: "3em",
        borderRadius: 5
    }}>
            Log In
          </a>
        </DialogActions_1["default"]>
      </Dialog_1["default"]>

      <Dialog_1["default"] open={badPassAlert} onClose={handleDupEmailClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" PaperProps={{
        style: {
            backgroundColor: "#212121",
            boxShadow: "-25px -20px 300px rgba(44, 44, 44, 0.5), 10px 10px 22px rgba(28, 26, 26, 0.5)"
        }
    }}>
        <DialogTitle_1["default"] id="alert-dialog-title" style={{ color: "white", fontSize: "" }}>
          {"Passwords do not match."}
        </DialogTitle_1["default"]>
        <DialogActions_1["default"] style={{ justifyContent: "center" }}>
          <StyledButton onClick={handleBadPassAlertClose}>
            Try Again
          </StyledButton>
        </DialogActions_1["default"]>
      </Dialog_1["default"]>

      <div style={{
        backgroundImage: "url('img/Union.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top right",
        backgroundSize: "contain"
    }}>
        <Header_1["default"] />
        <div id="register" className="container" style={{ marginTop: '2vh' }}>
          
          <form className="card" style={{
        marginLeft: "auto",
        marginRight: "auto",
        width: "25em",
        paddingTop: 10
    }}>
            <h1 style={{ textAlign: "center", marginTop: '.5em', margin: 0, width: "100%" }}>Register</h1>
            <label style={{ marginTop: 5 }}>Full Name</label>
            <input type="text" name="fullname" onChange={nameChange}/>
            
            <label>Email Address</label>
            <input type="email" name="emailadd" onChange={emailChange}/>
            <label>Password</label>
            <input type="password" name="password" onChange={passwordChange}/>
            <label>Confirm Password</label>
            <input type="password" name="password2" onChange={passwordChange2}/>
            <div className="signupbtn" style={{ marginBottom: '2vh', marginTop: '3vh' }}>
              <core_1.NoSsr>
                <StyledButton2 onClick={onRegister}>
                  Sign Up
                </StyledButton2>
              </core_1.NoSsr>
            </div>
            <a href="/login" style={{ fontSize: '1.5em' }}>
              Already have an account?
            </a>
            <div className="twosc" style={{ marginTop: '2vh', marginBottom: '1.5vh' }}>
              <core_1.NoSsr>
                <StyledButton onClick={function () { return router.push("/login"); }}>
                  Log In
                </StyledButton>
              </core_1.NoSsr>
            </div>
          </form>
        </div>
      </div>
      <Footer_1["default"] />
    </div>);
}
exports["default"] = Register;
