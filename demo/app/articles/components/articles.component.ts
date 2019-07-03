import { Component } from '@angular/core';
import { Resource, DocumentCollection } from 'ngx-jsonapi';
import { ArticlesService, Article } from './../articles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'demo-articles',
    templateUrl: './articles.component.html'
})
export class ArticlesComponent {
    public articles: DocumentCollection<Article>;

    public constructor(
        private route: ActivatedRoute,
        protected articlesService: ArticlesService
    ) {

        route.queryParams.subscribe(({ page }) => {
            articlesService
                .all({
                    page: { number: page || 1 },
                    ttl: 20
                })
                .subscribe(articles => {
                    this.articles = articles;
                    console.info('success articles controll', this.articles);
                }, (error): void => console.info('error articles controll', error));
        });

    }

    public nonCache(){
        this.articlesService.ttl = 0
    }

    public getAll(remotefilter) {
        // we add some remote filter

        let articles$ = this.articlesService.all({
            remotefilter: remotefilter,
            page: { number: 1 }
        });
        articles$.subscribe(
            articles => {
                this.articles = articles;
                console.log('success articles controller', this.articles);
            },
            error => console.info('error articles controller', error)
        );
        articles$.toPromise().then(success => console.log('articles loaded PROMISE'));
    }

}
