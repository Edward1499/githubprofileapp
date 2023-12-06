import { scoreGuard } from './score.guard';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TestBed } from '@angular/core/testing';

describe('ScoreGuard', () => {
  let route: ActivatedRouteSnapshot;
  let state: RouterStateSnapshot;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        scoreGuard,
      ],
    });

    route = {
      queryParams: {
        score: '40',
      },
    } as any;
    state = {} as any;
  });

  it('should return true if score is greater than or equal to 30', () => {
    expect(scoreGuard(route, state)).toBe(true);
  });

  it('should return false if score is less than 30 and show a Swal alert', () => {
    route.queryParams['score'] = '20';

    scoreGuard(route, state);

    expect(scoreGuard(route, state)).toBe(false);
  });
});