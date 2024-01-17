import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from '../../services/loading/loading.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent implements AfterViewInit {
  loading: Observable<boolean>;

  constructor(private loadingService: LoadingService, private cd: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.loading = this.loadingService.loading;
    this.cd.detectChanges();
  }
}
