"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
dotenv_1.config();
var Env = /** @class */ (function () {
    function Env() {
    }
    /**
     * Get environment value
     * @param {string} .env variable
     */
    Env.prototype.get = function (key) {
        return process.env[key] || undefined;
    };
    return Env;
}());
exports.default = new Env();
