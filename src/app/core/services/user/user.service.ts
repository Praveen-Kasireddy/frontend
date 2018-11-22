import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StaffMember } from '@core/models/staffMember';
import { User } from '@core/models/user';
import { UserModel } from '@core/models/userModel';
import { KosmosConfigurationService } from '@core/services/configuration/kosmos-configuration.service';
import { LocalStorageService, SharedStorageService } from 'ngx-store';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
    private _baseUrl: string;
    private _apiEndpoint: string;
    private _apiEndpointActiveDirectory: string;
    private _url: string;
    public basePath: string;

    constructor(
        private _httpClient: HttpClient,
        private _localStorageService: LocalStorageService,
        private _sharedStorageService: SharedStorageService
    ) {
        this._baseUrl = KosmosConfigurationService.appConfig.API_URL_CORE;
        this._apiEndpoint = 'user';
        this._apiEndpointActiveDirectory = 'activedirectory';
        this._url = `${this._baseUrl}/${this._apiEndpoint}`;
        this.basePath = `${this._baseUrl}/${this._apiEndpointActiveDirectory}`;
    }

    /**
     * Gets the current User
     * Promise is only here necessary because APP_INITIALIZER works only with promise not with Observables
     * @returns Promise
     * @memberof UserService
     */
    public getCurrentUser() {
        return new Promise((resolve, reject) => {
            this._httpClient
                .get(`${this._baseUrl}/${this._apiEndpoint}/current`)
                .toPromise()
                .then(
                    success => {
                        this._localStorageService.set('currentUser', success);
                        resolve();
                    },
                    error => {
                        this._localStorageService.set('currentUser', undefined);
                        resolve();
                    }
                );
        });
    }

    /**
     * Editing a user
     * Responscode (!2xx) when failed
     * @param user
     * @returns gpid
     */
    public editUser(user: User): Observable<Object> {
        const usermodel = new UserModel(user);
        console.log(usermodel);
        const path = this._url + '/' + usermodel.id;
        return this._httpClient.put(path, usermodel);
    }

    public getUser(kpmgGpid: string): Observable<User> {
        return this._httpClient.get<User>(this._url + `/${kpmgGpid}`);
    }

    public getAvailableUser(id: string): Observable<User> {
        const path = this._url + id;
        return this._httpClient.get<User>(this._url + id).pipe();
    }

    /**
     * Adding a new user.
     * Responscode (!2xx) when failed
     * @param user
     * @returns gpid
     */
    public postUser(user: User): Observable<Object> {
        const usermodel = new UserModel(user);
        console.log(usermodel);
        return this._httpClient.post(this._url, usermodel);
    }

    /**
     * returns a list of users
     *
     * @returns {Observable<IUser[]>}
     * @memberof UserService
     */
    public getUsers(): Observable<User[]> {
        return this._httpClient.get<User[]>(this._url);
    }
    public getKpmgStaffMembers(search: string): Observable<StaffMember[]> {
        if (search.length > 0) {
            const fullPath = this.basePath + '/search?param=' + search + '&hideKosmosUser=true';
            return this._httpClient.get<StaffMember[]>(fullPath);
        }
        return new Observable<StaffMember[]>();
    }
}
