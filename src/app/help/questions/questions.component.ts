import { Component, OnInit } from '@angular/core';
import { Help, RespHelp } from 'src/app/xmodels/help';
import { HelpService } from 'src/app/xservices/help/help.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {

  dataQuestion: RespHelp[];

  constructor(
    private srvHelp: HelpService
  ) { }

  ngOnInit() {
    this.srvHelp.getHelp().subscribe((res) =>{
      if(res){
        console.log(res);
        this.dataQuestion = res.resp;
        console.log(this.dataQuestion);
      }
    });
  }

}
