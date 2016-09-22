import {AppView} from './appView';

describe('AppView', () => {
    it('HostGuard', () => {
        const stilo = new AppView();
        expect(stilo.hostGuard).toBe(':host { display: block; position: relative; min-width: 1000px; width: 100%; overflow-y: hidden; }');
    });
});
