import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import swal from 'sweetalert2';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(
    private zone: NgZone
  ) {}

  handleError(error: any) {
    if (!(error instanceof HttpErrorResponse)) {
      error = error.rejection; 
    }
    this.zone.run(() =>
      swal.fire({
        icon: 'error',
        title: 'Error...',
        text: error?.message || 'Undefined client error',
      })
    );

    console.error('Error from global error handler', error);
  }
}