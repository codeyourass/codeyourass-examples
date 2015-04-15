
class Pome {

    _isYoung: bool;

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