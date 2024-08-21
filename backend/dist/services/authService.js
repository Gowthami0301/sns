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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.signup = void 0;
const User_1 = require("../models/User");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jwtUtils_1 = require("../utils/jwtUtils");
const signup = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const existingUser = yield User_1.User.findOne({ email: userData.email });
    if (existingUser) {
        throw new Error('User already exists');
    }
    const user = new User_1.User(userData);
    yield user.save();
    return {
        token: (0, jwtUtils_1.generateToken)(user),
        user: { id: user._id, email: user.email, role: user.role },
    };
});
exports.signup = signup;
const login = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.User.findOne({ email });
    if (!user) {
        throw new Error('Invalid credentials');
    }
    const isMatch = yield bcryptjs_1.default.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Invalid credentials');
    }
    return {
        token: (0, jwtUtils_1.generateToken)(user),
        user: { id: user._id, email: user.email, role: user.role },
    };
});
exports.login = login;
