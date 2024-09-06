class Producto {
    private codigo: string;
    private nombre: string;
    private precio_costo: number;
    private precio_venta: number;

    constructor(codigo: string, nombre: string, precio_costo: number, precio_venta: number){
        this.codigo = codigo
        this.nombre = nombre
        this.precio_costo = precio_costo
        this.precio_venta = precio_venta
    }

    public getCodigo(): string {
        return this.codigo;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getCosto(): number {
        return this.precio_costo;
    }

    public getVenta(): number {
        return this.precio_venta
    }

}

class HashTableParcial {
    private size: number;
    private data: Producto[];

    constructor(size: number) {
        this.data = new Array(size);
        this.size = size;
    }

    private hash(key: number): number {
        return key % this.size;
    }

    public numToStr(key: number): number {
        let str = "100";
        let number = parseInt(str)
    }

    public insert(newproducto: Producto): void {
        let index: number = this.hash(newproducto);
        this.data[index] = newproducto;
    }

    public search(key: number): number {
        let index: number = this.hash(key);
        return this.data[index];
    }

    public print(): void {
        let all_data: string = "";
        for (const key of this.data) {
            all_data += key + " "
        }
        console.log(all_data);
    }
}

// main
let tablaHash: HashTableParcial = new HashTableParcial(14);
// buscar
let claveABuscar:number = 1111;
console.log("La clave " + tablaHash.search(claveABuscar) + " está en la tabla hash");
let producto1: Producto = new Producto("P001", "Panadol", 45,65)
let producto2: Producto = new Producto("P002", "Aspirina", 30,32.5)
let producto3: Producto = new Producto("P003", "Algodon", 5,10)
let producto4: Producto = new Producto("P004", "Alcohol", 70,120)
let producto5: Producto = new Producto("P005", "Suero", 45,65)
let producto6: Producto = new Producto("P006", "Aciclovir", 40,60)
let producto7: Producto = new Producto("P007", "Melatonina", 150,450)
let producto8: Producto = new Producto("P008", "Vicks", 45,70)
let producto9: Producto = new Producto("P009", "Curitas", 5,15)
let producto10: Producto = new Producto("P010", "Pepto", 10,35)
