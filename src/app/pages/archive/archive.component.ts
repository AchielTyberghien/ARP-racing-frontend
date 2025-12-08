import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-archive',
  imports: [HeaderComponent],
  template: `
    <app-header></app-header>
  `,
  styles: ``,
})
export class ArchiveComponent implements OnInit {
  userId: string | null = '';

  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('id');
    });
    console.log('Archive for user:', this.userId);
  }
}