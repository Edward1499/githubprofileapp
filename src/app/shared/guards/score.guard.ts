import { CanActivateFn } from '@angular/router';
import swal from 'sweetalert2';

export const scoreGuard: CanActivateFn = (route, state) => {
  const { score } = route.queryParams;

  if (+score < 30) {
    swal.fire({
      icon: 'error',
      title: 'Oops',
      text: 'Para poder ver el detalle, el score debe ser superior a 30!',
    });
    return false;
  } 
  return true;
};
