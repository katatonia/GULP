import gulp from 'gulp';

// Импорт плагинов
import { plugins } from './gulp/config/plugins.js';

// Импорт путей
import { path } from './gulp/config/path.js'; 

// Импорт задач
import { copy } from './gulp/tasks/copy.js';
import { clean } from './gulp/tasks/clean.js';
import { pug } from './gulp/tasks/pug.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import { otfToTtf, ttfToWoff } from './gulp/tasks/fonts.js';
import { sprite } from './gulp/tasks/sprite.js';
import { zip } from './gulp/tasks/zip.js';
import { ftp } from './gulp/tasks/ftp.js';

// Передаём значения в глобальную переменную
global.app = {
	isBuild: process.argv.includes('--build'),
	isDev: !process.argv.includes('--build'),
	path: path,
	gulp: gulp,
	plugins: plugins
}

// Наблюдетель
const watcher = () => {
	gulp.watch(path.watch.files, copy);
	gulp.watch(path.watch.pug, pug); // gulp.series(html, ftp) — автоматическая выгрузка на сервер
	gulp.watch(path.watch.scss, scss);
	gulp.watch(path.watch.js, js);
	gulp.watch(path.watch.images, images);
}

export { sprite }

// Обработка шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff)

// Основные задачи
const mainTasks = gulp.series(
	fonts, 
	gulp.parallel(
		copy,
		pug, 
		scss, 
		js, 
		images
	)
);

// Сценарии выполнения задач
const dev = gulp.series(
	clean, 
	mainTasks, 
	gulp.parallel(
		watcher, 
		server
	)
);

const build = gulp.series(clean, mainTasks);

const deployZIP = gulp.series(clean, mainTasks, zip);

const deployFTP = gulp.series(clean, mainTasks, ftp);


// Экспорт сценариев
export { dev }
export { build }
export { deployZIP }
export { deployFTP }

// Сценарий по умолчанию
gulp.task('default', dev);