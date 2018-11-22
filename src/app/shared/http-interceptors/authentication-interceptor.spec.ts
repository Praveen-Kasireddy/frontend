import { LOCAL_TEST_USER } from '@core/app.const';
import { AuthenticationInterceptor } from '@shared/http-interceptors/authentication-interceptor';
import { Headers } from '@angular/http';
import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient, HttpHeaders } from '@angular/common/http';
import { SharedStorageService } from 'ngx-store';
import { MainPopup } from '@core/models/popup/mainpopup';

describe('LoggingInterceptor', function() {
    let http: HttpTestingController;
    let httpClient: HttpClient;

    beforeEach(() => {
        const testBed = TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: AuthenticationInterceptor,
                    multi: true
                }
            ]
        });

        http = testBed.get(HttpTestingController);
        httpClient = testBed.get(HttpClient);
    });

    describe('intercept HTTP requests to add x-username Header', () => {
        it(
            'should have x-username header',
            inject([HttpClient, HttpTestingController], (_httpClient: HttpClient, mock: HttpTestingController) => {
                _httpClient.get('/data').subscribe(
                    response => {
                        expect(response).toBeTruthy();
                    },
                    error => {
                        expect(error).toBeTruthy();
                    }
                );

                const req = mock.expectOne(
                    request =>
                        request.headers.has('x-username') && request.headers.get('x-username') === LOCAL_TEST_USER
                );
                expect(req.request.method).toEqual('GET');

                req.flush({ hello: 'world' });

                mock.verify();
            })
        );
    });
});
