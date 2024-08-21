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
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleLogin = exports.handleSignup = void 0;
const authService_1 = require("../services/authService");
const handleSignup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, authService_1.signup)(req.body);
        res.status(201).json(result);
    }
    catch (error) {
        res.status(400).json({ message: error });
    }
});
exports.handleSignup = handleSignup;
const handleLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, authService_1.login)(req.body.email, req.body.password);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(400).json({ message: error });
    }
});
exports.handleLogin = handleLogin;
