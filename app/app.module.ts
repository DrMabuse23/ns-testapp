import { ItemModule } from "./item/item.module";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

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
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }