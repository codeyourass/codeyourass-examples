var Random = (function () {
    function Random() {
    }
    Random.randomEntity = function (arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    };
    Random.randomNumber = function (from, to) {
        return Math.floor(Math.random() * to) + from;
    };
    return Random;
})();
