import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title:string = 'Task Tracker'

  alterMassage(){
    alert('Click')
  }

  alterMassage2(){
    if(this.title === 'Bothtama obanna epa'){
      this.title = "Task Tracker"
    } else{
      this.title = "Bothtama obanna epa"
    }
  }
}
