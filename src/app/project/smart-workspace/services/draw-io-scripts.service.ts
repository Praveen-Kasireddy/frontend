import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

declare const document: any;
declare const require;

@Injectable()
export class DrawIOScriptService {
    private filelist: any[];

    constructor() {
        if (environment.production) {
            this.filelist = [{ file: 'assets/scripts/dist/draw.io.min.js' }];
        } else {
            this.filelist = require(`../../../../assets/configs/drawIoFileList.json`);
        }

        this.filelist.forEach((script: any) => {
            script.loaded = false;
        });
    }

    load() {
        const promises: any[] = [];
        this.filelist.forEach(script => promises.push(this.loadScript(script)));
        return Promise.all(promises);
    }

    loadScript(drawIOScript: any) {
        return new Promise((resolve, reject) => {
            // resolve if already loaded
            if (drawIOScript.loaded) {
                resolve({ script: drawIOScript.file, loaded: true, status: 'Already Loaded' });
            } else {
                // load script
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = drawIOScript.file;
                script.async = false;
                script.charset = 'utf-8';
                if (script.readyState) {
                    // IE
                    script.onreadystatechange = () => {
                        if (script.readyState === 'loaded' || script.readyState === 'complete') {
                            script.onreadystatechange = null;
                            drawIOScript.loaded = true;
                            resolve({ script: drawIOScript.file, loaded: true, status: 'Loaded' });
                        }
                    };
                } else {
                    // Others
                    script.onload = () => {
                        drawIOScript.loaded = true;
                        resolve({ script: drawIOScript.file, loaded: true, status: 'Loaded' });
                    };
                }
                script.onerror = (error: any) => resolve({ script: drawIOScript.file, loaded: false, status: 'Error' });
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        });
    }
}
