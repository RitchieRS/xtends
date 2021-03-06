import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialogmission',
  templateUrl: './dialogmission.component.html',
  styleUrls: ['./dialogmission.component.scss'],
})
export class DialogmissionComponent implements OnInit {
  colorServicio="";
  typeActivity={};
  constructor(@Inject(MAT_DIALOG_DATA) public data: { canal: string,
                                                      ciudad: string,
                                                      colorServicio: string,
                                                      estado: string,
                                                      idPV: number,
                                                      sucursal: string,
                                                      tiempo: string,
                                                      nivel: string,
                                                      precio: string,
                                                      nombreActividad:string

                                                    },
                                                    private router: Router,
                                                    private matDialog: MatDialog) {

                                                      this.colorServicio = "bg-"+data.colorServicio;
                                                      console.log(this.colorServicio);
                                                      this.typeActivity = this.tipoServicio(data.colorServicio);


                                                     }

  ngOnInit() {}

  missionPending(): void{
    this.matDialog.closeAll();
   ///greenxtend/Promotoria/CDMX/Venustiano%20Carranza
   this.router.navigate(['mission/'+this.data.idPV+'/'+this.data.nombreActividad+'/'+this.data.colorServicio+'/'+this.data.estado+'/'+this.data.ciudad])
   /// this.router.navigate(['pending-mission/'+this.data.idPV])
  }

  tipoServicio(tipo:string):any{
    let type={
      color:"",
      logo:"",
      actividad:""
    };
    switch(tipo) {
      case "skybluextend": {
        type.color='skybluextend';
        type.logo="../../assets/icon/promotoria.svg";
        type.actividad="Promotor??a";
        break;
      }
      case  "navybluextend": {
        type.color='navybluextend';
        type.logo="../../assets/icon/mystery.svg"
        type.actividad="Mietery Shoper";
        break;
      }
      case "purplextend": {
        type.color='purplextend';
        type.logo="../../assets/icon/demostrador.svg";
        type.actividad="Demostrador";
        break;
      }
      case "greenxtend": {
        type.color='greenxtend';
        type.logo="../../assets/icon/anaqueleo.svg"
        type.actividad="Anaqueleo";
        break;
      }
      default: {

      }
      type.color='#90c04e';
      type.logo="anaqueleo.svg"
      break;
      }
      return type;
    }

}
