import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';
import ttf2woff from 'gulp-ttf2woff';

export const otfToTtf = () => {
	// Поиск шрифтов .otf
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, {})
	.pipe(app.plugins.plumber(
		app.plugins.notify.onError({
			title: 'FONTS',
			message: 'Error: <%= error.message %>'
		})
	))
	// Конвертация в ttf
	.pipe(fonter({
		formats: ['ttf']
	}))
	// Выгрузка в исходную папку
	.pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))
}

export const ttfToWoff = () => {
	// Поиск шрифтов .ttf
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {})
	.pipe(app.plugins.plumber(
		app.plugins.notify.onError({
			title: 'FONTS',
			message: 'Error: <%= error.message %>'
		})
	))
	// Ковертация в woff
	.pipe(ttf2woff())
	// Выгрузка в папку dist
	.pipe(app.gulp.dest(`${app.path.build.fonts}`))
	// // Поиск шрифтов ttf
	.pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
	// Конвертация в woff2
	.pipe(ttf2woff2())
	// Выгрузка в папку dist
	.pipe(app.gulp.dest(`${app.path.build.fonts}`));
}
