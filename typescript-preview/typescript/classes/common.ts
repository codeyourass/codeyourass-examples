
class Random {

    public static randomEntity(arr) {
        return arr[Math.floor(Math.random() * arr.length)]
    }

    public static randomNumber(from, to) {
        return Math.floor(Math.random() * to) + from
    }

}