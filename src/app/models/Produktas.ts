export class Produktas {
    public pavadinimas: string;
    public kiekis: number;
    public kaina: number;
    public nuolaida: number = 0;

    public constructor(pavadinimas: string, kiekis: number, kaina: number, nuolaida: number){
        this.pavadinimas = pavadinimas;
        this.kaina = kaina;
        this.nuolaida = nuolaida;
        this.kiekis = kiekis;
    }
    public grazina(): void {
        this.kiekis++;
    }

    public perka(): void {
        if (this.kiekis > 0) {
        this.kiekis--;  
        } else if(this.kiekis === 0) {
            return;
        }
          
    }
}
