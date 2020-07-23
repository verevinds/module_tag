import { createElement } from '../js/createElement';
import { TData } from '../Select/Select';

export class Li {
  $li: HTMLElement;
  $liH4: HTMLElement;
  $liDivider: HTMLElement;

  constructor() {}

  Item(id: number, value: string | Element) {
    switch (typeof value) {
      case 'string':
        this.$li = createElement('li');
        this.$li.classList.add('list__item');
        this.$li.setAttribute('data-type', 'item');
        this.$li.setAttribute('data-value', `${id}`);
        this.$li.innerText = `${value}`;
        return this.$li;

      default:
        return value;
    }
  }
  Title(text: string) {
    this.$liH4 = createElement('h4');
    this.$liH4.classList.add('list__title');
    this.$liH4.innerText = `${text}`;
    return this.$liH4;
  }
  get Divider() {
    this.$liDivider = createElement('div');
    this.$liDivider.classList.add('list__divider');
    return this.$liDivider;
  }

  destroy() {
    this.$li.innerHTML = '';
    this.$liH4.innerHTML = '';
    this.$liDivider.innerHTML = '';
  }
}

export class Ul extends Li {
  $ul: HTMLElement;
  constructor() {
    super();
  }

  List(list: TData[] | any[]) {
    this.$ul = createElement('ul');
    this.$ul.classList.add('list');
    Array.from(list, (data: TData) =>
      typeof data.value === 'string'
        ? this.$ul.appendChild(this.Item(data.id, data.value))
        : this.Item(data.id, data.value),
    );
    return this.$ul;
  }

  destroy() {
    this.$ul.innerHTML = '';
  }
}
