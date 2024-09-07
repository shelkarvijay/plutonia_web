import { Component, HostListener, OnInit } from '@angular/core';
import { SlideInOutAnimation } from './animations';
import { offset } from '@popperjs/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  animations: [SlideInOutAnimation]

})
export class ServicesComponent implements OnInit {
  animationState = 'out';
  isScroll: boolean = false;

  offset: any;

  @HostListener('window:scroll', ['$event']) getScrollHeight(event: any) {
    // console.log(window.pageYOffset, event);
    if(window.pageYOffset > 1100 ) {
      this.animationState = 'in';
      this.isScroll = true;
    }
    else {
      this.isScroll = false;
    }
 }

 constructor() {
  
  this.offset = window.pageYOffset;
 }

  ngOnInit() {
    // setTimeout(() => {
    //   this.animationState = 'in';
    // }, 2000);
  }
  
}
