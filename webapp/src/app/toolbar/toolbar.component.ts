import { Component, OnInit, 
         ViewEncapsulation }            from '@angular/core';
import { UserService }                  from '../user.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ToolbarComponent implements OnInit {
  public title = "Identify Me"
  constructor(public userService: UserService) { }

  ngOnInit() {
  }

}
