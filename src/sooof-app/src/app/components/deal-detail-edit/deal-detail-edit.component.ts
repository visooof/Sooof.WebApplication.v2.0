import { AuthService } from "../../services/auth.service";
import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { DealService } from "../../services/deal.service";
import { Deal } from "../../models/deal";
@Component({
  selector: "deal-detail-edit",
  templateUrl: "deal-detail-edit.component.html",
  styleUrls: ["deal-detail-edit.component.css"]
})
export class DealDetailEditComponent {
  @Input("deal") deal: Deal;

  constructor(
    private authService: AuthService,
    private dealService: DealService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }
  ngOnInit() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate([""]);
    }
    let id = this.activatedRoute.snapshot.params['id'];
    console.log("Id is: " + id);
    if (id) {
      this.dealService.get(id).subscribe(deal => this.deal = deal);
      console.log(this.deal);
    }
    else if (id === '00000000-0000-0000-0000-000000000000') {
      console.log("id is empty Guid: adding a new deal...");
      this.deal = new Deal('00000000-0000-0000-0000-000000000000', "New Deal", null);
    }
    else {
      console.log("Invalid id: routing back to home...");
      this.router.navigate([""]);
    }
  }

  onInsert(deal: Deal) {
    this.dealService.add(deal).subscribe(
      (data) => {
        this.deal = data;
        console.log("Deal " + this.deal.Id + " has been added.");
        this.router.navigate([""]);
      },
      (error) => console.log(error)
    );
  }

  onUpdate(deal: Deal) {
    this.dealService.update(deal).subscribe(
      (data) => {
        this.deal = data;
        console.log("Deal " + this.deal.Id + " has been updated.");
        this.router.navigate(["deal/view", this.deal.Id]);
      },
      (error) => console.log(error)
    );
  }
  onDelete(deal: Deal) {
    var id = deal.Id;
    this.dealService.delete(id).subscribe(
      (data) => {
        console.log("Deal " + id + " has been deleted.");
        this.router.navigate([""]);
      },
      (error) => console.log(error)
    );
  }

  onDealDetailView(deal: Deal) {
    this.router.navigate(["deal/view", deal.Id]);
  }

  onBack() {
    this.router.navigate([""]);
  }
}