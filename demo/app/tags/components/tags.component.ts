import { Component } from '@angular/core';
import { Resource, DocumentCollection } from 'ngx-jsonapi';
import { TagsService, Tag } from './../tags.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'demo-tags',
    templateUrl: './tags.component.html'
})
export class TagsComponent {
    public tags: DocumentCollection<Tag>;

    public constructor(
        private route: ActivatedRoute,
        protected tagsService: TagsService
    ) {
        route.queryParams.subscribe(({ page }) => {
            tagsService
                .all({
                    page: { number: page || 1 }
                })
                .subscribe(tags => {
                    this.tags = tags;
                    console.info('success tags controll', this.tags);
                }, (error): void => console.info('error tags controll', error));
        });
    }

    public getAll(remotefilter) {
        // we add some remote filter

        let tags$ = this.tagsService.all({
            remotefilter: remotefilter,
            page: { number: 1 }
        });
        tags$.subscribe(
            tags => {
                this.tags = tags;
                console.log('success tags controller', this.tags);
            },
            error => console.info('error tags controller', error)
        );
        tags$.toPromise().then(success => console.log('tags loaded PROMISE'));
    }

}
