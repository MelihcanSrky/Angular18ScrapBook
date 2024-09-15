import { Component } from "@angular/core";

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <h1>Navbar Component</h1>
    <p>Dummy paragraph</p>
    <button>Submit</button>
  `,
  templateUrl: './navbar.component.html',
  // styles: `h1{color: red; font-size: 24px}`,
  styleUrl: './navbar.component.css'
})

export class AppNavbar {

}
