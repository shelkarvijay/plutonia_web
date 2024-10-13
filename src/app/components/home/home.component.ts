import { Component, HostListener, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  images = [
    {
      slogan: "Transforming Ideas into Impact. ",
      para1: "Unleashing Tomorrow's Solutions Today.",
      para2: "Ignites Progress!",
      spanText: "Innovation",
      imageName: "bulb.png"
    },
    {
      slogan: "Driving the Future. ",
      para1: "Innovation in Motion. Experience the Next Generation of",
      para2: "Excellence!",
      spanText: "Automotive",
      imageName: "automotive.png"
    },
    {
      slogan: "Reach New Heights. ",
      para1: "",
      para2: "Your Journey and Unlock Your True Potential!",
      spanText: "Elevate",
      imageName: "elevate.png"
    }
  ];

	paused = false;
	unpauseOnArrow = false;
	pauseOnIndicator = false;
	pauseOnHover = false;
	pauseOnFocus = false;

	@ViewChild('carousel', { static: true }) carousel!: NgbCarousel;

  animationState = 'out';
  isScrollEfforts: boolean = false;
  isScrollAbout: boolean = false;
  isScrollPartners: boolean = false;

  @HostListener('window:scroll', ['$event']) getScrollHeight(event: any) {
    if(window.pageYOffset > 130 ) {
      // this.animationState = 'in';
      this.isScrollEfforts = true;
    } else {
      this.isScrollEfforts = false;
    }
    if(window.pageYOffset > 820 ) {
      // this.animationState = 'in';
      this.isScrollAbout = true;
    } else {
      this.isScrollAbout = false;
    }

    if(window.pageYOffset > 1320 ) {
      // this.animationState = 'in';
      this.isScrollPartners = true;
    } else {
      this.isScrollPartners = false;
    }
 }
	togglePaused() {
		if (this.paused) {
			this.carousel.cycle();
		} else {
			this.carousel.pause();
		}
		this.paused = !this.paused;
	}

	onSlide(slideEvent: NgbSlideEvent) {
		if (
			this.unpauseOnArrow &&
			slideEvent.paused &&
			(slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
		) {
			this.togglePaused();
		}
		if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
			this.togglePaused();
		}
	}

}
