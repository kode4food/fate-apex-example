"use strict";
"fate-compiler:0.5.11";
const fate = require('fatejs');
const r = fate.Runtime;
const r0 = r.createDoBlock,
    l0 = {
        "i am a config key": "and i am its value"
    };

function s(c, x) {
    let v0;
    v0 = r0(function*() {
        let _;
        _ = l0;
        return _;
    });
    x["config"] = v0;
}
module.__fateModule = true;
module.result = s(fate.globals({
    __filename
}), module.exports);