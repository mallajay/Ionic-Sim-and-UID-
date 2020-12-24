import { Injectable } from "@angular/core";
import { Sim } from "@ionic-native/sim/ngx";
import { HelperService } from "../helper-service/helper.service";
import { Uid } from "@ionic-native/uid/ngx";
import { AndroidPermissions } from "@ionic-native/android-permissions/ngx";

@Injectable({
  providedIn: "root",
})
export class DeviceInfoService {
  hasPermission: any;
  simResult: any;
  simResultObject: any;
  IMEI: any;
  UUID: any;
  IMSI: any;
  ICCID: any;

  constructor(
    private sim: Sim,
    private helperService: HelperService,
    private uid: Uid,
    private androidPermissions: AndroidPermissions
  ) {
    this.getInfo();
  }

  getInfo() {
    if (this.helperService.isNativePlatform()) {
      this.sim.hasReadPermission().then((info) => {
        if (info) {
          // IF HAS PERMISSION THEN GET DATA
          this.hasPermission = info;
          this.getSIMInfo();
          this.getuniqueIdentifiers();
        } else {
          // SEND REQUEST FOR PERMISSION THEN GET DATA
          this.androidPermissions
            .requestPermission(
              this.androidPermissions.PERMISSION.READ_PHONE_STATE
            )
            .then((res) => {
              this.hasPermission = info;
              this.getSIMInfo();
              this.getuniqueIdentifiers();
            });
        }
      });
    }
  }

  getuniqueIdentifiers() {
    this.UUID = this.uid.UUID;
    this.IMEI = this.uid.IMEI;
    this.IMSI = this.uid.IMSI;
    this.ICCID = this.uid.ICCID;
  }

  getSIMInfo() {
    this.sim.getSimInfo().then((res) => {
      this.simResult = JSON.stringify(res);
      this.simResultObject = res;
    });
  }
}
