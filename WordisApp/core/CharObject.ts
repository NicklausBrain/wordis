import GameObject from './GameObject'

class CharObject extends GameObject {
    private _char: string;

    constructor(char: string) {
        super();
        this._char = char;
    }

    get char(): string {
        return this._char; // take first
    }
}
