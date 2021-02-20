import { BrowserModule } from '@angular/platform-browser';
import { NgModule  , Injector, ApplicationRef} from '@angular/core';

import { createCustomElement } from '@angular/elements';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrameworkPollComponent } from './framework-poll/framework-poll.component';




import { ButtonComponent } from './button/button.component';






@NgModule({
  declarations: [
    AppComponent,
    FrameworkPollComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents : [ButtonComponent]
})
export class AppModule {

  constructor(private  injector : Injector){}


  // ngDoBootstrap(appRef : ApplicationRef ){
  //   const el = createCustomElement(FrameworkPollComponent, {injector : this.injector});
  //   customElements.define('framework-poll' , el);
  // }


  ngDoBootstrap(){
    const el = createCustomElement(ButtonComponent, {injector : this.injector});
    customElements.define('app-button', el);

  }


}





