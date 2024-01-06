export type LaptopInfo = {
    id: number;
    code: string;
    name: string;
    brand: string;
    processor: string;
    storage: string;
    memory: number;
    price: number;
}

class Laptop {
    public id?: number;
    public code?: string;
    public name?: string;
    public brand?: string;
    public processor?: string;
    public storage?: string;
    public memory?: number;
    public price?: number;
    constructor(props?: LaptopInfo) {
        if (!props) return;
        this.id = props.id
        this.code = props.code
        this.name = props.name
        this.brand = props.brand
        this.processor = props.processor
        this.storage = props.storage
        this.price = props.price
        this.memory = props.memory
    };
    
}

class LaptopBuilder {
    public laptop: Laptop;

    constructor() {
        this.laptop = new Laptop();
    }

    setBrand(brand: string): LaptopBuilder {
        this.laptop.brand = brand;
        return this;
    }

    setProcessor(processor: string): LaptopBuilder {
        this.laptop.processor = processor;
        return this;
    }

    setMemory(memory: number): LaptopBuilder {
        this.laptop.memory = memory;
        return this;
    }

    setStorage(storage: string): LaptopBuilder {
        this.laptop.storage = storage;
        return this;
    }

    build(): Laptop {
        return this.laptop;
    }
}
