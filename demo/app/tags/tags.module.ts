import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from './components/tag.component';
import { TagsComponent } from './components/tags.component';
import { TagsRoutingModule } from './tags-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [CommonModule, SharedModule, TagsRoutingModule],
    declarations: [TagComponent, TagsComponent]
})
export class TagsModule {}
