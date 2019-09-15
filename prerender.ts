import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { renderModuleFactory } from '@angular/platform-server';
import { writeFileSync } from 'fs';

const { AppServerModuleNgFactory } = require('./dist/angular-universal-course-server/main.js');

renderModuleFactory(AppServerModuleNgFactory, {
    document: '<app-root></app-root>',
    url: '/'
}).then(html => {
    writeFileSync('./prerender.html', html);
    console.log(html);
}).catch(error => {
    console.log('Error occured', error);
});
