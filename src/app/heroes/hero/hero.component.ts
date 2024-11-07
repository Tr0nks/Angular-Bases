import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public nombre : string = 'ironMan'
  public age : number = 45

  get capitalizedName () : string {
    return this.nombre.toUpperCase()
  }

  getHeroeDescription(): string {
    return ` ${this.nombre} - ${this.age}`
  }

  changeNombre () : void {
    this.nombre = 'SpiderMan'
  }

  changeEdad() : void {
    this.age = 50
  }

  resetForm(): void{
    this.nombre = 'ironMan'
    this.age = 45
  }
}
