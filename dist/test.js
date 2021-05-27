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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var p_queue_1 = __importDefault(require("p-queue"));
var delay_1 = __importDefault(require("delay"));
var p_retry_1 = __importDefault(require("p-retry"));
var ueClient = new index_1.Usercom({
    subdomain: 'mangools-staging',
    token: 'd8DtQyRoPXFfNuqXfPRVJnTCf0vqBD0Q472FMnwXyrVXOwgt9ptmaaYMH4jf6bm3',
});
// const main = async () => {
//   const queue = new PQueue({ concurrency: 5 });
//   for (let i = 0; i < 1000; i++) {
//     const task = queue.add(async () => {
//       try {
//         await ueClient.user.update({ userId: 1, customAttributes: { ['c1']: i } });
//       } catch (e) {
//         console.log('<<<<<<<<<<<<<<<---------->>>>>>>>>>>>>>>');
//         console.log(e);
//         console.log('<<<<<<<<<<<<<<<---------->>>>>>>>>>>>>>>');
//         process.exit();
//       }
//     });
//     pRetry
//   }
//   let count = 0;
//   queue.on('active', () => {
//     queue.console.log(`Working on item #${++count}.  Size: ${queue.size}  Pending: ${queue.pending}`);
//   });
//   await queue.onIdle();
//   console.log('done');
// };
// main();
var queue = new p_queue_1.default({ concurrency: 3, timeout: 3000 });
var start = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                queue.add(function () { return createTask(1).catch(function () { return console.log('caught it!'); }); });
                queue.add(function () { return createTask(2).catch(function () { return console.log('caught it!'); }); });
                queue.add(function () { return createTask(3).catch(function () { return console.log('caught it!'); }); });
                return [4 /*yield*/, queue.onIdle()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
function createTask(num) {
    return __awaiter(this, void 0, void 0, function () {
        var e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, p_retry_1.default(function (attempt) { return req(num, { attempt: attempt }); }, {
                            retries: 1,
                            // onFailedAttempt: async (e) => {
                            //   // if (e.retriesLeft === 0) {
                            //   //   console.log('no more retries');
                            //   // }
                            //   // console.log('failed req num', num, e.retriesLeft);
                            //   // console.log(e);
                            // },
                        })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    throw e_1;
                case 3: return [2 /*return*/];
            }
        });
    });
}
function req(num, _a) {
    var attempt = _a.attempt;
    return __awaiter(this, void 0, void 0, function () {
        var rnd;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log("Starting req number " + num + ", attempt " + attempt);
                    return [4 /*yield*/, delay_1.default(500)];
                case 1:
                    _b.sent();
                    rnd = Math.random();
                    if (rnd > 0.5)
                        throw new Error("An error was randomly generated. " + num);
                    console.log(num, 'done');
                    return [2 /*return*/];
            }
        });
    });
}
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, start()];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                e_2 = _a.sent();
                console.log('<<<<<<<<<<<<<<<---------->>>>>>>>>>>>>>>');
                console.log(e_2);
                console.log('<<<<<<<<<<<<<<<---------->>>>>>>>>>>>>>>');
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
main();
//# sourceMappingURL=test.js.map