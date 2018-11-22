import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'kosmos-proto',
    templateUrl: './proto.component.html',
    styleUrls: ['./proto.component.scss']
})
export class ProtoComponent implements OnInit {
    constructor() {
        console.log('Proto was loaded!!!');
    }

    ngOnInit() {}
}
