# Github Profiles App

Esta aplicación permite obtener información de un usuario de GitHub a partir de su nombre de usuario. Para ello, utiliza el API de GitHub.

## Requisitos

- Angular v17 o superior
- Node.js v16 o superior
- NPM o Yarn

## Instalación
- Clona este repositorio:

```bash
   git clone https://github.com/Edward1499/githubprofileapp.git

```
- Accede a la carpeta del proyecto:
```bash
cd GithubProfileApp
```
- Instala las dependencias:

```bash
   npm install o yarn install
```
## Ejecución
- Inicie el servidor de desarrollo:
ng serve o yarn start

- Abra el navegador en la dirección http://localhost:4200.

## Uso
Introduce el nombre de usuario de GitHub en el campo de entrada.
La aplicación mostrará los primeros 10 resultados que conicidan con el criterio de busqueda especificado, incluida su imagen de perfil, nombre y id.

## Pruebas

- Para ejecutar las pruebas unitarias, ejecute el siguiente comando:

```bash
ng test
```
## API de GitHub
La aplicación utiliza el API de GitHub para obtener la información del usuario. Para obtener más información sobre el API, visite la siguiente página:

https://docs.github.com/en/rest/reference/users
