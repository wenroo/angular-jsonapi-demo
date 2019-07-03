import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { NgxJsonapiModule } from 'ngx-jsonapi';

import { AppComponent } from './app.component';

import { TagsService } from './tags/tags.service';
import { ArticlesService } from './articles/articles.service';
import { SharedModule } from './shared/shared.module';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/articles',
        pathMatch: 'full'
    },
    {
        path: 'articles',
        loadChildren: './articles/articles.module#ArticlesModule'
    },
    {
        path: 'tags',
        loadChildren: './tags/tags.module#TagsModule'
    }
];

@NgModule({
    providers: [ArticlesService,TagsService],
    imports: [
        BrowserModule,
        HttpClientModule,
        SharedModule,
        RouterModule.forRoot(appRoutes, { useHash: true }),
        NgxJsonapiModule.forRoot({
            url: environment.jsonapi_url,
            cache_prerequests: true,
            cachestore_support: true
        })
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
