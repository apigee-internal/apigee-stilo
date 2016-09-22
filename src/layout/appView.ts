import {ICSS} from '../css';

const appViewStyle: ICSS[] = require('./appView.less');

export class AppView {
    // ShadowDom used in the navbar is causing some conflicts on app containers.
    // We should fix this in a different way, but this is a workaround to it:
    get hostGuard () {
        const h = appViewStyle.find(s => s.classifier === ':host');
        return h ? h.raw : '';
    };
}
