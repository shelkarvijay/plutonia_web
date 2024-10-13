import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
declare var anime: any; 

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit {
  contactForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) {}
  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.contactForm = this.formBuilder.group({
      fName: [],
      lName: [],
      mobileNo: [],
      emailId: [],
      message: []
    })
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
