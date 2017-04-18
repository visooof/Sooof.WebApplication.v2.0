import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { Deal } from "../../models/deal";
import { DealService } from "../../services/deal.service";
@Component({
  selector: "deal-list",
  templateUrl: "deal-list.component.html",
  styleUrls: ["deal-list.component.css"]
})
export class DealListComponent implements OnInit {
  @Input() class: string;
  title: string;
  selectedDeal: Deal;
  deals: Deal[];
  errorMessage: string;

  constructor(private dealService: DealService, private router: Router) { }

  ngOnInit() {
    console.log("DealListComponent instantiated with the following type: " + this.class);

    var s = null;
    switch (this.class) {
      case "deals":
      default:
        this.title = "Deals";
        s = this.dealService.getDeals();
        break;
      case "my-joined-deals":
        this.title = "My Joined Deals";
        s = this.dealService.getMyJoinedDeals();
        break;
      case "my-watching-deals":
        this.title = "My Watching Deals";
        s = this.dealService.getMyWatchingDeals();
        break;
    }
    s.subscribe(
      deals => this.deals = deals,
      error => this.errorMessage = <any>error
    );

  }

  onSelect(deal: Deal) {
    this.selectedDeal = deal;
    console.log("Deal " + this.selectedDeal.Id + " has been clicked: loading DealDetailComponent...");
    this.router.navigate(["deal/view", this.selectedDeal.Id]);
  }
}