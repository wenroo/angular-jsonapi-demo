import { Injectable } from '@angular/core';
import { Autoregister, Service, Resource, DocumentCollection, DocumentResource } from 'ngx-jsonapi';

export class Article extends Resource {
    public attributes = {
        internalId:'',
        isPublished: '',
        title: '',
        createdAt: '',
        updatedAt: ''
    };
}

@Injectable()
@Autoregister()
export class ArticlesService extends Service<Article> {
    public resource = Article;
    public type = 'articles';
    public ttl = 1; //ttl

    // executed before get data from server
    public parseFromServer(attributes): void {
        attributes.title = '📖 ' + attributes.title;
    }

    // executed before send to server
    public parseToServer(attributes): void {
        if ('title' in attributes) {
            attributes.title = attributes.title.replace('📖 ', '');
        }
    }
}
