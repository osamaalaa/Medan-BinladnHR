import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { DashBordSetupModelService } from '../dashbord.model.services';
import { UIService } from 'src/app/services/ui.service';
import { ActivatedRoute } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CONSTANTS } from 'src/app/services/constants.service';

@Component({
  selector: 'app-inprogress-workorder',
  templateUrl: './inprogress-workorder.component.html',
  styleUrls: ['./inprogress-workorder.component.scss']
})
export class InprogressWorkorderComponent implements OnInit {

  isDataLoading: boolean = false
  EMPLOYEE_ID: string | number;
  PROJECT_ID: string | number;
  work_order_id: string | number;
  WORK_ORDER_OWNER: string | number;
  CREATED_BY: string | number;
  USER: any;

  constructor(
    private homeService: HomeService,
    public dashBordSetupModelService: DashBordSetupModelService,
    private ui: UIService,
    private route: ActivatedRoute
  ) {
    this.getUserDetails()
  }

  ngOnInit() {
    this.ProgressWorkOrder();
  }

  /**Getting Employee Id*/
  getUserDetails() {
    this.USER = this.homeService.getEmployeeId();
    this.EMPLOYEE_ID = JSON.parse(this.USER).EMPLOYEE_ID;
  }

  ProgressWorkOrder(): void {
    this.isDataLoading = true
    this.homeService.getworkorderdetails(this.EMPLOYEE_ID).subscribe(
      data => {
        this.dashBordSetupModelService.displayData = data.rows
        this.dashBordSetupModelService.savedData = data.rows
        this.isDataLoading = false
      },
      error => {
        this.isDataLoading = false
        this.ui.createMessage('error', 'Error while getting Inprogress Order : ' + error.error.message)
      },
    )
  }
}