import Cell from "../Cell";

export default class CellF2 extends Cell {
    //para mover el kame de cell
    private _poderCell: number

    private _baseCell: boolean
    private _cargaCell: boolean
    private _rayaCell: boolean

    private _patadaCell: boolean
    private _punioCell: boolean
    private _golpeIzCell: boolean
    private _golpeDeCell: boolean

    private _heridoCell1: boolean
    private _heridoCell2: boolean
    private _heridoCell3: boolean
    private _heridoCell4: boolean

    private _heridokameCell: boolean
    private _kameCell: boolean
    private _cellPierdeCombate: boolean

    private _bocadillo: boolean

    //cosntructor con valores por defecto para no activar animaciones
    constructor(
        vidaCell: number,
        vidaBarraCell: number,
        maximaEnergiaCell: number,
        acumularCargaCell: number,

        poderCell: number = 43,
        baseCell: boolean = false,
        cargaCell: boolean = false,
        rayaCell: boolean = false,

        patadaCell: boolean = false,
        punioCell: boolean = false,
        golpeIzCell: boolean = false,
        golpeDeCell: boolean = false,

        heridoCell1: boolean = false,
        heridoCell2: boolean = false,
        heridoCell3: boolean = false,
        heridoCell4: boolean = false,

        heridokameCell: boolean = false,
        kameCell: boolean = false,
        cellPierdeCombate: boolean = false,

        bocadillo: boolean = false,
    ) {
        super(vidaCell, vidaBarraCell, maximaEnergiaCell, acumularCargaCell)

        this._poderCell = poderCell
        this._baseCell = baseCell
        this._cargaCell = cargaCell
        this._rayaCell = rayaCell
        this._patadaCell = patadaCell
        this._punioCell = punioCell
        this._golpeIzCell = golpeIzCell
        this._golpeDeCell = golpeDeCell
        this._heridoCell1 = heridoCell1
        this._heridoCell2 = heridoCell2
        this._heridoCell3 = heridoCell3
        this._heridoCell4 = heridoCell4
        this._heridokameCell = heridokameCell
        this._kameCell = kameCell
        this._cellPierdeCombate = cellPierdeCombate
        this._bocadillo = bocadillo
    }

    //get and set
    public get poderCell(): number {
        return this._poderCell;
    }

    public set poderCell(poderCell: number
    ) {
        this._poderCell = poderCell;
    }

    public get baseCell(): boolean {
        return this._baseCell;
    }

    public set baseCell(baseCell: boolean
    ) {
        this._baseCell = baseCell;
    }

    public get cargaCell(): boolean {
        return this._cargaCell;
    }

    public set cargaCell(cargaCell: boolean
    ) {
        this._cargaCell = cargaCell;
    }

    public get rayaCell(): boolean {
        return this._rayaCell;
    }

    public set rayaCell(rayaCell: boolean
    ) {
        this._rayaCell = rayaCell;
    }

    public get patadaCell(): boolean {
        return this._patadaCell;
    }

    public set patadaCell(patadaCell: boolean
    ) {
        this._patadaCell = patadaCell;
    }

    public get punioCell(): boolean {
        return this._punioCell;
    }

    public set punioCell(punioCell: boolean
    ) {
        this._punioCell = punioCell;
    }

    public get golpeIzCell(): boolean {
        return this._golpeIzCell;
    }

    public set golpeIzCell(golpeIzCell: boolean
    ) {
        this._golpeIzCell = golpeIzCell;
    }

    public get golpeDeCell(): boolean {
        return this._golpeDeCell;
    }

    public set golpeDeCell(golpeDeCell: boolean
    ) {
        this._golpeDeCell = golpeDeCell;
    }

    public get heridoCell1(): boolean {
        return this._heridoCell1;
    }

    public set heridoCell1(heridoCell1: boolean
    ) {
        this._heridoCell1 = heridoCell1;
    }

    public get heridoCell2(): boolean {
        return this._heridoCell2;
    }

    public set heridoCell2(heridoCell2: boolean
    ) {
        this._heridoCell2 = heridoCell2;
    }

    public get heridoCell3(): boolean {
        return this._heridoCell3;
    }

    public set heridoCell3(heridoCell3: boolean
    ) {
        this._heridoCell3 = heridoCell3;
    }

    public get heridoCell4(): boolean {
        return this._heridoCell4;
    }

    public set heridoCell4(heridoCell4: boolean
    ) {
        this._heridoCell4 = heridoCell4;
    }

    public get kameCell(): boolean {
        return this._kameCell;
    }

    public get heridokameCell(): boolean {
        return this._heridokameCell;
    }

    public set heridokameCell(heridokameCell: boolean) {
        this._heridokameCell = heridokameCell;
    }

    public set kameCell(kameCell: boolean
    ) {
        this._kameCell = kameCell;
    }

    public get cellPierdeCombate(): boolean {
        return this._cellPierdeCombate;
    }

    public set cellPierdeCombate(cellPierdeCombate: boolean) {
        this._cellPierdeCombate = cellPierdeCombate;
    }

    public get bocadillo(): boolean {
        return this._bocadillo;
    }

    public set bocadillo(bocadillo: boolean) {
        this._bocadillo = bocadillo;
    }
}