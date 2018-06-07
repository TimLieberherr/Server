"use strict";
var Server;
(function (Server) {
    // Homogenes assoziatives Array in dem die einzelnen Studenten mit ihrer Matrikelnummer gspeichert werden
    let studiHomoAssoc = {};
    let port = process.env.PORT;
    if (port == undefined)
        port = 8100;
})(Server || (Server = {}));
//# sourceMappingURL=Server.js.map