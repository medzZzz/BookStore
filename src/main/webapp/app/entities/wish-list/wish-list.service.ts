import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';

import { JhiDateUtils } from 'ng-jhipster';

import { WishList } from './wish-list.model';
import { createRequestOption } from '../../shared';

export type EntityResponseType = HttpResponse<WishList>;

@Injectable()
export class WishListService {

    private resourceUrl =  SERVER_API_URL + 'api/wish-lists';

    constructor(private http: HttpClient, private dateUtils: JhiDateUtils) { }

    create(wishList: WishList): Observable<EntityResponseType> {
        const copy = this.convert(wishList);
        return this.http.post<WishList>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    update(wishList: WishList): Observable<EntityResponseType> {
        const copy = this.convert(wishList);
        return this.http.put<WishList>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<WishList>(`${this.resourceUrl}/${id}`, { observe: 'response'})
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    query(req?: any): Observable<HttpResponse<WishList[]>> {
        const options = createRequestOption(req);
        return this.http.get<WishList[]>(this.resourceUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<WishList[]>) => this.convertArrayResponse(res));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response'});
    }

    private convertResponse(res: EntityResponseType): EntityResponseType {
        const body: WishList = this.convertItemFromServer(res.body);
        return res.clone({body});
    }

    private convertArrayResponse(res: HttpResponse<WishList[]>): HttpResponse<WishList[]> {
        const jsonResponse: WishList[] = res.body;
        const body: WishList[] = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            body.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return res.clone({body});
    }

    /**
     * Convert a returned JSON object to WishList.
     */
    private convertItemFromServer(wishList: WishList): WishList {
        const copy: WishList = Object.assign({}, wishList);
        copy.dateOfCreate = this.dateUtils
            .convertDateTimeFromServer(wishList.dateOfCreate);
        return copy;
    }

    /**
     * Convert a WishList to a JSON which can be sent to the server.
     */
    private convert(wishList: WishList): WishList {
        const copy: WishList = Object.assign({}, wishList);

        copy.dateOfCreate = this.dateUtils.toDate(wishList.dateOfCreate);
        return copy;
    }
}
