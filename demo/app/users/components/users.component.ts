import { Component } from '@angular/core';
import { DocumentCollection } from 'ngx-jsonapi';
import { UsersService, User } from './../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'demo-users',
    templateUrl: './users.component.html'
})
export class UsersComponent {
    public users: DocumentCollection<User>;

    public constructor(private route: ActivatedRoute, private usersService: UsersService) {
        route.queryParams.subscribe(({ page }) => {
            usersService
                .all({
                    sort: ['name'],
                    page: { number: page || 1 },
                    ttl: 3600
                })
                .subscribe(
                    users => {
                        this.users = users;
                        console.info('success users controller', users, 'page', page || 1, users.page.number);
                    },
                    error => console.error('Could not load users :(', error)
                );
        });
    }
}
