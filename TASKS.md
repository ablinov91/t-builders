# Практические задания - Сборка проекта

## Webpack

### Задачи для выполнения:

#### ✅ 1. Установить Babel и Webpack

```bash
npm install --save-dev @babel/core @babel/preset-env babel-loader
npm install --save-dev webpack webpack-cli 
npm install --save-dev html-webpack-plugin css-loader style-loader
```

#### ✅ 2. Настроить Babel для транспиляции
- Babel-loader в конфигурации Webpack
- Preset: @babel/preset-env

#### ✅ 5. Настроить Webpack для сборки
- `webpack.config.js`:
  - Entry point: `src/index.js`
  - Output: `dist/bundle.js`
  - Babel-loader для JS файлов
  - CSS-loader и style-loader для стилей
  - HtmlWebpackPlugin для HTML
  - DevServer: оптимизированные настройки
  - Source maps: включены для отладки

#### ✅ 6. Запустить сборку и проверить результат
1. Запустить production сборку
2. Запустить dev-сервер
3. Проверить работу приложения в браузере
4. Проверить наличие source maps

### 📝 Дополнительные задания

Для углубленного изучения можно добавить:

1. **Настройка SASS/SCSS/Less**
2. **Настройка TypeScript**
3. **Установка Webpack Bundle Analyzer**

## Vite

### Задачи для выполнения:
#### ✅ 1. Установить Vite
#### ✅ 2. Настроить Vite для проекта, аналогично тому, что было проделано в Webpack

## GULP

### Задачи для выполнения:
#### ✅ 1. Установить Gulp и необходимые плагины
#### ✅ 2. Настроить Gulp для проекта, аналогично тому, что было проделано в Webpack

## Провести комплексное сравнение всех инструментов

Заполните таблицу реальными измерениями:

| Метрика | Webpack | Vite | Gulp |
|---------|---------|------|------|
| Время первого запуска | ___ сек | ___ сек | ___ сек |
| Время HMR/reload | ___ мс | ___ мс | ___ мс |
| Время production build | ___ сек | ___ сек | ___ сек |
| Размер бандла | ___ KB | ___ KB | ___ KB |


