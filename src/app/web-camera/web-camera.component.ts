import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from "rxjs";
import { WebcamImage, WebcamInitError, WebcamUtil } from "ngx-webcam";

@Component({
  selector: 'app-web-cam',
  templateUrl: './web-camera.component.html',
  styleUrls: ['./web-camera.component.scss']
})
export class WebCameraComponent implements OnInit {
  showWebcam = true;
  allowCameraSwitch = true;
  multipleWebcamsAvailable = false;
  deviceId: string;
  videoOptions: MediaTrackConstraints = {
    width: {
      min: 640,
      max: 640
    },
    height: {
      min: 480,
      max: 480
    },
    aspectRatio: 1.333333333,
    facingMode: 'user',
  };
  errors: WebcamInitError[] = [];
  webcamImage: WebcamImage = null;

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  private nextWebcam: Subject<boolean|string> = new Subject<boolean|string>();

  ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        console.log(mediaDevices);
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      });
  }

  triggerSnapshot(): void {
    this.trigger.next();
  }

  toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }

  handleInitError(error: WebcamInitError): void {
    console.log('init error')
    this.errors.push(error);
  }

  showNextWebcam(directionOrDeviceId: boolean|string): void {
    // true => move forward through devices
    // false => move backwards through devices
    // string => move to device with given deviceId
    this.nextWebcam.next(directionOrDeviceId);
  }

  handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
  }

  cameraWasSwitched(deviceId: string): void {
    console.log('active device: ' + deviceId);
    this.deviceId = deviceId;
  }

  get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  get nextWebcamObservable(): Observable<boolean|string> {
    return this.nextWebcam.asObservable();
  }
}
