class Pome implements IPome {

    _isYoung: boolean;

    constructor() {
        this.isYoung = true;
    }

    set isYoung(value: boolean) {
        this._isYoung = value;
    }

    get isYoung(): boolean {
        return this._isYoung;
    }

}

class Apple extends Pome implements IApple {

    _id: number;
    _color: string;
    _taste: string;
    age: number;

    constructor(id: number) {
        super();
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