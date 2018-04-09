import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {RequestsService} from "../../services/requests.service";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'dashboard-component',
    templateUrl: '../../templates/dashboard/dashboard.template.html',
    styleUrls: [],
})
export class DashboardComponent {

    constructor(private requestsService: RequestsService,
                private router: Router,
                private titleService: Title) {
    };

    ngOnInit() {
        if (!window.localStorage.getItem('access_token')) {
            this.router.navigate(['/login']);
        }
        this.titleService.setTitle("BrightLife Admin - Dashboard");
    }
}
