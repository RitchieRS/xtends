import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation, ViewChild,} from '@angular/core';
import { HabilidadesService } from '../../xservices/habilidades/habilidades.service';


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

  thumbsSwiper: any;

  // videoUrldtc = 'https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_640_3MG.mp4';
  // videoUrl='https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_640_3MG.mp4';
  constructor(private http: HttpClient,
    private   route: ActivatedRoute,
              private srvCursos: HabilidadesService, 
  ) { }
  // constructor(private fileOpener: FileOpener) { }
  // constructor(private stream: StreamingMedia) { }
  // pdfSrc='https://file-examples-com.github.io/uploads/2017/10/file-sample_150kB.pdf';



  ngOnInit() {
    const token = localStorage.getItem('token');
    this.srvCursos.getHabilidades(token).subscribe(
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
        }
        );
  }



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
