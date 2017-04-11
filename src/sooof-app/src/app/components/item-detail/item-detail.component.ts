import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ItemService } from "../../services/item.service";
import { Item } from "../../models/item";
@Component({
  selector: "item-detail",
  templateUrl: "item-detail.component.html",
  styleUrls: ["item-detail.component.css"]
})
export class ItemDetailComponent {
  @Input("item") item: Item;

  constructor(private itemService: ItemService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }
  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];
    console.log("Id is: " + id);
    if (id) {
      this.itemService.get(id).subscribe(item => this.item = item);
      console.log(this.item);
    }
    else {
      console.log("Invalid id: routing back to home...");
      this.router.navigate([""]);
    }
  }
}