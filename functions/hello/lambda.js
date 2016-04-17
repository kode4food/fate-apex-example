"use strict";
"fate-compiler:0.5.11";
const fate = require('fatejs');
const r = fate.Runtime;
const l0 = "Error: Event isn't matched to a handler";

function s(c, x) {
    let _;
    let v0;
    _ = v0 = function(v1, v2, v3) {
        let _;
        _ = v3(l0);
        return _;
    };
    x["handle"] = v0;
    return _;
}
module.__fateModule = true;
module.result = s(fate.globals({
    __filename
}), module.exports);