/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { BookStoreTestModule } from '../../../test.module';
import { WishListComponent } from '../../../../../../main/webapp/app/entities/wish-list/wish-list.component';
import { WishListService } from '../../../../../../main/webapp/app/entities/wish-list/wish-list.service';
import { WishList } from '../../../../../../main/webapp/app/entities/wish-list/wish-list.model';

describe('Component Tests', () => {

    describe('WishList Management Component', () => {
        let comp: WishListComponent;
        let fixture: ComponentFixture<WishListComponent>;
        let service: WishListService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [BookStoreTestModule],
                declarations: [WishListComponent],
                providers: [
                    WishListService
                ]
            })
            .overrideTemplate(WishListComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(WishListComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(WishListService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new HttpHeaders().append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of(new HttpResponse({
                    body: [new WishList(123)],
                    headers
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.wishLists[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
