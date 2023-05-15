export default class C16 {

    private _base: boolean
    private _bocadillo1: boolean;
    private _ataque: boolean;
    private _cabeza: boolean;
    private _bocadillo2: boolean;
    private _bocadillo3: boolean;

    constructor(
        base: boolean = false,
        bocadillo1: boolean = false,
        ataque: boolean = false,
        cabeza: boolean = false,
        bocadillo2: boolean = false,
        bocadillo3: boolean = false
    ) {
        this._base = base;
        this._bocadillo1 = bocadillo1;
        this._ataque = ataque;
        this._cabeza = cabeza;
        this._bocadillo2 = bocadillo2;
        this._bocadillo3 = bocadillo3;
    }

    public get base(): boolean {
        return this._base;
    }

    public set base(base: boolean) {
        this._base = base;
    }

    public get bocadillo1(): boolean {
        return this._bocadillo1;
    }

    public set bocadillo1(bocadillo1: boolean) {
        this._bocadillo1 = bocadillo1;
    }

    public get ataque(): boolean {
        return this._ataque;
    }

    public set ataque(ataque: boolean) {
        this._ataque = ataque;
    }

    public get cabeza(): boolean {
        return this._cabeza;
    }

    public set cabeza(cabeza: boolean) {
        this._cabeza = cabeza;
    }

    public get bocadillo2(): boolean {
        return this._bocadillo2;
    }

    public set bocadillo2(bocadillo2: boolean) {
        this._bocadillo2 = bocadillo2;
    }

    public get bocadillo3(): boolean {
        return this._bocadillo3;
    }

    public set bocadillo3(bocadillo3: boolean) {
        this._bocadillo3 = bocadillo3;
    }

}