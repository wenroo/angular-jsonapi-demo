import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Resource } from 'ngx-jsonapi';
import { UsersService } from '../../users/users.service';
import { ArticlesService, Article } from './../articles.service';

@Component({
    selector: 'demo-article',
    templateUrl: './article.component.html'
})
export class ArticleComponent {
    public article: Article;

    public constructor(
        protected usersService: UsersService,
        protected articlesService: ArticlesService,
        private route: ActivatedRoute
    ) {
        route.params.subscribe(({ id }) => {
            let article$ = articlesService.get(id).subscribe(
                article => {
                    this.article = article;
                    console.log('success article', this.article);
                },
                error => console.log('error articless controll', error)
            );
        });
    }

    public getUserName(article: Resource): string {
        let data = <Resource>article.relationships.owner.data;

        return data.attributes ? data.attributes.name : '';
    }
}
