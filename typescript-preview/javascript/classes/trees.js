/**
 *  Represet Class model of apple tree
 */
var AppleTree = (function () {
    /**
     * Constructor of AppleTree Class
     * @param applesCount Count of the apples
     */
    function AppleTree(applesCount) {
        this.applesCount = applesCount;
        this.colors = ['red', 'yellow', 'green'];
        this.tastes = ['saur', 'bitter', 'sweet'];
        this.applesCount = applesCount;
        this.makeApples(this.applesCount);
        this.applesColors();
        this.applesTastes();
        this.applesAges();
    }
    /**
     * Make apples for tree instance
     * @param n Represent count of apples on each tree
     */
    AppleTree.prototype.makeApples = function (n) {
        for (var i = 0; i < n; i++)
            this.apples[i] = new Apple(i);
    };
    /**
     * Generate random color for each apple
     */
    AppleTree.prototype.applesColors = function () {
        var _this = this;
        this.apples.forEach(function (e, i) {
            _this.apples[i].color = Random.randomEntity(_this.colors);
        });
    };
    /**
     * Generate random taste for each apple
     */
    AppleTree.prototype.applesTastes = function () {
        var _this = this;
        this.apples.forEach(function (e, i) {
            _this.apples[i].taste = Random.randomEntity(_this.tastes);
        });
    };
    /**
     * Generate random age for rach apple
     */
    AppleTree.prototype.applesAges = function () {
        var _this = this;
        this.apples.forEach(function (e, i) {
            _this.apples[i].age = Random.randomNumber(1, 5);
        });
    };
    return AppleTree;
})();
