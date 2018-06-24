import {Component, OnInit} from "@angular/core";
import {NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {LoginModalService, Principal} from "../shared";
import {JhiEventManager} from "ng-jhipster";

@Component({
    selector: 'home-second-half',
    templateUrl: './secondHalf.component.html',
    styleUrls: ['home.scss'
    ]

})
export class SecondHalfComponent implements OnInit {
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
