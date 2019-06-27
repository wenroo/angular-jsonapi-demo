import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Resource } from 'ngx-jsonapi';
import { UsersService, User } from '../users.service';
import { ArticlesService } from '../../articles/articles.service';

@Component({
    selector: 'demo-user',
    templateUrl: './user.component.html'
})
export class UserComponent {
    public user: User;
    public relatedarticles: Array<Resource>;

    public constructor(
        protected usersService: UsersService,
        articlesService: ArticlesService,
        private route: ActivatedRoute
    ) {
        route.params.subscribe(({ id }) => {
            usersService.get(id, { ttl: 100 }).subscribe(
                user => {
                    this.user = user;
                },
                error => console.error('Could not load user.', error)
            );
        });
    }

    /*
    Add a new user
    */
    public newUser() {
    }

    /*
    Update name for actual user
    */
    public updateUser() {
        this.user.attributes.name = prompt('user name:', this.user.attributes.name);
        console.log('user data for save with article include', this.user.toObject({ include: ['articles'] }));
        console.log('user data for save without any include', this.user.toObject());
        this.user.save(/* { include: ['article'] } */).subscribe(success => {
            console.log('user saved', this.user.toObject());
        });
    }

}
