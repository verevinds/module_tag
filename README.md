# Модули HTML кодов на JavaScript

## Select

### Создание экземпляра

```ts
interface IOptions {
  placeholder?: string;
  selectedId?: number;
  data?: TData[];
  onSelect?: (item: TData) => void;
}

Select(selecter: string, options?: IOptions | options?: IOptions)
```

Пример №1

```js
const select = new Select('#select', {
  placeholder: 'Выберите фреймворк',
  data: [
    { id: 1, value: 'React' },
    { id: 2, value: 'Vue' },
    { id: 3, value: 'Angular' },
    { id: 4, value: 'React Native' },
    { id: 5, value: 'Next' },
    { id: 6, value: 'NodeJS' },
  ],
  onSelect(item) {
    console.log('selected item', item);
  },
});
```
