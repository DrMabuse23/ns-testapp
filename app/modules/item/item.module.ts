import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router/src/config";
import { ItemDetailComponent } from "./components/detail/item-detail.component";
import { ItemsComponent } from "./components/list/items.component";
import { ItemService } from "./providers/item.service";
import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

const routes: Routes = [
  { path: "items", component: ItemsComponent },
  { path: "item/:id", component: ItemDetailComponent },
];

  
const comp = [
  ItemsComponent,
  ItemDetailComponent
];

const providers = [
  ItemService
];

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptRouterModule.forRoot(routes)
  ],
  entryComponents: [
    ...comp
  ],
  declarations: [
    ...comp
  ],
  providers: [
    ...providers
  ],
  exports: [
    ...comp,
    NativeScriptModule,
    NativeScriptRouterModule
  ]
})
export class ItemModule { }
