
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient, HttpHeaders } from '@angular/common/http';
import { SharedStorageService } from 'ngx-store';
import { TestBed, inject } from '@angular/core/testing';
import { SessionTimerInterceptor } from '@shared/http-interceptors/session-timer-interceptor';


describe('SessionTimerInterceptor', () => {
  let http: HttpTestingController;
  let httpClient: HttpClient;
  let _sharedStorageService: SharedStorageService;

  beforeEach(() => {
    const testBed = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: SessionTimerInterceptor,
          multi: true
        },
        SharedStorageService
      ]
    });
    http = testBed.get(HttpTestingController);
    httpClient = testBed.get(HttpClient);
    _sharedStorageService = new SharedStorageService();
  });

  it('should have been called',
    inject([HttpClient, HttpTestingController], (_httpClient: HttpClient, mock: HttpTestingController) => {
      _httpClient.get('/data').subscribe(
        response => {
          expect(response).toBeTruthy();
        },
        error => {
          expect(error).toBeTruthy();
        }
      );
      const spy = spyOn(_sharedStorageService, 'set').and.callThrough();
      expect(_sharedStorageService).toBeDefined();
      _sharedStorageService.set('sessionTimer', Date.now());
      expect(_sharedStorageService.set).toHaveBeenCalled();
      expect(_sharedStorageService.get('sessionTimer')).toBeGreaterThan(0);
    })
  );

});
