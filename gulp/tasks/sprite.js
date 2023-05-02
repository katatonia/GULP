import svgsprite from 'gulp-svg-sprite';

export const sprite = () => {
    return app.gulp.src(`${app.path.src.icons}`, {})
	.pipe(app.plugins.plumber(
		app.plugins.notify.onError({
			title: 'SVG',
			message: 'Error: <%= error.message %>'
		})
	))
	.pipe(svgsprite({
		mode: {
			stack: {
				sprite: '../sprite/sprite.svg',
				example: true
			}
		}
	}))
	.pipe(app.gulp.dest(`${app.path.build.images}`))
}