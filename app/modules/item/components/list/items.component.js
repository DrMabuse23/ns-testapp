"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var item_service_1 = require("../../providers/item.service");
var core_1 = require("@angular/core");
/**
 * tns debug android --debug-brk --device 330033ca994782e9
 *
 * @export
 * @class ItemsComponent
 * @implements {OnInit}
 */
var ItemsComponent = (function () {
    function ItemsComponent(itemService) {
        this.itemService = itemService;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        this.items = this.itemService.getItems();
    };
    ItemsComponent.prototype.testDebugBr = function () {
        var hurzi = 'pupsi';
        console.log(hurzi);
        var B = hurzi.split('');
        console.log(B);
    };
    return ItemsComponent;
}());
ItemsComponent = __decorate([
    core_1.Component({
        selector: "ns-items",
        moduleId: module.id,
        templateUrl: "./items.component.html",
    }),
    __metadata("design:paramtypes", [item_service_1.ItemService])
], ItemsComponent);
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkRBQTJEO0FBRTNELHNDQUFrRDtBQUVsRDs7Ozs7O0dBTUc7QUFNSCxJQUFhLGNBQWM7SUFHekIsd0JBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUksQ0FBQztJQUVqRCxpQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFRCxvQ0FBVyxHQUFYO1FBQ0UsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFmRCxJQWVDO0FBZlksY0FBYztJQUwxQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSx3QkFBd0I7S0FDdEMsQ0FBQztxQ0FJaUMsMEJBQVc7R0FIakMsY0FBYyxDQWUxQjtBQWZZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vcHJvdmlkZXJzL2l0ZW0uc2VydmljZVwiO1xuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvaXRlbVwiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG4vKipcbiAqIHRucyBkZWJ1ZyBhbmRyb2lkIC0tZGVidWctYnJrIC0tZGV2aWNlIDMzMDAzM2NhOTk0NzgyZTlcbiAqIFxuICogQGV4cG9ydFxuICogQGNsYXNzIEl0ZW1zQ29tcG9uZW50XG4gKiBAaW1wbGVtZW50cyB7T25Jbml0fVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtcy5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGl0ZW1zOiBJdGVtW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1TZXJ2aWNlLmdldEl0ZW1zKCk7XG4gIH1cblxuICB0ZXN0RGVidWdCcigpIHtcbiAgICBsZXQgaHVyemkgPSAncHVwc2knO1xuICAgIGNvbnNvbGUubG9nKGh1cnppKTtcbiAgICBsZXQgQiA9IGh1cnppLnNwbGl0KCcnKTtcbiAgICBjb25zb2xlLmxvZyhCKTtcbiAgfVxufVxuIl19