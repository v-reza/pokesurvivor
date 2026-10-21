/* ============ firebase-config.js — conexión con tu proyecto de Firebase ============
 * Pega aquí la configuración de tu app web de Firebase (Consola de Firebase >
 * Configuración del proyecto > Tus apps > SDK setup and configuration > Config).
 * Los pasos completos están en docs/FIREBASE.md.
 *
 * Estos datos NO son secretos: Firebase los diseña para ir en la web. Lo que
 * protege las partidas son las reglas de Firestore (firestore.rules).
 *
 * Si se pone a null, el juego funciona en modo local (sólo en el navegador).
 */
// Proyecto pokesurvivor-free (desde el 12-10-2026): autenticación normal de Firebase,
// SIN Identity Platform, así las cuentas son gratis sin límite. ¡No pulsar nunca
// "Actualizar a Identity Platform" en su consola! (El viejo era pokesurvivor-jpter.)
G.FIREBASE_CONFIG = {
  apiKey: 'AIzaSyDMQx8c8Y9flU300z6CENBhITuEXJJgFZM',
  authDomain: 'pokesurvivor-mrezalf0.firebaseapp.com',
  projectId: 'pokesurvivor-mrezalf0',
  storageBucket: 'pokesurvivor-mrezalf0.firebasestorage.app',
  messagingSenderId: '541506434567',
  appId: '1:541506434567:web:73fa6d48a8e41753365ca2',
  databaseURL: 'https://pokesurvivor-mrezalf0-default-rtdb.asia-southeast1.firebasedatabase.app'
};

/* Ejemplo de cómo debe quedar:
G.FIREBASE_CONFIG = {
  apiKey: 'AIza...',
  authDomain: 'tu-proyecto.firebaseapp.com',
  projectId: 'tu-proyecto',
  storageBucket: 'tu-proyecto.firebasestorage.app',
  messagingSenderId: '1234567890',
  appId: '1:1234567890:web:abc123'
};
*/
