import { Component, Input } from "@angular/core";
import { Item } from "../../models/item";
@Component({
  selector: "item-detail",
  templateUrl: "item-detail.component.html",
  styleUrls: ["item-detail.component.css"]
})
export class ItemDetailComponent {
  @Input("item") item: Item;
}