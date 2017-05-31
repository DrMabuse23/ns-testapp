import { RouterExtensions } from "nativescript-angular/router";
import { ItemService } from "../../providers/item.service";
import { Item } from "../../models/item";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "ns-details",
  moduleId: module.id,
  templateUrl: "./item-detail.component.html",
})
export class ItemDetailComponent implements OnInit {
  item: Item;

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private routerExtensions: RouterExtensions
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params["id"];
    this.item = this.itemService.getItem(id);
    console.log('id was coming', id);
  }

  public goBack() {
    this.routerExtensions.back();
  }
}
