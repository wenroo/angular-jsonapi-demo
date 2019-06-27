import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UsersService } from '../users.service';
import { UsersComponent } from './users.component';
import { NgxJsonapiModule } from 'ngx-jsonapi';

describe('UsersComponent', () => {
    let component: UsersComponent;
    let fixture: ComponentFixture<UsersComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, NgxJsonapiModule],
            declarations: [UsersComponent],
            providers: [UsersService]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UsersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('users should be filled', () => {
        expect(component.users).toBeTruthy();
    });
});
