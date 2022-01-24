import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {
  showAbout:boolean = true;
  subscription?:Subscription;

  constructor(private uiService:UiService,private router:Router) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAbout = value);
   }

  ngOnInit(): void {
  }

  toggleAbout() {
    this.uiService.toggleAbout();
  }

  hasRoute(route:string) {
    return this.router.url === route;
  }

}
