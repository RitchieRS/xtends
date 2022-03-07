import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation, ViewChild,} from '@angular/core';


// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from 'swiper';

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

  thumbsSwiper: any;

  // videoUrldtc = 'https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_640_3MG.mp4';
  // videoUrl='https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_640_3MG.mp4';
  constructor(private http: HttpClient) { }
  // constructor(private fileOpener: FileOpener) { }
  // constructor(private stream: StreamingMedia) { }
  // pdfSrc='https://file-examples-com.github.io/uploads/2017/10/file-sample_150kB.pdf';



  ngOnInit() {}



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
