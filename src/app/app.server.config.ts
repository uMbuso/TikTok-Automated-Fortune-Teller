import { mergeApplicationConfig } from '@angular/core';
import { appConfig } from './app.config';
import { serverConfig } from './app.config.server';

export const appServerConfig = mergeApplicationConfig(appConfig, serverConfig);