class Apple extends Pome {

    _id: number;
    _color: string;
    _taste: string;
    age: number;

    constructor(id: number) {
        this._id = id;
        if(this.age > 3) this.isYoung = false;
    }

    set color(value:string) {
        this._color = value;
    }

    get color(): string {
        return this._color;
    }

    set taste(value: string) {
        this._taste = value;
    }

    get taste(): string {
        return this._taste;
    }
}