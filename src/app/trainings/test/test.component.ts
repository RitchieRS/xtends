import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestService } from 'src/app/xservices/test/test.service';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  idCurso: number;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private srvTest: TestService,
    
  ) { }

  ngOnInit() {
    this.idCurso = Number(this.route.snapshot.paramMap.get('idCurso'));
    console.log(this.idCurso);

    const idCurso = this.idCurso;
    console.log(idCurso);

    const token = localStorage.getItem('token');
    this.srvTest.getTest(token, idCurso).subscribe(
      (res) => {
         
        }
        );
  }

}
