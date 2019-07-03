import { Injectable } from '@angular/core';
import { Autoregister, Service, Resource, DocumentCollection, DocumentResource } from 'ngx-jsonapi';

export class Tag extends Resource {
    public attributes = {
        internalId:'',
        name: '',
        updatedAt: ''
    };

}

@Injectable()
@Autoregister()
export class TagsService extends Service<Tag> {
    public resource = Tag;
    public type = 'tags';
    public ttl = 1000; //ttl

    // executed before get data from server
    public parseFromServer(attributes): void {
        attributes.name = '📖 ' + attributes.name;
    }

    // executed before send to server
    public parseToServer(attributes): void {
        if ('name' in attributes) {
            attributes.name = attributes.name.replace('📖 ', '');
        }
    }
}
