import { AuthService } from "../../services/auth.service";
import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { DealService } from "../../services/deal.service";
import { Deal } from "../../models/deal";
@Component({
  selector: "deal-detail-view",
  templateUrl: "deal-detail-view.component.html",
  styleUrls: ["deal-detail-view.component.css"]
})
export class DealDetailViewComponent {
  @Input("deal") deal: Deal;

  constructor(
    private authService: AuthService,
    private dealService: DealService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }
  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];
    console.log("Id is: " + id);
    if (id) {
      this.dealService.get(id).subscribe(deal => this.deal = deal);
      console.log(this.deal);
    }
    else if (id === '00000000-0000-0000-0000-000000000000') {
      console.log("id is empty Guid: switching to edit mode...");
      this.router.navigate(["deal/edit", '00000000-0000-0000-0000-000000000000']);
    }
    else {
      console.log("Invalid id: routing back to home...");
      this.router.navigate([""]);
    }
  }

  onDealDetailEdit(deal: Deal) {
    this.router.navigate(["deal/edit", deal.Id]);
  }
}