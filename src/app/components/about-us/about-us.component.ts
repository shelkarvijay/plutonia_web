import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';

declare var anime: any; 

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit, AfterViewInit {
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

  ngAfterViewInit(): void {
    anime.timeline()
      .add({
        targets: '.c2 .word',
        scale: [14,1],
        opacity: [0,1],
        easing: "easeOutCirc",
        duration: 800,
        delay: (el: any, i: number) => 100 * i
      }).add({
        targets: '.c2',
        duration: 600,
        easing: 'linear',
        direction: 'alternate'
      });
    }
}
