import { Component, OnInit, TemplateRef } from '@angular/core';
import { PersonajesService } from '../../services/personajes/personajes.service'
import { Personajes } from '../../Models/personajes'
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  capitulos:any
  personajes: any
  personajesfiltro = ""
  constructor(private personajesservice: PersonajesService,config: NgbModalConfig, private modalService: NgbModal,) { }

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

  onchangeSelect(content:any,event:any){
   var value = event.target.value;
    // $('#modalPersonajes').modal('show')
      this.personajesservice.cargarInfo(value).subscribe(res => {
        this.capitulos =res;
        console.log(this.capitulos)
      })
    this.modalService.open(content);
  }

  cerrarModal(){
    this.modalService.dismissAll();
  }
 
}
