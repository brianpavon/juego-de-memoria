import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cartasArray : any = []
  cartas : any = []
  dificultad : string = '';

  animales = [
    {
      id:1,
      urlImagen:'/assets/images/animals/cow.png'
    },
    {
      id:2,
      urlImagen:'/assets/images/animals/horse.png'
    },
    {
      id:3,
      urlImagen:'/assets/images/animals/turtle.png'
    },
    {
      id: 4,
      urlImagen: '/assets/images/animals/cow.png'
    },
    {
      id: 5,
      urlImagen: '/assets/images/animals/horse.png'
    },
    {
      id: 6,
      urlImagen: '/assets/images/animals/turtle.png'
    }
  ]

  herramientas = [
    {
      id:1,
      urlImagen:'/assets/images/tools/drill.png'
    },
    {
      id:2,
      urlImagen:'/assets/images/tools/hammer.png'
    },
    {
      id:3,
      urlImagen:'/assets/images/tools/screwdriver.png'
    },
    {
      id:4,
      urlImagen:'/assets/images/tools/shovel.png'
    },
    {
      id:5,
      urlImagen:'/assets/images/tools/wrench.png'
    },
    {
      id: 6,
      urlImagen: '/assets/images/tools/drill.png'
    },
    {
      id: 7,
      urlImagen: '/assets/images/tools/hammer.png'
    },
    {
      id: 8,
      urlImagen: '/assets/images/tools/screwdriver.png'
    },
    {
      id: 9,
      urlImagen: '/assets/images/tools/shovel.png'
    },
    {
      id: 10,
      urlImagen: '/assets/images/tools/wrench.png'
    }
  ]

  frutas = [
    {
      id: 1,
      urlImagen: '/assets/images/fruits/apple.png'
    },
    {
      id: 2,
      urlImagen: '/assets/images/fruits/banana.png'
    },
    {
      id: 3,
      urlImagen: '/assets/images/fruits/grape.png'
    },
    {
      id: 4,
      urlImagen: '/assets/images/fruits/orange.png'
    },
    {
      id: 5,
      urlImagen: '/assets/images/fruits/pear.png'
    },
    {
      id: 6,
      urlImagen: '/assets/images/fruits/pineapple.png'
    },
    {
      id: 7,
      urlImagen: '/assets/images/fruits/strawberry.png'
    },
    {
      id: 8,
      urlImagen: '/assets/images/fruits/watermelon.png'
    },
    {
      id: 9,
      urlImagen: '/assets/images/fruits/apple.png'
    },
    {
      id: 10,
      urlImagen: '/assets/images/fruits/banana.png'
    },
    {
      id: 11,
      urlImagen: '/assets/images/fruits/grape.png'
    },
    {
      id: 12,
      urlImagen: '/assets/images/fruits/orange.png'
    },
    {
      id: 13,
      urlImagen: '/assets/images/fruits/pear.png'
    },
    {
      id: 14,
      urlImagen: '/assets/images/fruits/pineapple.png'
    },
    {
      id: 15,
      urlImagen: '/assets/images/fruits/strawberry.png'
    },
    {
      id: 16,
      urlImagen: '/assets/images/fruits/watermelon.png'
    }
  ]

  constructor() {}

  jugar(id:number){
    const element = document.getElementById(id.toString());

    element!.classList.toggle('flipped');

    let carta1 = this.cartas.find((a: { id: number; })=> a.id == id);

    if(this.cartasArray.length == 0){
      this.cartasArray.push(carta1);

    }else{
      const esta = this.cartasArray.find((a: { urlImagen: string | undefined; }) => a.urlImagen == carta1?.urlImagen);
      const repetida = this.cartasArray.find((a: { id: number; }) => a.id == id);

      if(repetida){
        this.cartasArray = [];
        return
      }

      const idCarta1 = this.cartasArray[0].id;
      const element1 = document.getElementById(idCarta1.toString());

      const element2 = document.getElementById(id.toString());
      if(!esta){ 
        setTimeout(() => {
          element1!.classList.toggle('flipped');
          element2!.classList.toggle('flipped');
        }, 1000);

      }else{

        element1!.parentNode?.removeAllListeners!();
        element2!.parentNode?.removeAllListeners!();

      }

      this.cartasArray = [];
    }
  }

  elegirNivel(nivel : number){
    switch (nivel) {
      case 1:
        this.dificultad = 'facil';
        this.cartas = this.animales;
        this.cartas.sort(()=> Math.random() - 0.5);        
        break;
      
      case 2:
        this.dificultad = 'medio';
        this.cartas = this.herramientas;
        this.cartas.sort(()=> Math.random() - 0.5);
        break;
      
      case 3:
        this.dificultad = 'dificil';
        this.cartas = this.frutas;
        this.cartas.sort(()=> Math.random() - 0.5);
        break;
    }
  }

}
