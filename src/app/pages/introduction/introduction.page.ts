import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";
import { Platform, MenuController } from "@ionic/angular";

@Component({
  selector: "app-introduction",
  templateUrl: "./introduction.page.html",
  styleUrls: ["./introduction.page.scss"],
})
export class IntroductionPage implements OnInit {
  showSkip = true;

  @ViewChild("slider", { read: ElementRef, static: false }) slider: ElementRef;

  sliderOpts2 = {
    speed: 400,
    initialSlide: 0,
    slidesPerView: 1,
  };

  constructor(
    private router: Router,
    private storage: Storage,
    public platform: Platform,
    public menu: MenuController
  ) {}

  ngOnInit() {}

  startApp() {
    this.router
      .navigateByUrl("/home", { replaceUrl: true })
      .then(() => this.storage.set("introductionComplete", true));
  }

  ionViewWillEnter() {
    this.storage.get("introductionComplete").then((res) => {
      if (res === true) {
        this.router.navigateByUrl("/home", { replaceUrl: true });
      }
    });
    this.menu.enable(false);
  }

  slideNext(slideView) {
    slideView.slideNext(500);
  }
}
