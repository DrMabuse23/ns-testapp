"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("nativescript-angular/router");
var item_service_1 = require("../../providers/item.service");
var core_1 = require("@angular/core");
var router_2 = require("@angular/router");
var ItemDetailComponent = (function () {
    function ItemDetailComponent(itemService, route, routerExtensions) {
        this.itemService = itemService;
        this.route = route;
        this.routerExtensions = routerExtensions;
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.params["id"];
        this.item = this.itemService.getItem(id);
        console.log('id was coming', id);
    };
    ItemDetailComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    return ItemDetailComponent;
}());
ItemDetailComponent = __decorate([
    core_1.Component({
        selector: "ns-details",
        moduleId: module.id,
        templateUrl: "./item-detail.component.html",
    }),
    __metadata("design:paramtypes", [item_service_1.ItemService,
        router_2.ActivatedRoute,
        router_1.RouterExtensions])
], ItemDetailComponent);
exports.ItemDetailComponent = ItemDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0RBQStEO0FBQy9ELDZEQUEyRDtBQUUzRCxzQ0FBa0Q7QUFDbEQsMENBQWlEO0FBT2pELElBQWEsbUJBQW1CO0lBRzlCLDZCQUNVLFdBQXdCLEVBQ3hCLEtBQXFCLEVBQ3JCLGdCQUFrQztRQUZsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQ3hDLENBQUM7SUFFTCxzQ0FBUSxHQUFSO1FBQ0UsSUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRU0sb0NBQU0sR0FBYjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBbEJELElBa0JDO0FBbEJZLG1CQUFtQjtJQUwvQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFlBQVk7UUFDdEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSw4QkFBOEI7S0FDNUMsQ0FBQztxQ0FLdUIsMEJBQVc7UUFDakIsdUJBQWM7UUFDSCx5QkFBZ0I7R0FOakMsbUJBQW1CLENBa0IvQjtBQWxCWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vcHJvdmlkZXJzL2l0ZW0uc2VydmljZVwiO1xuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvaXRlbVwiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJucy1kZXRhaWxzXCIsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiBcIi4vaXRlbS1kZXRhaWwuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgSXRlbURldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGl0ZW06IEl0ZW07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgaWQgPSArdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbXCJpZFwiXTtcbiAgICB0aGlzLml0ZW0gPSB0aGlzLml0ZW1TZXJ2aWNlLmdldEl0ZW0oaWQpO1xuICAgIGNvbnNvbGUubG9nKCdpZCB3YXMgY29taW5nJywgaWQpO1xuICB9XG5cbiAgcHVibGljIGdvQmFjaygpIHtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xuICB9XG59XG4iXX0=