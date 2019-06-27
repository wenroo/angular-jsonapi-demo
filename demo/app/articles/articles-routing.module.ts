import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './components/articles.component';
import { ArticleComponent } from './components/article.component';

export const routes: Routes = [
    {
        path: '',
        component: ArticlesComponent
    },
    {
        path: ':id',
        component: ArticleComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class ArticlesRoutingModule {}
