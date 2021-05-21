import Swal from 'sweetalert2';

export const messageAlert = (icon, title, text) =>
  Swal.fire({
    title,
    text,
    icon,
    confirmButtonText: 'Aceptar',
  });



