/**
 *  Represet Class model of apple tree
 */
class AppleTree implements IAppleTree {

    apples: any[];
    colors = ['red', 'yellow', 'green'];
    tastes = ['saur', 'bitter', 'sweet'];

    /**
     * Constructor of AppleTree Class
     * @param applesCount Count of the apples
     */
    constructor(private applesCount) {
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
    private makeApples(n: number) {

        for (var i = 0; i < n; i++)
            this.apples[i] = new Apple(i);
    }

    /**
     * Generate random color for each apple
     */
    public applesColors() {

        this.apples.forEach((e, i) => {
            this.apples[i].color = Random.randomEntity(this.colors);
        });
    }

    /**
     * Generate random taste for each apple
     */
    public applesTastes() {

        this.apples.forEach((e, i) => {
            this.apples[i].taste = Random.randomEntity(this.tastes);
        });
    }

    /**
     * Generate random age for rach apple
     */
    public applesAges() {

        this.apples.forEach((e, i) => {
            this.apples[i].age = Random.randomNumber(1,5);
        });
    }
}