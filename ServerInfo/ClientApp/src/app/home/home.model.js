"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerModel = exports.ServergroupsModel = void 0;
var ServergroupsModel = /** @class */ (function () {
    function ServergroupsModel(groupname, serverport, pathatserver, servers, ip) {
        if (groupname === void 0) { groupname = ""; }
        if (serverport === void 0) { serverport = ""; }
        if (pathatserver === void 0) { pathatserver = ""; }
        if (servers === void 0) { servers = []; }
        if (ip === void 0) { ip = ""; }
        this.groupname = groupname;
        this.serverport = serverport;
        this.pathatserver = pathatserver;
        this.servers = servers;
        this.ip = ip;
    }
    return ServergroupsModel;
}());
exports.ServergroupsModel = ServergroupsModel;
var ServerModel = /** @class */ (function () {
    function ServerModel(groupname, pathatserver, ip, isClicked) {
        if (groupname === void 0) { groupname = ""; }
        if (pathatserver === void 0) { pathatserver = ""; }
        if (ip === void 0) { ip = ""; }
        if (isClicked === void 0) { isClicked = false; }
        this.groupname = groupname;
        this.pathatserver = pathatserver;
        this.ip = ip;
        this.isClicked = isClicked;
    }
    return ServerModel;
}());
exports.ServerModel = ServerModel;
//# sourceMappingURL=home.model.js.map