import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Resource } from 'ngx-jsonapi';
import { TagsService, Tag } from './../tags.service';

@Component({
    selector: 'demo-tag',
    templateUrl: './tag.component.html'
})
export class TagComponent {
    public tag: Tag;

    public constructor(
        protected tagsService: TagsService,
        private route: ActivatedRoute
    ) {
        route.params.subscribe(({ id }) => {
            let tag$ = tagsService.get(id).subscribe(
                tag => {
                    this.tag = tag;
                    console.log('success tag', this.tag);
                },
                error => console.log('error tagss controll', error)
            );
        });
    }

    public getUserName(tag: Resource): string {
        let data = <Resource>tag.relationships.owner.data;

        return data.attributes ? data.attributes.name : '';
    }
}
