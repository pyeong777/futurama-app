export interface CharacterType {
    age: string;
    gender: string;
    homePlanet: string;
    id: number;
    images: {
        headShot: string;
        main: string;
    };
    name: {
        first: string;
        last: string;
        middle: string;
    };
    occupation: string;
    sayings: Array<string>;
    species: string;
}