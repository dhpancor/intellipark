import {Component} from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">IntelliPark &copy; 2020</span>
    <div class="socials">
      <a href="https://github.com/dhernandez0798" target="_blank" class="ion ion-social-github"></a>
      <a href="https://www.linkedin.com/in/dhernandez0798/" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
