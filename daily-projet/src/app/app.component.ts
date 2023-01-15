import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'daily-projet';
  color = 'blue';

  productColor(price:number){

    if(price > 300){

      return 'highlightDirective'
    }
    return 'color'
}

}
