// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
	build: {
		fonts: `${buildFolder}/fonts/`,
		images: `${buildFolder}/img/`,
		js: `${buildFolder}/js/`,
		css: `${buildFolder}/css/`,
		html: `${buildFolder}/`,
		files: `${buildFolder}/`
	},
	src: {
		icons: `${srcFolder}/img/icons/*.svg`,
		svg: `${srcFolder}/img/**/*.svg`,
		images: `${srcFolder}/img/**/*.{jpg, jpeg, png, gif, webp}`,
		js: `${srcFolder}/js/app.js`,
		scss: `${srcFolder}/scss/style.scss`,
		pug: `${srcFolder}/*.pug`,
		files: `${srcFolder}/files/**/*.*`
	},
	watch: {
		images: `${srcFolder}/img/**/*.{jpg, jpeg, png, gif, webp, ico, svg}`,
		js: `${srcFolder}/js/**/*.js`,
		scss: `${srcFolder}/scss/**/*.scss`,
		pug: `${srcFolder}/**/*.pug`,
		files: `${srcFolder}/**/*.*`
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: `test`
}