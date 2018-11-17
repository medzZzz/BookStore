/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { BookStoreTestModule } from '../../../test.module';
import { WishListDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/wish-list/wish-list-delete-dialog.component';
import { WishListService } from '../../../../../../main/webapp/app/entities/wish-list/wish-list.service';

describe('Component Tests', () => {

    describe('WishList Management Delete Component', () => {
        let comp: WishListDeleteDialogComponent;
        let fixture: ComponentFixture<WishListDeleteDialogComponent>;
        let service: WishListService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [BookStoreTestModule],
                declarations: [WishListDeleteDialogComponent],
                providers: [
                    WishListService
                ]
            })
            .overrideTemplate(WishListDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(WishListDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(WishListService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        spyOn(service, 'delete').and.returnValue(Observable.of({}));

                        // WHEN
                        comp.confirmDelete(123);
                        tick();

                        // THEN
                        expect(service.delete).toHaveBeenCalledWith(123);
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
