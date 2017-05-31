import { itemRoutes } from "./item/item.module";
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";


const routes: Routes = [
  { path: "", redirectTo: "/items", pathMatch: "full" },
  ...itemRoutes
];

@NgModule({
  imports: [
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes)
  ],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
