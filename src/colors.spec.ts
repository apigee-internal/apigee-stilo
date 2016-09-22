import {Colors} from './colors';

const colors = new Colors();

describe('Colors', () => {
    it('Apigee Orange', () => {
        expect(colors.apigeeOrange).toBe('#fc4c02');
    });
});
