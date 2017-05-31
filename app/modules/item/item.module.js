"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("nativescript-angular/router");
var item_detail_component_1 = require("./components/detail/item-detail.component");
var items_component_1 = require("./components/list/items.component");
var item_service_1 = require("./providers/item.service");
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var routes = [
    { path: "items", component: items_component_1.ItemsComponent },
    { path: "item/:id", component: item_detail_component_1.ItemDetailComponent },
];
var comp = [
    items_component_1.ItemsComponent,
    item_detail_component_1.ItemDetailComponent
];
var providers = [
    item_service_1.ItemService
];
var ItemModule = (function () {
    function ItemModule() {
    }
    return ItemModule;
}());
ItemModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_module_1.NativeScriptModule,
            router_1.NativeScriptRouterModule.forRoot(routes)
        ],
        entryComponents: comp.slice(),
        declarations: comp.slice(),
        providers: providers.slice(),
        exports: comp.concat([
            nativescript_module_1.NativeScriptModule,
            router_1.NativeScriptRouterModule
        ])
    })
], ItemModule);
exports.ItemModule = ItemModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpdGVtLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNEQUF1RTtBQUV2RSxtRkFBZ0Y7QUFDaEYscUVBQW1FO0FBQ25FLHlEQUF1RDtBQUN2RCxzQ0FBeUM7QUFDekMsZ0ZBQThFO0FBRTlFLElBQU0sTUFBTSxHQUFXO0lBQ3JCLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtJQUM1QyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLDJDQUFtQixFQUFFO0NBQ3JELENBQUM7QUFHRixJQUFNLElBQUksR0FBRztJQUNYLGdDQUFjO0lBQ2QsMkNBQW1CO0NBQ3BCLENBQUM7QUFFRixJQUFNLFNBQVMsR0FBRztJQUNoQiwwQkFBVztDQUNaLENBQUM7QUFzQkYsSUFBYSxVQUFVO0lBQXZCO0lBQTBCLENBQUM7SUFBRCxpQkFBQztBQUFELENBQUMsQUFBM0IsSUFBMkI7QUFBZCxVQUFVO0lBcEJ0QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCx3Q0FBa0I7WUFDbEIsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztTQUN6QztRQUNELGVBQWUsRUFDVixJQUFJLFFBQ1I7UUFDRCxZQUFZLEVBQ1AsSUFBSSxRQUNSO1FBQ0QsU0FBUyxFQUNKLFNBQVMsUUFDYjtRQUNELE9BQU8sRUFDRixJQUFJO1lBQ1Asd0NBQWtCO1lBQ2xCLGlDQUF3QjtVQUN6QjtLQUNGLENBQUM7R0FDVyxVQUFVLENBQUk7QUFBZCxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXIvc3JjL2NvbmZpZ1wiO1xuaW1wb3J0IHsgSXRlbURldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvZGV0YWlsL2l0ZW0tZGV0YWlsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSXRlbXNDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2xpc3QvaXRlbXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gXCIuL3Byb3ZpZGVycy9pdGVtLnNlcnZpY2VcIjtcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7IHBhdGg6IFwiaXRlbXNcIiwgY29tcG9uZW50OiBJdGVtc0NvbXBvbmVudCB9LFxuICB7IHBhdGg6IFwiaXRlbS86aWRcIiwgY29tcG9uZW50OiBJdGVtRGV0YWlsQ29tcG9uZW50IH0sXG5dO1xuXG4gIFxuY29uc3QgY29tcCA9IFtcbiAgSXRlbXNDb21wb25lbnQsXG4gIEl0ZW1EZXRhaWxDb21wb25lbnRcbl07XG5cbmNvbnN0IHByb3ZpZGVycyA9IFtcbiAgSXRlbVNlcnZpY2Vcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKVxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICAuLi5jb21wXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLmNvbXBcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgLi4ucHJvdmlkZXJzXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICAuLi5jb21wLFxuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBJdGVtTW9kdWxlIHsgfVxuIl19