import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users.component';
import { UserComponent } from './components/user.component';

export const routes: Routes = [
    {
        path: '',
        component: UsersComponent
    },
    {
        path: ':id',
        component: UserComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class UsersRoutingModule {}
