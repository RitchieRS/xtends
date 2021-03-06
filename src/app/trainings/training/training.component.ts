import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation, ElementRef, ViewChild, OnDestroy, Renderer2} from '@angular/core';
import { HabilidadesService } from '../../xservices/habilidades/habilidades.service';
import { __param } from 'tslib';
import { Location } from '@angular/common';
// import { Plugins } from '@capacitor/core';
// const { CapacitorVideoPlayer, Divice } = Plugins;
// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from 'swiper';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { style } from '@angular/animations';
// import { url } from 'inspector';
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
export class TrainingComponent implements OnInit, OnDestroy {
  @ViewChild('chingadovideo') chingadoVideo: ElementRef;

  cursodts: any;
  idCurso:       number;
  tipoCurso:     string;
  nombreCurso:   string;
  temaCurso:     string;
  mecanicaCurso: string;
  urlMaterial:  string;
  idCursoRecuperao: number;
  namee: string;
  colorr: string;
  iconn: string;
  typeFile: string;


  thumbsSwiper: any;
  buttonDisabled: boolean;
  opacityAka: number;
  player: any;

  srvCuseSubscribe: Subscription;


  // videoUrldtc = 'https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_640_3MG.mp4';
  // videoUrl='https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_640_3MG.mp4';
  constructor(private http: HttpClient,
    private   route: ActivatedRoute,
              private srvCursos: HabilidadesService,
              private location: Location,
              private renderer: Renderer2,
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
    this.srvCuseSubscribe = this.srvCursos.getHabilidades(token, idCurso).subscribe(
      (res) => {
         this.cursodts = res.resp.cursos[0];
         console.log(this.cursodts);
         this.tipoCurso = this.cursodts.tipoCurso;
         this.nombreCurso = this.cursodts.nombreCurso;
         this.temaCurso = this.cursodts.temaCurso;
         this.mecanicaCurso = this.cursodts.mecanicaCurso;
         this.urlMaterial = this.cursodts.urlMaterial;
         this.typeFile = this.urlMaterial.substr(-4);
         console.log(this.typeFile);
         if(this.typeFile.length === 0){
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


  btnPrueba(){
    const destryVideo = this.chingadoVideo.nativeElement;
    console.log(destryVideo);
    this.renderer.setAttribute(destryVideo, 'src', this.urlMaterial);
    // this.renderer.setStyle(this.chingadoVideo.nativeElement, 'display', 'none');
    // this.renderer.setAttribute(destryVideo, 'width', '50%');
  }

  // elchingadoVideo(){
  //   this.renderer.pause(this.myVideo.nativeElement);
  // }

  back(): void{
    this.location.back();
  };

  ngOnDestroy() {
    console.log('ngOnDestroy()');
    this.srvCuseSubscribe.unsubscribe();
  }

  // playVideo(){
  //   var ulr = "https://tutorial.techaltum.com/images/techaltum.mp4";
  //   CapacitorVideoPlayer.initPlayer({
  //      mode: mode,
  //      url: url,
  //      playerId: "vplayer",
  //      componentTag: "vplayer",
  //   });
  // }






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
