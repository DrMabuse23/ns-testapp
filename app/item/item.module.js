"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("nativescript-angular/router");
var item_detail_component_1 = require("./components/detail/item-detail.component");
var items_component_1 = require("./components/list/items.component");
var item_service_1 = require("./providers/item.service");
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
exports.itemRoutes = [
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
            router_1.NativeScriptRouterModule
        ],
        declarations: comp.slice(),
        providers: providers.slice(),
        exports: comp.concat([
            nativescript_module_1.NativeScriptModule,
            router_1.NativeScriptRouterModule
        ])
    })
], ItemModule);
exports.ItemModule = ItemModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpdGVtLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNEQUF1RTtBQUV2RSxtRkFBZ0Y7QUFDaEYscUVBQW1FO0FBQ25FLHlEQUF1RDtBQUN2RCxzQ0FBeUM7QUFDekMsZ0ZBQThFO0FBRWpFLFFBQUEsVUFBVSxHQUFXO0lBQ2hDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtJQUM1QyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLDJDQUFtQixFQUFFO0NBQ3JELENBQUM7QUFDRixJQUFNLElBQUksR0FBRztJQUNYLGdDQUFjO0lBQ2QsMkNBQW1CO0NBQ3BCLENBQUM7QUFDRixJQUFNLFNBQVMsR0FBRztJQUNoQiwwQkFBVztDQUNaLENBQUM7QUFtQkYsSUFBYSxVQUFVO0lBQXZCO0lBQTBCLENBQUM7SUFBRCxpQkFBQztBQUFELENBQUMsQUFBM0IsSUFBMkI7QUFBZCxVQUFVO0lBakJ0QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCx3Q0FBa0I7WUFDbEIsaUNBQXdCO1NBQ3pCO1FBQ0QsWUFBWSxFQUNQLElBQUksUUFDUjtRQUNELFNBQVMsRUFDSixTQUFTLFFBQ2I7UUFDRCxPQUFPLEVBQ0YsSUFBSTtZQUNQLHdDQUFrQjtZQUNsQixpQ0FBd0I7VUFDekI7S0FDRixDQUFDO0dBQ1csVUFBVSxDQUFJO0FBQWQsZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBJdGVtRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9kZXRhaWwvaXRlbS1kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJdGVtc0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvbGlzdC9pdGVtcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vcHJvdmlkZXJzL2l0ZW0uc2VydmljZVwiO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcblxuZXhwb3J0IGNvbnN0IGl0ZW1Sb3V0ZXM6IFJvdXRlcyA9IFtcbiAgeyBwYXRoOiBcIml0ZW1zXCIsIGNvbXBvbmVudDogSXRlbXNDb21wb25lbnQgfSxcbiAgeyBwYXRoOiBcIml0ZW0vOmlkXCIsIGNvbXBvbmVudDogSXRlbURldGFpbENvbXBvbmVudCB9LFxuXTtcbmNvbnN0IGNvbXAgPSBbXG4gIEl0ZW1zQ29tcG9uZW50LFxuICBJdGVtRGV0YWlsQ29tcG9uZW50XG5dO1xuY29uc3QgcHJvdmlkZXJzID0gW1xuICBJdGVtU2VydmljZVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uY29tcFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICAuLi5wcm92aWRlcnNcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIC4uLmNvbXAsXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1Nb2R1bGUgeyB9XG4iXX0=