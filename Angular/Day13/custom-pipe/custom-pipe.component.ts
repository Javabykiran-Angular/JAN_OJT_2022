import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {

  strDetails:string='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit quo quibusdam necessitatibus cum iusto! Numquam a labore ullam sit sed? Provident amet doloremque suscipit molestias nobis veniam nisi quibusdam quod.';
  constructor() { }

  ngOnInit() {
  }

}
