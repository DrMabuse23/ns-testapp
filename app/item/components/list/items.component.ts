import { ItemService } from "../../providers/item.service";
import { Item } from "../../models/item";
import { Component, OnInit } from "@angular/core";

/**
 * tns debug android --debug-brk --device 330033ca994782e9
 * 
 * @export
 * @class ItemsComponent
 * @implements {OnInit}
 */
@Component({
  selector: "ns-items",
  moduleId: module.id,
  templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
  items: Item[];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.items = this.itemService.getItems();
  }

  testDebugBr() {
    let hurzi = 'pupsi';
    console.log(hurzi);
    let B = hurzi.split('');
    console.log(B);
  }
}
