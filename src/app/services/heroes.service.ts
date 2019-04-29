import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {

    // database. The type is the one from the interface:
    private heroes: Heroe [] = [
        {
          nombre: 'Aquaman',
          bio: 'El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.',
          img: 'assets/img/aquaman.png',
          aparicion: '1941-11-01',
          casa: 'DC'
        },
        {
          nombre: 'Batman',
          bio: 'Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.',
          img: 'assets/img/batman.png',
          aparicion: '1939-05-01',
          casa: 'DC'
        },
        {
          nombre: 'Daredevil',
          bio: 'Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede "ver" a través de un "sexto sentido" que le sirve como un radar similar al de los murciélagos.',
          img: 'assets/img/daredevil.png',
          aparicion: '1964-01-01',
          casa: 'Marvel'
        },
        {
          nombre: 'Hulk',
          bio: 'Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).',
          img: 'assets/img/hulk.png',
          aparicion: '1962-05-01',
          casa: 'Marvel'
        },
        {
          nombre: 'Linterna Verde',
          bio: 'Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)',
          img: 'assets/img/linterna-verde.png',
          aparicion: '1940-06-01',
          casa: 'DC'
        },
        {
          nombre: 'Spider-Man',
          bio: 'Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un "sentido arácnido", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.',
          img: 'assets/img/spiderman.png',
          aparicion: '1962-08-01',
          casa: 'Marvel'
        },
        {
          nombre: 'Wolverine',
          bio: 'En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.',
          img: 'assets/img/wolverine.png',
          aparicion: '1974-11-01',
          casa: 'Marvel'
        },
        {
          nombre: 'Capitán America',
          bio: 'El Capitán Steven "Steve" Grant Rogers es un veterano de la Segunda Guerra Mundial que se convirtió en el primer superhéroe del mundo. Después de que el programa secreto del Súper Soldado transformó al frágil Steven Rogers en el poderoso y heroico Capitán América, sus increíbles hazañas en la Segunda Guerra Mundial lo hicieron una leyenda viviente. Rogers ayudó a los Aliados a ganar la guerra atacando varias instalaciones de HYDRA, pero se estrelló en el Ártico durante su última misión. Cuando su cuerpo fue encontrado, Rogers despertó en la época actual, habiendo permanecido casi 67 años congelado.',
          img: 'assets/img/cap.png',
          aparicion: '1941-03-01',
          casa: 'Marvel'
        },
        {nombre: 'Green Arrow',
        bio: 'Su nombre real es Oliver Jonas Queen, un empresario adinerado y propietario de Queen Industries que también es una celebridad muy conocida en Star City. A veces se muestra vestido como el personaje de Robin Hood, Green Arrow es un arquero que usa sus habilidades para combatir el crimen en sus ciudades natales de Star City y Seattle, así como junto a sus compañeros superhéroes como miembro de la Liga de la Justicia. Implementa una gama de flechas de truco con varias funciones especiales, como pegamento, punta de explosivo, gancho de agarre, granada flash, gas lacrimógeno e incluso flechas de kryptonita para usar en una variedad de situaciones especiales.',
        img: 'assets/img/green.png',
        aparicion: '1941-03-01',
        casa: 'DC'
      },
      ];

    constructor() {}
  // heroes is private, so there has to be a public property to access it. This method is for that, it returns the private heroes:
  getHeroes(): Heroe[] {
    return this.heroes;
  }

  // to get only one for the hero.component:
  getHeroe(idx: string) {
    return this.heroes[idx];
  }

  // search functionm:
  buscarHeroes(search: string): Heroe[] {
    const heroesArr: Heroe[] = []; // empty array
    search = search.toLowerCase(); // convert it to lowercase

// tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.heroes.length; i++) { // new variable
      let heroe = this.heroes[i];
      let nombre = heroe.nombre.toLowerCase(); // access the name of the hero, put it in lowercase to match the search
      if (nombre.indexOf (search) >= 0) { // if search returns more than 0
        heroe.idx = i;
        heroesArr.push(heroe); // push what was found into the empty array
      }
    }
    return heroesArr;
  }
}

// interface to prevent creating heroes with a different set of keys:
export interface Heroe {
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
  idx?: number;
}
