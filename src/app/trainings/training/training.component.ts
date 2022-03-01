import { Component, OnInit } from '@angular/core';
// import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
// import { StreamingMedia, StreamingVideoOptions } from '@awesome-cordova-plugins/streaming-media/ngx';


@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss'],
})
export class TrainingComponent implements OnInit {
  // videoUrldtc = 'https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_640_3MG.mp4';
  // videoUrl='https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_640_3MG.mp4';
  constructor() { }
  // constructor(private stream: StreamingMedia) { }

  ngOnInit() {}

  // streamVideo()
  // {
  //   var option: StreamingVideoOptions = {
  //     orientation:"portrait",
  //     controls: true
  //   }
  //   this.stream.playVideo(this.videoUrl, option);
  // }
}
