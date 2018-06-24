import {Component, OnInit} from "@angular/core";
import {NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {LoginModalService, Principal} from "../shared";
import {JhiEventManager} from "ng-jhipster";

@Component({
    selector: 'home-first-half',
    templateUrl: './firstHalf.component.html',
    styleUrls: [
        'home.scss'
    ]

})
export class FirstHalfComponent implements OnInit {
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
