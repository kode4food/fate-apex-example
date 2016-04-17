"use strict";
"fate-compiler:0.5.11";
const fate = require('fatejs');
const r = fate.Runtime;
const r0 = r.importer,
    b0 = r0("pattern"),
    b1 = r0("./lambda"),
    b2 = r0("./config"),
    r1 = r.definePattern,
    r2 = r.isObject,
    r3 = r.isMatch,
    r4 = r.ensureFunction,
    r5 = r.isFalse,
    r6 = r.createDoBlock,
    r7 = r.awaitAll;

function s(c, x) {
    let _;
    let h0, v0, h1, v4, v1, h2, v2, v3, h3;
    h0 = b0(c["__dirname"]);
    v0 = h0["NonEmptyString"];
    h1 = b1(c["__dirname"]);
    v1 = h1["handle"];
    h2 = b2(c["__dirname"]);
    v2 = h2["config"];
    v3 = r1(function(x) {
        let p, p1;
        p = x;
        return (r2(p) && r3(v0, p["name"]) && (p1 = p["age"], (p1 > 20)));
    });
    h3 = r4(v1);
    _ = v4 = function(v5, v6, v7) {
        let _;
        if (r5(r3(r1(function(x) {
                let p;
                p = x;
                return r3(v3, p);
            }), v5))) {
            return h3.apply(null, arguments);
        }
        _ = r6(function*() {
            let _;
            let v9 = c["print"];
            let va = c["null"];
            let v8, h4;
            h4 = (yield [r7, [v2]]);
            v8 = h4[0];
            _ = v9(v8);
            _ = v7(va, {
                "hello": v5["name"]
            });
            return _;
        });
        return _;
    };
    x["handle"] = v4;
    return _;
}
module.__fateModule = true;
module.result = s(fate.globals({
    __filename
}), module.exports);