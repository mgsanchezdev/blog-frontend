import Swal from 'sweetalert';

export const messageAlert = (icon, title, text) =>
  Swal.fire({
    title: { title },
    text,
    icon,
    confirmButtonText: 'Aceptar',
  });



