import { Injectable } from '@angular/core';

import { environment } from '../environments/environment'


@Injectable({ providedIn: 'root' })
export class ContractService {

  public address = '';
  public usdcBalance = '';

  constructor() {
  }

  _wait(duration) {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        resolve();
      }, duration);
    });
  }


  isConnected() {
    return window['ethereum'] && window['ethereum'].isConnected();
  }

  async enable() {
    let res;

    try {
      res = await window['ethereum'].enable();
    } catch(e) {
      return "";
    }

    window['web3'] = new window['Web3'](window['ethereum']);

    this.address = res ? res[0] : "";
    return this.address;
  }

  async balanceOf(tokenAddress, address) {
    const token = new window['web3'].eth.Contract(environment.erc20Abi, tokenAddress);
    return await token.methods.balanceOf(address).call();
  }

  async loadUSDCBalance(address) {
    this.usdcBalance = await this.balanceOf(environment.usdcAddress, address);
    return this.usdcBalance;
  }
}
