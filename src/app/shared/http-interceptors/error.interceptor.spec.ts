import { HttpClient, HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { MainPopup } from '@core/models/popup/mainpopup';
import { ErrorInterceptor } from '@shared/http-interceptors/error.interceptor';
import { LoggerConfig, NGXLogger, NGXLoggerHttpService, NGXLoggerHttpServiceMock } from 'ngx-logger';
import { SharedStorageService } from 'ngx-store';

xdescribe('ErrorInterceptor', function() {
    let http: HttpTestingController;
    let httpClient: HttpClient;
    let _sharedStorageService: SharedStorageService;
    let generalPopup: MainPopup = new MainPopup();

    beforeEach(() => {
        const testBed = TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: ErrorInterceptor,
                    multi: true
                },
                NGXLogger,
                LoggerConfig,
                // { provide: NGXLogger, useCLass: NGXLoggerMock },
                { provide: NGXLoggerHttpService, useCLass: NGXLoggerHttpServiceMock },
                SharedStorageService
            ]
        });

        http = testBed.get(HttpTestingController);
        httpClient = testBed.get(HttpClient);
        _sharedStorageService = new SharedStorageService();
    });

    describe('intercept HTTP requests for ERROR', () => {
        it('should set info popup to visible', inject(
            [HttpClient, HttpTestingController],
            (_httpClient: HttpClient, mock: HttpTestingController) => {
                _httpClient.get('/error').subscribe(
                    response => {
                        expect(response).toBeTruthy();
                    },
                    error => {
                        generalPopup = _sharedStorageService.get('mainPopup');
                        expect(generalPopup.visible).toBe(true);
                    }
                );

                this.headers = new HttpHeaders();
                this.headers.append('WWW-Authenticate', 'The access token expired');
                this.headers = this.headers.set('WWW-Authenticate', 'The access token expired');

                mock.expectOne('/error').error(new ErrorEvent('Unauthorized error'), {
                    headers: this.headers,
                    status: 401
                });

                mock.verify();
            }
        ));
    });
});
