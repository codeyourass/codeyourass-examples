
class Random {

    public randomEntity(arr) {
        return arr[Math.floor(Math.random() * arr.length)]
    }

    public randomNumber(from, to) {
        return Math.floor(Math.random() * to) + from
    }

}