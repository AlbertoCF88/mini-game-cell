import Cell from "../Cell";


export default class CellF1 extends Cell {
    //para mover el kame de cell
    private _poderCell: number;
    //activar acciones en vista, ocultar o mostrar animacion
    private _baseCell: boolean;
    private _esquivaCell: boolean;
    private _contraCell: boolean;
    private _heridoCell: boolean;
    private _golpeCell: boolean;
    private _cargaCell: boolean;
    private _cansadoCell: boolean;
    private _destelloCell: boolean;
    private _kameCell: boolean;
    private _kameContraCell: boolean;
    private _cellPierdeCombate: boolean;
    // this.defensaCell no tiene

    //cosntructor con valores por defecto para no activar animaciones
    constructor(
        vidaCell: number,
        vidaBarraCell: number,
        maximaEnergiaCell: number,
        acumularCargaCell: number,

        poderCell: number = 40,
        baseCell: boolean = false,
        esquivaCell: boolean = false,
        contraCell: boolean = false,
        heridoCell: boolean = false,
        golpeCell: boolean = false,
        cargaCell: boolean = false,
        cansadoCell: boolean = false,
        destelloCell: boolean = false,
        kameCell: boolean = false,
        kameContraCell: boolean = false,
        cellPierdeCombate: boolean = false,
    ) {
        super(vidaCell, vidaBarraCell, maximaEnergiaCell, acumularCargaCell)

        this._poderCell = poderCell
        this._baseCell = baseCell
        this._esquivaCell = esquivaCell
        this._contraCell = contraCell
        this._heridoCell = heridoCell
        this._golpeCell = golpeCell
        this._cargaCell = cargaCell
        this._cansadoCell = cansadoCell
        this._destelloCell = destelloCell
        this._kameCell = kameCell
        this._kameContraCell = kameContraCell
        this._cellPierdeCombate = cellPierdeCombate
    }

    //getters and setters
    public get poderCell(): number {
        return this._poderCell;
    }

    public set poderCell(poderCell: number) {
        this._poderCell = poderCell;
    }

    public get baseCell(): boolean {
        return this._baseCell;
    }

    public set baseCell(baseCell: boolean) {
        this._baseCell = baseCell;
    }

    public get esquivaCell(): boolean {
        return this._esquivaCell;
    }

    public set esquivaCell(esquivaCell: boolean) {
        this._esquivaCell = esquivaCell;
    }

    public get contraCell(): boolean {
        return this._contraCell;
    }

    public set contraCell(contraCell: boolean) {
        this._contraCell = contraCell;
    }

    public get heridoCell(): boolean {
        return this._heridoCell;
    }

    public set heridoCell(heridoCell: boolean) {
        this._heridoCell = heridoCell;
    }

    public get golpeCell(): boolean {
        return this._golpeCell;
    }

    public set golpeCell(golpeCell: boolean) {
        this._golpeCell = golpeCell;
    }

    public get cargaCell(): boolean {
        return this._cargaCell;
    }

    public set cargaCell(cargaCell: boolean) {
        this._cargaCell = cargaCell;
    }

    public get cansadoCell(): boolean {
        return this._cansadoCell;
    }

    public set cansadoCell(cansadoCell: boolean) {
        this._cansadoCell = cansadoCell;
    }

    public get destelloCell(): boolean {
        return this._destelloCell;
    }

    public set destelloCell(destelloCell: boolean) {
        this._destelloCell = destelloCell;
    }

    public get kameCell(): boolean {
        return this._kameCell;
    }

    public set kameCell(kameCell: boolean) {
        this._kameCell = kameCell;
    }

    public get kameContraCell(): boolean {
        return this._kameContraCell;
    }

    public set kameContraCell(kameContraCell: boolean) {
        this._kameContraCell = kameContraCell;
    }

    public get cellPierdeCombate(): boolean {
        return this._cellPierdeCombate
    }
    public set cellPierdeCombate(cellPierdeCombat: boolean) {
        this._cellPierdeCombate = cellPierdeCombat
    }

}