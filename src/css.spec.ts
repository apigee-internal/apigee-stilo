import {Rule, ICSS} from './css';

describe('Rule',  () => {
    it('Empty Rules', () => {
        const r = new Rule('rule', []);
        expect(r.raw).toBe('');
        expect(r.ngCss).toBe('');
    });

    it('One empty Rule', () => {
        const s: ICSS = {
            classifier: '.rule',
            keys: ['.rule'],
            raw: '.rule {}',
            style: {}
        };
        const r = new Rule('rule', [s]);
        expect(r.raw).toBe('.rule {}');
        expect(r.ngCss).toBe(':host {}');
    });
});
