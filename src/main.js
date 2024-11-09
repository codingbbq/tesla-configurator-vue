import '@/assets/styles/style.css';

import { createApp } from 'vue';
import FontAwesomeIcon from '@/utilities/fontAwesome-icons';
import App from './App.vue'

createApp(App).component("FontAwesomeIcon", FontAwesomeIcon).mount('#app')
