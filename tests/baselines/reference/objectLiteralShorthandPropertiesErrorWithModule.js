//// [objectLiteralShorthandPropertiesErrorWithModule.ts]
// module export
var x = "Foo";
module m {
    export var x;
}

module n {
    var z = 10000;
    export var y = {
        m.x  // error
    };
}

m.y.x;


//// [objectLiteralShorthandPropertiesErrorWithModule.js]
// module export
var x = "Foo";
var m;
(function (m) {
    m.x;
})(m || (m = {}));
var n;
(function (n) {
    var z = 10000;
    n.y = {
        m: .x // error
    };
})(n || (n = {}));
m.y.x;
