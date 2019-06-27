import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user.component';
import { UsersComponent } from './components/users.component';
import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [CommonModule, SharedModule, UsersRoutingModule],
    declarations: [UserComponent, UsersComponent]
})
export class UsersModule {}
