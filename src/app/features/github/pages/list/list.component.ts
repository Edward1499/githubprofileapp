import { Component } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GithubService } from '../../services/github.service';
import Chart from 'chart.js/auto'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  private readonly debounceTimeMs = 1000;
  isLoading: boolean = false;
  form: FormGroup = this.fb.group({
    search: [null, [this.validateSearch(), Validators.required, Validators.minLength(4)]],
  });
  data: any;

  chart: any;

  constructor(
    private githubService: GithubService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.form.controls['search'].valueChanges.pipe(debounceTime(this.debounceTimeMs)).subscribe((searchValue) => {
      this.data = [];
      this.form.controls['search'].markAsTouched();
      if (this.form.controls['search'].valid) {
        this.search(searchValue);
      }
    });
  }

  search(searchValue: string) {
    if (this.chart) this.chart.destroy();
    this.isLoading = true;
    this.githubService.search(searchValue)
      .subscribe((data) => {
        this.data = data;
        this.renderChart(this.getLabelsChart(), this.getDatasetsChart());
        this.isLoading = false;
      });
  }

  validateSearch(): {[key: string]: any} | null  {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (control.value && control.value.toLowerCase() === 'maxiglobal') {
        return { 'reservedWordInvalid': true };
      }
      return null;
    }
  }

  private renderChart(labels: any, datasets: any) {
    this.chart = new Chart("myChart", {
      type: 'bar',

      data: {
        labels, 
	      datasets
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }

  private getLabelsChart() {
    return this.data.map((item: any) => item.login);
  }

  private getDatasetsChart() {
    return [
      {
        label: 'Seguidores',
        data: this.data.map((item:any) => item.followersCount),
        backgroundColor: 'blue'
      }
    ]
  }
}
