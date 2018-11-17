/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { BookStoreTestModule } from '../../../test.module';
import { WishListDetailComponent } from '../../../../../../main/webapp/app/entities/wish-list/wish-list-detail.component';
import { WishListService } from '../../../../../../main/webapp/app/entities/wish-list/wish-list.service';
import { WishList } from '../../../../../../main/webapp/app/entities/wish-list/wish-list.model';

describe('Component Tests', () => {

    describe('WishList Management Detail Component', () => {
        let comp: WishListDetailComponent;
        let fixture: ComponentFixture<WishListDetailComponent>;
        let service: WishListService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [BookStoreTestModule],
                declarations: [WishListDetailComponent],
                providers: [
                    WishListService
                ]
            })
            .overrideTemplate(WishListDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(WishListDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(WishListService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new HttpResponse({
                    body: new WishList(123)
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.wishList).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
