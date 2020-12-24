import { HelperService } from "./../../services/helper-service/helper.service";
import { Component, OnInit } from "@angular/core";
import { Sim } from "@ionic-native/sim/ngx";
import { Uid } from "@ionic-native/uid/ngx";
import { AndroidPermissions } from "@ionic-native/android-permissions/ngx";
import { Device } from "@ionic-native/device/ngx";
import { DeviceInfoService } from "src/app/services/device-info-service/device-info.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  constructor(public deviceInfoService: DeviceInfoService) {}

  ngOnInit() {}

  doRefresh(event) {
    this.ngOnInit();
    setTimeout(() => {
      console.log("Async operation has ended");
      event.target.complete();
    }, 4000);
  }
}
