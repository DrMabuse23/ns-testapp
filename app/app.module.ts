import { ItemModule } from "./modules/item/item.module";
import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
// NO_ERRORS_SCHEMA
@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    ItemModule
  ],
  declarations: [
    AppComponent
  ]
})
export class AppModule { }