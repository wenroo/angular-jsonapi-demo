import { Injectable } from '@angular/core';
import { Autoregister, Service, Resource} from 'ngx-jsonapi';

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
    public ttl = 0;
}
