# Cadex - Modern Web Application

## 🚀 Технологии

- **Frontend**: Next.js 15.3.0, React 19, TypeScript, ky, framer-motion, react-hook-form
- **Backend**: NestJS, class-validator, swagger
- **Стилизация**: Panda CSS, Material-UI
- **Оптимизация**: optimizeCss, optimizePackageImports
- **SEO**: Next.js Metadata API, Schema.org, JSON-LD

## 🛠 Установка и запуск

# В корне проекта
```bash
# Установка зависимостей
yarn install

# Запуск в режиме разработки
yarn dev

# Сборка для продакшена
yarn build

# Запуск в режиме продакшена
yarn start
```

## 🎨 Стилизация и CSS

### Panda CSS
Проект использует Panda CSS - современный CSS-in-JS фреймворк, который предлагает:
- Типобезопасные стили
- Автоматическую генерацию атомарных классов
- Оптимизацию CSS на этапе сборки
- Поддержку тем и вариаций

### Оптимизация производительности
```typescript
// Пример использования will-change для оптимизации анимаций
const animatedElement = css({
  willChange: 'transform, opacity',
  transition: 'transform 0.3s ease, opacity 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    opacity: 0.9,
  },
});
```

### Material-UI
- Оптимизированные импорты через `optimizePackageImports`

## 🔍 SEO Оптимизация

### Метаданные
- Реализация метатегов через Next.js Metadata API
- Структурированные данные через JSON-LD
- OpenGraph и Twitter Cards

### Оптимизация производительности
```typescript
// Пример оптимизации изображений
export const metadata = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
};
```

## 🛡 Безопасность
### Content Security Policy
```typescript
// Настройки CSP в middleware.ts
const cspHeader = `
  default-src 'self';
  script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data: https:;
  font-src 'self' https://fonts.gstatic.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
`;
```

## 🚀 Производительность

### Оптимизация сборки
- Оптимизация импортов Material-UI
- Кэширование статических ресурсов

## 📱 Адаптивность

- Mobile-first подход
- Адаптивные изображения через next/image
- Оптимизированные медиа-запросы
- Поддержка touch-событий

## 🎯 Особенности CSS

### Современные техники
1. **CSS Grid и Flexbox**
```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
```

2. **CSS Custom Properties**
```css
:root {
  --text-color;
}
```

## 🏗 Архитектура

- Модульная структура
- Компонентный подход
- Чистая архитектура

## 📝 Примечания

- Проект использует современные практики разработки
- Оптимизирован для SEO и производительности
- Имеет высокий уровень безопасности
