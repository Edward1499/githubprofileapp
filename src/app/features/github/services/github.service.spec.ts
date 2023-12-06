import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { GithubService } from './github.service';
import { environment } from '../../../../environments/environment.development';

describe('GithubService', () => {
  let service: GithubService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GithubService],
    });

    service = TestBed.inject(GithubService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('search', () => {

      it('should return a promise with the response data', () => {
        const username = 'test';
        const mockData = { login: 'test', name: 'Test User' };
      
        service.get(username).then((response) => {
          expect(response).toBe(mockData);
        });
      
        const expectedUrl = `https://api.github.com/users/${username}`;
        const req = httpMock.expectOne(expectedUrl);
        req.flush(mockData);
      });
  })
})