import Gohan from "../Gohan";

export default class GohanF3 extends Gohan {

    private _base: boolean;
    private _raya: boolean;
    private _carga: boolean;
    private _defensa: boolean;

    private _gancho: boolean;
    private _patada: boolean;

    private _rafaga: boolean;
    private _cargaKame: boolean;
    private _kame: boolean;
    private _kamePadreHijo: boolean;
    private _herida: boolean;

    private _pierde: boolean;

    constructor(
        vidaGohan: number,
        vidaBarraGohan: number,
        maximaEnergiaGohan: number,
        acumularCargaGohan: number,

        base:boolean = false,
        raya: boolean = false,
        carga:boolean = false,
        defensa: boolean = false,
        gancho: boolean = false,
        patada: boolean = false,
        rafaga: boolean = false,
        cargaKame: boolean = false,
        kame: boolean = false,
        kamePadreHijo: boolean = false,
        herida: boolean = false,
        pierde: boolean = false,
    ) {
        super(vidaGohan, vidaBarraGohan, maximaEnergiaGohan, acumularCargaGohan)

        this._base = base
        this._raya = raya
        this._carga = carga
        this._defensa = defensa
        this._gancho = gancho
        this._patada = patada
        this._rafaga = rafaga
        this._cargaKame = cargaKame
        this._kame = kame
        this._kamePadreHijo = kamePadreHijo
        this._herida = herida
        this._pierde = pierde
    }

    public get base(): boolean {
        return this._base;
    }

    public set base(base: boolean
    ) {
        this._base = base;
    }

    public get raya(): boolean {
        return this._raya;
    }

    public set raya(raya: boolean
    ) {
        this._raya = raya;
    }

    public get carga(): boolean {
        return this._carga;
    }

    public set carga(carga: boolean
    ) {
        this._carga = carga;
    }

    public get defensa(): boolean {
        return this._defensa;
    }

    public set defensa(defensa: boolean) {
        this._defensa = defensa;
    }

    public get gancho(): boolean {
        return this._gancho;
    }

    public set gancho(gancho: boolean
    ) {
        this._gancho = gancho;
    }

    public get patada(): boolean {
        return this._patada;
    }

    public set patada(patada: boolean
    ) {
        this._patada = patada;
    }

    public get rafaga(): boolean {
        return this._rafaga;
    }

    public set rafaga(rafaga: boolean
    ) {
        this._rafaga = rafaga;
    }

    public get cargaKame(): boolean {
        return this._cargaKame;
    }

    public set cargaKame(cargaKame: boolean
    ) {
        this._cargaKame = cargaKame;
    }

    public get kame(): boolean {
        return this._kame;
    }

    public set kame(kame: boolean
    ) {
        this._kame = kame;
    }

    public get kamePadreHijo(): boolean {
        return this._kamePadreHijo;
    }

    public set kamePadreHijo(kamePadreHijo: boolean
    ) {
        this._kamePadreHijo = kamePadreHijo;
    }

    public get herida(): boolean {
        return this._herida;
    }

    public set herida(herida: boolean
    ) {
        this._herida = herida;
    }

    public get pierde(): boolean {
        return this._pierde;
    }

    public set pierde(pierde: boolean) {
        this._pierde = pierde;
    }



}