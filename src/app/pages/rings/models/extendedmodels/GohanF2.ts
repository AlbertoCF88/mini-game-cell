import Gohan from "../Gohan";

export default class GohanF2 extends Gohan {
    private _gohanBase: boolean;
    private _rayaGohan: boolean;
    private _cargaGohan: boolean;

    private _golpeGohan1: boolean;
    private _golpeGohan2: boolean;
    
    private _punioGohan1: boolean;
    private _punioGohan2: boolean;

    private _heridaGohan1: boolean;
    private _heridaGohan2: boolean;
    private _heridaGohan3: boolean;
    private _heridaGohan4: boolean;

    private _kameGohan: boolean;
    private _gohanPierdeCombate: boolean;

    //activar acciones en vista, ocultar o mostrar animacion
    constructor(
        vidaGohan: number,
        vidaBarraGohan: number,
        maximaEnergiaGohan: number,
        acumularCargaGohan: number,

        gohanBase: boolean = false,
        rayaGohan: boolean = false,
        cargaGohan: boolean = false,
        golpeGohan1: boolean = false,
        golpeGohan2: boolean = false,
        punioGohan1: boolean = false,
        punioGohan2: boolean = false,
        heridaGohan1: boolean = false,
        heridaGohan2: boolean = false,
        heridaGohan3: boolean = false,
        heridaGohan4: boolean = false,
        kameGohan: boolean = false,
        gohanPierdeCombate: boolean = false,
    ) {
        super(vidaGohan, vidaBarraGohan, maximaEnergiaGohan, acumularCargaGohan)

        this._gohanBase = gohanBase
        this._rayaGohan = rayaGohan
        this._cargaGohan = cargaGohan
        this._golpeGohan1 = golpeGohan1
        this._golpeGohan2 = golpeGohan2
        this._punioGohan1 = punioGohan1
        this._punioGohan2 = punioGohan2
        this._heridaGohan1 = heridaGohan1
        this._heridaGohan2 = heridaGohan2
        this._heridaGohan3 = heridaGohan3
        this._heridaGohan4 = heridaGohan4
        this._kameGohan = kameGohan
        this._gohanPierdeCombate = gohanPierdeCombate
    }

    //get and set
    public get gohanBase(): boolean {
        return this._gohanBase;
    }

    public set gohanBase(gohanBase: boolean
    ) {
        this._gohanBase = gohanBase;
    }

    public get rayaGohan(): boolean {
        return this._rayaGohan;
    }

    public set rayaGohan(rayaGohan: boolean
    ) {
        this._rayaGohan = rayaGohan;
    }

    public get cargaGohan(): boolean {
        return this._cargaGohan;
    }

    public set cargaGohan(cargaGohan: boolean
    ) {
        this._cargaGohan = cargaGohan;
    }

    public get golpeGohan1(): boolean {
        return this._golpeGohan1;
    }

    public set golpeGohan1(golpeGohan1: boolean
    ) {
        this._golpeGohan1 = golpeGohan1;
    }

    public get golpeGohan2(): boolean {
        return this._golpeGohan2;
    }

    public set golpeGohan2(golpeGohan2: boolean
    ) {
        this._golpeGohan2 = golpeGohan2;
    }
    
    public get punioGohan1(): boolean {
        return this._punioGohan1;
    }

    public set punioGohan1(punioGohan1: boolean
    ) {
        this._punioGohan1 = punioGohan1;
    }

    public get punioGohan2(): boolean {
        return this._punioGohan2;
    }

    public set punioGohan2(punioGohan2: boolean) {
        this._punioGohan2 = punioGohan2;
    }
    public get heridaGohan1(): boolean {
        return this._heridaGohan1;
    }

    public set heridaGohan1(heridaGohan1: boolean
    ) {
        this._heridaGohan1 = heridaGohan1;
    }

    public get heridaGohan2(): boolean {
        return this._heridaGohan2;
    }

    public set heridaGohan2(heridaGohan2: boolean
    ) {
        this._heridaGohan2 = heridaGohan2;
    }

    public get heridaGohan3(): boolean {
        return this._heridaGohan3;
    }

    public set heridaGohan3(heridaGohan3: boolean
    ) {
        this._heridaGohan3 = heridaGohan3;
    }

    public get heridaGohan4(): boolean {
        return this._heridaGohan4;
    }

    public set heridaGohan4(heridaGohan4: boolean
    ) {
        this._heridaGohan4 = heridaGohan4;
    }

    public get kameGohan(): boolean {
        return this._kameGohan;
    }

    public set kameGohan(kameGohan: boolean
    ) {
        this._kameGohan = kameGohan;
    }

    public get gohanPierdeCombate(): boolean {
        return this._gohanPierdeCombate;
    }

    public set gohanPierdeCombate(gohanPierdeCombate: boolean) {
        this._gohanPierdeCombate = gohanPierdeCombate;
    }







}