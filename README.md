# Agro IoT Dashboard (Vue 3 PWA)

Base inicial para una SPA con Vue 3 + Vite enfocada en agricultura conectada. Incluye autenticación por correo y contraseña con Firebase, estilos oscuros para dashboard y configuración de PWA lista para añadir notificaciones push y conectividad MQTT más adelante.

## Configuración
1. Instala dependencias: `npm install`.
2. En Firebase Console habilita el proveedor **Email/Password** y añade las credenciales en un fichero `.env` generado a
   partir de `.env.example`.
3. Ejecuta en desarrollo: `npm run dev`.
4. Usa una cuenta ya creada desde la consola de Firebase (la pantalla de inicio de la app está enfocada solo a inicio de
   sesión; el alta se gestiona fuera de la interfaz).

## Scripts
- `npm run dev` — servidor de desarrollo Vite.
- `npm run build` — compilación de la PWA.
- `npm run preview` — vista previa de la compilación.

## Puntos de extensión
- **Notificaciones push**: la configuración PWA usa `registerType: 'autoUpdate'`; puedes añadir un service worker personalizado para integrar Firebase Cloud Messaging.
- **MQTT**: agrega un cliente como `mqtt` o `mqtt.js` y un módulo de servicios para gestionar tópicos y reconexiones.
