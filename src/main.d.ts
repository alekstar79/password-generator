type SlideProps = {
    fill: string;
    background: string;
};
type ContainerBound = {
    left: number;
    top: number;
};
interface RandomFunctionsMap {
    [key: string]: () => any;
}
declare const sliderProps: SlideProps;
declare const slider: HTMLDivElement;
declare const sliderValue: HTMLDivElement;
declare const input: HTMLInputElement;
declare function applyFill(slider: HTMLInputElement): void;
declare const randomFunc: RandomFunctionsMap;
declare function secureMathRandom(): number;
declare function getRandomLower(): string;
declare function getRandomUpper(): string;
declare function getRandomNumber(): string;
declare function getRandomSymbol(): string;
declare const resultEl: HTMLDivElement;
declare const lengthEl: HTMLInputElement;
declare const uppercaseEl: HTMLInputElement;
declare const lowercaseEl: HTMLInputElement;
declare const numberEl: HTMLInputElement;
declare const symbolEl: HTMLInputElement;
declare const generateBtn: HTMLButtonElement;
declare const copyBtn: HTMLButtonElement;
declare const resultContainer: HTMLDivElement;
declare const copyInfo: HTMLDivElement;
declare const copiedInfo: HTMLDivElement;
declare let generatedPassword: boolean;
declare let rect: DOMRect;
declare let resultContainerBound: ContainerBound;
declare function generatePassword(length: number, lower: number, upper: number, numeral: number, symbol: number): string;
declare function disableOnlyCheckbox(): void;
