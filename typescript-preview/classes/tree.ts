class AppleTree extend {

    applesCount: number;
    apples: any[];
    colors = ['red', 'yellow', 'green'];
    tastes = ['saur', 'bitter', 'sweet'];

    constructor(applesCount) {
        super();
        this.applesCount = applesCount;
        this.makeApples(this.applesCount);
    }

    private makeApples(n) {

        for (var i = 0; i < n; i++)
            this.apples[i] = new Apple(i);
    }

    public makeColors(n) {

        this.apples.forEach((e, i) => {
            this.apples[i].color = this.randomEntity(this.colors);
        });
    }

    public makeTastes() {

        this.apples.forEach((e, i) => {
            this.apples[i].taste = this.randomEntity(this.tastes);
        });
    }

    public makeAges() {

        this.apples.forEach((e, i) => {
            this.apples[i].age = this.randomNumber(1,5);
        });
    }

}