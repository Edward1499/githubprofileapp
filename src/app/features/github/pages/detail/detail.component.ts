import { Component } from '@angular/core';
import { switchMap, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {

  user: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private githubService: GithubService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.pipe(
      switchMap(({name}) => this.githubService.get(name)),
      tap(response => {
        this.user = response;
      })
    ).subscribe();
  }
}
