# 📚 Шпаргалки по сборщикам

## 📦 WEBPACK ШПАРГАЛКА

### Основные команды:
```bash
# Установка
npm install --save-dev webpack webpack-cli

# Запуск dev-сервера
npx webpack serve --mode development

# Сборка для продакшена
npx webpack --mode production
```

### Основные концепции:
- **Entry**: Точка входа в приложение
- **Output**: Куда собирать файлы
- **Loaders**: Как обрабатывать файлы
- **Plugins**: Дополнительные задачи
- **Mode**: development/production

### Популярные loaders:
```javascript
module: {
  rules: [
    // CSS
    { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    // SCSS
    { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
    // JavaScript
    { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
    // TypeScript
    { test: /\.ts$/, use: 'ts-loader' },
    // Images
    { test: /\.(png|jpg|gif)$/, type: 'asset/resource' },
    // Fonts
    { test: /\.(woff|woff2|eot|ttf|otf)$/, type: 'asset/resource' }
  ]
}
```

### Популярные plugins:
```javascript
plugins: [
  // HTML
  new HtmlWebpackPlugin({ template: './src/index.html' }),
  // CSS в отдельный файл
  new MiniCssExtractPlugin({ filename: '[name].css' }),
  // Очистка dist
  new CleanWebpackPlugin(),
  // Копирование файлов
  new CopyWebpackPlugin({ patterns: [{ from: 'static', to: 'static' }] }),
  // PWA
  new WorkboxPlugin.GenerateSW(),
  // Анализ bundle
  new BundleAnalyzerPlugin()
]
```

## ⚡ VITE ШПАРГАЛКА

### Основные команды:
```bash
# Установка
npm install --save-dev vite

# Запуск dev-сервера
npx vite

# Сборка для продакшена
npx vite build

# Превью production сборки
npx vite preview
```

### vite.config.js шаблон:
```javascript
import { defineConfig } from 'vite';

export default defineConfig({
  // Корневая папка
  root: 'src',
  
  // Настройки сборки
  build: {
    outDir: '../dist',
    target: 'es2015',
    minify: 'terser'
  },
  
  // Dev сервер
  server: {
    port: 3000,
    open: true,
    cors: true
  },
  
  // CSS настройки
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`
      }
    }
  }
});
```

## 🥤 GULP ШПАРГАЛКА

### Основные команды:
```bash
# Установка
npm install --save-dev gulp gulp-cli

# Запуск задачи
npx gulp taskName

# Запуск default задачи
npx gulp

# Список всех задач
npx gulp --tasks
```

### Основные методы API:
```javascript
const gulp = require('gulp');

// Создание задачи
gulp.task('taskName', function() {
  return gulp.src('src/**/*.js')
    .pipe(/* обработка */)
    .pipe(gulp.dest('dist'));
});

// Копирование файлов
gulp.src('source/files/**/*')
  .pipe(gulp.dest('destination/folder'));

// Отслеживание изменений
gulp.watch('src/**/*.js', gulp.series('js-task'));

// Последовательное выполнение
gulp.series('task1', 'task2', 'task3');

// Параллельное выполнение
gulp.parallel('task1', 'task2', 'task3');
```

### Популярные плагины:
```javascript
// HTML минификация
const htmlmin = require('gulp-htmlmin');
gulp.src('src/*.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulp.dest('dist'));

// CSS минификация
const cleanCSS = require('gulp-clean-css');
gulp.src('src/css/*.css')
  .pipe(cleanCSS({ compatibility: 'ie8' }))
  .pipe(gulp.dest('dist/css'));

// JS минификация
const uglify = require('gulp-uglify');
gulp.src('src/js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'));

// SCSS компиляция
const sass = require('gulp-sass')(require('sass'));
gulp.src('src/scss/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('dist/css'));

// Объединение файлов
const concat = require('gulp-concat');
gulp.src('src/js/*.js')
  .pipe(concat('all.js'))
  .pipe(gulp.dest('dist'));

// Переименование
const rename = require('gulp-rename');
gulp.src('src/main.css')
  .pipe(rename('main.min.css'))
  .pipe(gulp.dest('dist'));

// Оптимизация изображений
const imagemin = require('gulp-imagemin');
gulp.src('src/images/*')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/images'));
```