interface IPome {
    _isYoung: boolean;
    isYoung: boolean;
}

interface IApple extends IPome {
    _id: number;
    _color: string;
    _taste: string;
    age: number;
    color: string;
    taste: string;
}