import { Component, OnInit } from '@angular/core';
import { JsonapiCore } from 'ngx-jsonapi';

@Component({
    selector: 'demo-app',
    styleUrls: ['./app.component.scss'],
    templateUrl: './app.component.html'
})
export class AppComponent /* implements OnInit */ {
    public loading = '';

    public constructor(
        private jsonapiCore: JsonapiCore
    ) {

    // console.log(this)
        jsonapiCore.loadingsStart = (): void => {
            this.loading = 'LOADING...';
        };
        jsonapiCore.loadingsDone = (): void => {
            this.loading = '';
        };
        jsonapiCore.loadingsOffline = (error): void => {
            this.loading = 'Loadings Server Offline!!!';
        };
        jsonapiCore.loadingsError = (error): void => {
            this.loading = 'Loadings Server Error!!!';
        };
    }

}
