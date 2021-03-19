import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

import { ContractService } from '../contract.service';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  loading: boolean = false;

  usdcBalance: string = "";
  abbrAddress: string = "";

  alertTitle: string = "";
  alertBody: string = "";
  willShowAlertMessage: boolean = false;

  constructor(private contractService: ContractService) { }

  ngOnInit() {
    if (this.contractService.address && this.contractService.usdcBalance) {
      this.abbrAddress = this.getAbbr(this.contractService.address);
      this.usdcBalance = this.contractService.usdcBalance;
    }
  }

  getAbbr(line) {
    const len = line.length;
    if (len < 10) return len;
    return line.substr(0, 6) + '...' + line.substr(len - 4, len);
  }

  async connect() {
    if (!this.contractService.isConnected()) {
      this.showAlert("Requires MetaMask", "Please install MetaMask Chrome Extension");
      return;
    }

    const address = await this.contractService.enable();
    this.abbrAddress = this.getAbbr(address);
    this.usdcBalance = await this.contractService.loadUSDCBalance(address);
  }

  showAlert(title, body) {
    this.alertTitle = title;
    this.alertBody = body;
    this.willShowAlertMessage = true;
  }

  closeAlert() {
    this.willShowAlertMessage = false;
  }
}
