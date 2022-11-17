import { defineCustomElement } from 'vue-demi';
import MyElement from './MyElement.ce.vue';

customElements.define('my-element', defineCustomElement(MyElement));
