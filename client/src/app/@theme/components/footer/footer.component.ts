import {Component} from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">IntelliPark - Crafted with ♥ by <b><a href="https://github.com/dhernandez0798" target="_blank">@dhernandez0798</a></b> 2020.</span>
    <div class="socials">
      <!--<a href="#" target="_blank" class="ion ion-social-github"></a>
      <a href="#" target="_blank" class="ion ion-social-facebook"></a>
      <a href="#" target="_blank" class="ion ion-social-twitter"></a>
      <a href="#" target="_blank" class="ion ion-social-linkedin"></a>-->
    </div>
  `,
})
export class FooterComponent {
}
