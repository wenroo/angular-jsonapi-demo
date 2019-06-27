import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './components/article.component';
import { ArticlesComponent } from './components/articles.component';
import { ArticlesRoutingModule } from './articles-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [CommonModule, SharedModule, ArticlesRoutingModule],
    declarations: [ArticleComponent, ArticlesComponent]
})
export class ArticlesModule {}
