import { Component, Input } from '@angular/core';
import { DocumentCollection, DocumentResource } from 'ngx-jsonapi';
@Component({
    selector: 'demo-collection-info',
    templateUrl: './collection-info.component.html'
})
export class CollectionInfoComponent {
    @Input() public collection: DocumentCollection;
    @Input() public resource: DocumentResource

    updateData(){
        this.collection.builded = true;
        console.log(this.resource)
        console.log('update')
    }
}
