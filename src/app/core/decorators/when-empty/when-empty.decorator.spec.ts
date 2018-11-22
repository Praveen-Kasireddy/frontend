import { WhenEmpty } from './when-empty.decorator';

const DEFAULT_CATS = 1;
const DEFAULT_DOGS = true;
const DEFAULT_RABBITS = ['fluffy', 'bouncer'];
const DEFAULT_FISH = 'nemo';

class Animals {
    @WhenEmpty(DEFAULT_CATS) cats: number;
    @WhenEmpty(DEFAULT_DOGS) dogs: boolean;
    @WhenEmpty([...DEFAULT_RABBITS])
    rabbits: string[];
    @WhenEmpty(DEFAULT_FISH) fish: string;
}

function expectDefaults(animals: Animals) {
    expect(animals.cats).toBe(DEFAULT_CATS);
    expect(animals.dogs).toBe(DEFAULT_DOGS);
    expect(animals.rabbits).toEqual(DEFAULT_RABBITS);
    expect(animals.fish).toBe(DEFAULT_FISH);
}

describe('WhenEmpty Decorator', () => {
    let animals: Animals;

    beforeEach(() => {
        animals = new Animals();
    });

    it('should default the value of the property', () => {
        expectDefaults(animals);
    });

    describe('when arrays are changed to empty array', () => {
        beforeEach(() => {
            animals.rabbits = [];
        });

        it('should default the value of the property', () => {
            expect(animals.rabbits).toEqual(DEFAULT_RABBITS);
        });
    });

    describe('when strings are changed to empty string', () => {
        beforeEach(() => {
            animals.fish = '';
        });

        it('should default the value of the property', () => {
            expect(animals.fish).toBe(DEFAULT_FISH);
        });
    });

    describe('when property is changed to `undefined`', () => {
        beforeEach(() => {
            animals.cats = undefined;
            animals.dogs = undefined;
            animals.rabbits = undefined;
            animals.fish = undefined;
        });

        it('should default the value of the property', () => {
            expectDefaults(animals);
        });
    });

    describe('when property is changed to `undefined`', () => {
        beforeEach(() => {
            animals.cats = undefined;
            animals.dogs = undefined;
            animals.rabbits = undefined;
            animals.fish = undefined;
        });

        it('should default the value of the property', () => {
            expectDefaults(animals);
        });
    });

    describe('when property is changed to accepted value', () => {
        beforeEach(() => {
            animals.cats = 0;
            animals.dogs = false;
            animals.rabbits = ['something-else'];
            animals.fish = 'something-else';
        });

        it('should allow value to be changed', () => {
            expect(animals.cats).toBe(0);
            expect(animals.dogs).toBe(false);
            expect(animals.rabbits).toEqual(['something-else']);
            expect(animals.fish).toBe('something-else');
        });
    });

    describe('when the default value is an array reference', () => {
        beforeEach(() => {
            animals.rabbits.push('value-that-should-not-exist');
        });

        it('should not be possible to mutate the default value', () => {
            expect(animals.rabbits).toEqual(DEFAULT_RABBITS);
        });
    });
});
