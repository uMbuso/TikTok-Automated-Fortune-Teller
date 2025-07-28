import 'zone.js/node';
import { APP_BASE_HREF } from '@angular/common';
import { provideServerRendering } from '@angular/platform-server';
import { bootstrapApplication } from '@angular/platform-browser';
import { mergeApplicationConfig } from '@angular/core';
import { App } from './app/app';
import { appConfig } from './app/app.config';


const bootstrap = () => {
  return bootstrapApplication(App, mergeApplicationConfig(appConfig, {
    providers: [
      provideServerRendering(),
      { provide: APP_BASE_HREF, useValue: '/' }
    ]
  }));
};

export default bootstrap; 