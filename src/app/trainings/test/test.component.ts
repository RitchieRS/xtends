import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/xservices/test/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {

  constructor(
    private srvTest: TestService,
  ) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    this.srvTest.getTest(token).subscribe(
      (res) => {
         
        }
        );
  }

}
