import Vue from './../node_modules/vue/dist/vue.esm.js';

const root = new Vue({
    el: '#app',
    template: `
    <div class="homepage">
        <div class="hello">
            <h1>Hello {{ location }}!</h1>
            <pre><code>npm install & npm start</code></pre>
        </div>
    </div>
    `,
    data: {
        location: 'World'
    }
});
