import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation, ViewChild,} from '@angular/core';
import { HabilidadesService } from '../../xservices/habilidades/habilidades.service';
import { __param } from 'tslib';
import { Location } from '@angular/common';

// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from 'swiper';
import { ActivatedRoute } from '@angular/router';
SwiperCore.use([FreeMode, Navigation, Thumbs]);

// import { FileOpener } from '@ionic-native/file-opener/ngx';
// import { FileOpener } from '@awesome-cordova-plugins/file-opener/ngx';
// import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
// import { StreamingMedia, StreamingVideoOptions } from '@awesome-cordova-plugins/streaming-media/ngx';


@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss'],
})
export class TrainingComponent implements OnInit {
  cursodts: any;
  idCurso:       number;
  tipoCurso:     string;
  nombreCurso:   string;
  temaCurso:     string;
  mecanicaCurso: string;
  urlMaterial1:  string;
  urlMaterial2:  string;
  urlMaterial3:  string;
  urlMaterial4:  string;
  urlMaterial5:  string;
  idCursoRecuperao: number;
  namee: string;
  colorr: string;
  iconn: string;
  typeFile: string;


  thumbsSwiper: any;
  buttonDisabled: boolean;
  opacityAka: number;


  // videoUrldtc = 'https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_640_3MG.mp4';
  // videoUrl='https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_640_3MG.mp4';
  constructor(private http: HttpClient,
    private   route: ActivatedRoute,
              private srvCursos: HabilidadesService,
              private location: Location,
  ) { }
  // constructor(private fileOpener: FileOpener) { }
  // constructor(private stream: StreamingMedia) { }
  // pdfSrc='https://file-examples-com.github.io/uploads/2017/10/file-sample_150kB.pdf';



  ngOnInit() {

    this.idCurso = Number(this.route.snapshot.paramMap.get('idCurso'));
    this.namee = this.route.snapshot.paramMap.get('namee');
    this.iconn = this.route.snapshot.paramMap.get('iconn');
    this.colorr = this.route.snapshot.paramMap.get('colorr');
    console.log(this.idCurso);

    const idCurso = this.idCurso;
    console.log(idCurso);

    const token = localStorage.getItem('token');
    this.srvCursos.getHabilidades(token, idCurso).subscribe(
      (res) => {
         this.cursodts = res.resp.cursos[0];
         console.log(this.cursodts);
         this.tipoCurso = this.cursodts.tipoCurso;
         this.nombreCurso = this.cursodts.nombreCurso;
         this.temaCurso = this.cursodts.temaCurso;
         this.mecanicaCurso = this.cursodts.mecanicaCurso;
         this.urlMaterial1 = this.cursodts.urlMaterial1;
         this.urlMaterial2 = this.cursodts.urlMaterial2;
         this.urlMaterial3 = this.cursodts.urlMaterial3;
         this.urlMaterial4 = this.cursodts.urlMaterial4;
         this.urlMaterial5 = this.cursodts.urlMaterial5;
         this.typeFile = this.urlMaterial1.substr(-4);
         console.log(this.typeFile);
         if(this.typeFile.length==0){
          console.log('valio medres y no hay curso');
          this.buttonDisabled = true;
          this.opacityAka = 0.5 ;
         }else{
          this.buttonDisabled = false;
          this.opacityAka = 1 ;
         }
        }
        );
  }
  back() : void{

    this.location.back();

  };





//   openPdf(){
//     this.fileOpener.open('path/to/file.pdf', 'application/pdf')
//   .then(() => console.log('File is opened'))
//   .catch(e => console.log('Error opening file', e));

// this.fileOpener.showOpenWithDialog('path/to/file.pdf', 'application/pdf')
//   .then(() => console.log('File is opened'))
//   .catch(e => console.log('Error opening file', e));
//   }



  // streamVideo()
  // {
  //   var option: StreamingVideoOptions = {
  //     orientation:"portrait",
  //     controls: true
  //   }
  //   this.stream.playVideo(this.videoUrl, option);
  // }
}
