import {Component, OnInit} from "@angular/core";
import {NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {LoginModalService, Principal} from "../shared";
import {JhiEventManager} from "ng-jhipster";

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: [
        'home.scss'
    ]

})
export class AboutComponent implements OnInit {
    account: Account;
    modalRef: NgbModalRef;

    constructor(
        private principal: Principal,
        private loginModalService: LoginModalService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {

    }

}
