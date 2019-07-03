import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TagsComponent } from './components/tags.component';
import { TagComponent } from './components/tag.component';

export const routes: Routes = [
    {
        path: '',
        component: TagsComponent
    },
    {
        path: ':id',
        component: TagComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class TagsRoutingModule {}
