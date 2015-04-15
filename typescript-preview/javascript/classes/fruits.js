var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Pome = (function () {
    function Pome() {
        this.isYoung = true;
    }
    Object.defineProperty(Pome.prototype, "isYoung", {
        get: function () {
            return this._isYoung;
        },
        set: function (value) {
            this._isYoung = value;
        },
        enumerable: true,
        configurable: true
    });
    return Pome;
})();
var Apple = (function (_super) {
    __extends(Apple, _super);
    function Apple(id) {
        _super.call(this);
        this._id = id;
        if (this.age > 3)
            this.isYoung = false;
    }
    Object.defineProperty(Apple.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Apple.prototype, "taste", {
        get: function () {
            return this._taste;
        },
        set: function (value) {
            this._taste = value;
        },
        enumerable: true,
        configurable: true
    });
    return Apple;
})(Pome);
