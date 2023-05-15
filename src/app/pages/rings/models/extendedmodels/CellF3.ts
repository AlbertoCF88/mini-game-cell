import Cell from "../Cell";

export default class CellF3 extends Cell {
    //para mover el kame de cell
    private _poderCell: number;

    private _base: boolean;

    private _raya: boolean;
    private _rayaContra: boolean;

    private _carga: boolean;
    private _defensa: boolean;
    private _desvioKi: boolean;

    private _muerto: boolean;

    private _herida: boolean;
    private _heridaContra1: boolean;
    private _heridaContra2: boolean;

    private _punio: boolean;
    private _patada: boolean;

    private _contra: boolean;
    private _contra1: boolean;

    private _atacaCellJunior: boolean;
    private _cellJunior: boolean;

    private _kame: boolean;

    private _gana: boolean;

    constructor(
        vidaCell: number,
        vidaBarraCell: number,
        maximaEnergiaCell: number,
        acumularCargaCell: number,

        poderCell: number = 40,
        base: boolean = false,
        raya: boolean = false,
        rayaContra: boolean = false,
        carga: boolean = false,
        defensa: boolean = false,
        desvioKi: boolean = false,
        muerto: boolean = false,
        herida: boolean = false,
        heridaContra1: boolean = false,
        heridaContra2: boolean = false,
        punio: boolean = false,
        patada: boolean = false,
        contra: boolean = false,
        contra1: boolean = false,
        atacaCellJunior: boolean = false,
        cellJunior: boolean = false,
        kame: boolean = false,
        gana: boolean = false,
    ) {
        super(vidaCell, vidaBarraCell, maximaEnergiaCell, acumularCargaCell)
        this._poderCell = poderCell
        this._base = base
        this._raya = raya
        this._rayaContra = rayaContra
        this._carga = carga
        this._defensa = defensa
        this._desvioKi = desvioKi
        this._muerto = muerto
        this._herida = herida
        this._heridaContra1 = heridaContra1
        this._heridaContra2 = heridaContra2
        this._punio = punio
        this._patada = patada
        this._contra = contra
        this._contra1 = contra1
        this._atacaCellJunior = atacaCellJunior
        this._cellJunior = cellJunior
        this._kame = kame
        this._gana = gana
    }

    public get poderCell(): number {
        return this._poderCell;
    }

    public set poderCell(poderCell: number) {
        this._poderCell = poderCell;
    }

    public get base(): boolean {
        return this._base;
    }

    public set base(base: boolean) {
        this._base = base;
    }

    public get raya(): boolean {
        return this._raya;
    }

    public set raya(raya: boolean) {
        this._raya = raya;
    }


    public get rayaContra(): boolean {
        return this._rayaContra;
    }

    public set rayaContra(rayaContra: boolean) {
        this._rayaContra = rayaContra;
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

    public get desvioKi(): boolean {
        return this._desvioKi;
    }

    public set desvioKi(desvioKi: boolean
    ) {
        this._desvioKi = desvioKi;
    }

    public get muerto(): boolean {
        return this._muerto;
    }

    public set muerto(muerto: boolean) {
        this._muerto = muerto;
    }

    public get herida(): boolean {
        return this._herida;
    }

    public set herida(herida: boolean) {
        this._herida = herida;
    }

    public get heridaContra1(): boolean {
        return this._heridaContra1;
    }

    public set heridaContra1(heridaContra1: boolean
    ) {
        this._heridaContra1 = heridaContra1;
    }

    public get heridaContra2(): boolean {
        return this._heridaContra2;
    }

    public set heridaContra2(heridaContra2: boolean) {
        this._heridaContra2 = heridaContra2;
    }

    public get punio(): boolean {
        return this._punio;
    }

    public set punio(punio: boolean) {
        this._punio = punio;
    }

    public get patada(): boolean {
        return this._patada;
    }

    public set patada(patada: boolean) {
        this._patada = patada;
    }

    public get contra(): boolean {
        return this._contra;
    }

    public set contra(contra: boolean) {
        this._contra = contra;
    }

    public get contra1(): boolean {
        return this._contra1;
    }

    public set contra1(contra1: boolean) {
        this._contra1 = contra1;
    }

    public get atacaCellJunior(): boolean {
        return this._atacaCellJunior;
    }

    public set atacaCellJunior(atacaCellJunior: boolean) {
        this._atacaCellJunior = atacaCellJunior;
    }

    public get cellJunior(): boolean {
        return this._cellJunior;
    }

    public set cellJunior(cellJunior: boolean) {
        this._cellJunior = cellJunior;
    }

    public get kame(): boolean {
        return this._kame;
    }

    public set kame(kame: boolean) {
        this._kame = kame;
    }

    public get gana(): boolean {
        return this._gana;
    }

    public set gana(gana: boolean) {
        this._gana = gana;
    }

}