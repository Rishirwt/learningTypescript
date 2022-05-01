"use strict";
exports.__esModule = true;
var CricketCoach_1 = require("./CricketCoach");
var GolfCoach_1 = require("./GolfCoach");
var cc = new CricketCoach_1.CricketCoach();
var gc = new GolfCoach_1.GolfCoach();
console.log(cc.getdaily());
console.log(gc.getdaily());
