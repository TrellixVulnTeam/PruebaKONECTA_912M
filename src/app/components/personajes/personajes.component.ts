import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../services/personajes/personajes.service'
import { Personajes } from '../../Models/personajes'
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  personajes: any
  personajesfiltro = ""
  constructor(private personajesservice: PersonajesService) { }

  ngOnInit(): void {
    this.CargarPersonajes()
  }

  //cargar personajes
  CargarPersonajes() {
    try {
      let array: any
      this.personajesservice.CargarPersonajes().subscribe(res => {
        array = res
        let personajes2: Personajes[] = array.results
        this.personajes = personajes2
      })

    } catch (error) {
      console.error('no se pudieron obtener datos')
    }

  }
}
