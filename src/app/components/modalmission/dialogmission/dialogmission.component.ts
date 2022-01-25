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
    this.router.navigate(['pending-mission/'+this.data.idPV])
  }

  tipoServicio(tipo:string):any{
    let type={
      color:"",
      logo:"",
      actividad:""
    };
    switch(tipo) {
      case "skybluextend": {
        type.color='#229bd6';
        type.logo="../../assets/icon/promotoria.svg";
        type.actividad="Promotoría";
        break;
      }
      case  "navybluextend": {
        type.color='#161949';
        type.logo="../../assets/icon/mystery.svg"
        type.actividad="Mietery Shoper";
        break;
      }
      case "purplextend": {
        type.color='#825aa5';
        type.logo="../../assets/icon/demostrador.svg";
        type.actividad="Demostrador";
        break;
      }
      case "greenxtend": {
        type.color='#90c04e';
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
