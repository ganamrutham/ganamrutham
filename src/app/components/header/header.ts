import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
