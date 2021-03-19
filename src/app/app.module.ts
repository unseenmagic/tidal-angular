import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MobileHeadComponent } from './mobile-head/mobile-head.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MobileFooterComponent } from './mobile-footer/mobile-footer.component';
import { AccountComponent } from './account/account.component';
import { AlertMessageComponent } from './alert-message/alert-message.component';
import { MarketComponent } from './market/market.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { ClaimsComponent } from './claims/claims.component';
import { StakingComponent } from './staking/staking.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileHeadComponent,
    SideMenuComponent,
    MainContentComponent,
    MobileFooterComponent,
    AccountComponent,
    AlertMessageComponent,
    MarketComponent,
    BuyComponent,
    SellComponent,
    ClaimsComponent,
    StakingComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
