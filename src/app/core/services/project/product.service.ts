import { Injectable } from '@angular/core';
import { ProductListItem } from '@core/models/project/product-list-item';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { KosmosConfigurationService } from '@core/services/configuration/kosmos-configuration.service';
import { NGXLogger } from 'ngx-logger';
import { tap } from 'rxjs/operators';
import { Product } from '@core/models/project/product';

/**
 * Service for projects with their products as Children
 */
@Injectable()
export class ProductService {
    private _baseUrl: string;
    private _notActiveApiEndpoint: string;
    private activeApiEndpoint: string;
    private deactivateApiEndpoint: string;
    private activateApiEndpoint: string;

    constructor(private _http: HttpClient, private _logger: NGXLogger) {
        this._baseUrl = KosmosConfigurationService.appConfig.API_URL_CORE;
        this._notActiveApiEndpoint = 'product/notselected';
        this.activeApiEndpoint = 'product/selected';
        this.deactivateApiEndpoint = 'product/unselect';
        this.activateApiEndpoint = 'product/select';
    }

    deactivate(projectGuid: string, product: Product): Observable<Object> {
        return this._http.get(`${this._baseUrl}/${this.deactivateApiEndpoint}/${projectGuid}/${product.guid}`);
    }

    /**
     * returns all projects with their products as Children
     * @returns {Observable<ProductListItem>}
     * @memberof ProductService
     */
    getNotActive(projectGuid: string): Observable<ProductListItem[]> {
        return this._http.get<ProductListItem[]>(`${this._baseUrl}/${this._notActiveApiEndpoint}/${projectGuid}`);
    }

    getActive(projectGuid: string): Observable<Product[]> {
        return this._http.get<Product[]>(`${this._baseUrl}/${this.activeApiEndpoint}/${projectGuid}`);
    }

    setActive(projectGuid: string, selectedProductGuids: string[]): Observable<Object> {
        return this._http.put(`${this._baseUrl}/${this.activateApiEndpoint}/${projectGuid}`, selectedProductGuids);
    }
}
