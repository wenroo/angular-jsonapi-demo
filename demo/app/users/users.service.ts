import { Injectable } from '@angular/core';
import { Autoregister, Service, Resource, DocumentCollection } from 'ngx-jsonapi';
import { Article } from '../articles/articles.service';

export class User extends Resource {
    public attributes = {
        name: 'default name',
        user_picture: ''
    };

    public relationships = {
        articles: new DocumentCollection<Article>()
    };
}

@Injectable()
@Autoregister()
export class UsersService extends Service<User> {
    public resource = User;
    public type = 'users';
}
