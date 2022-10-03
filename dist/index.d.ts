/// <reference types="react" />
export { default as randiman } from './lib/random';
declare type Style = 'character' | 'shape';
declare type Type = 'default' | 'face';
interface Params {
    displayValue?: string;
    value: string;
    size?: number;
    shadow?: boolean;
    style?: Style;
    border?: boolean;
    borderSize?: number;
    borderColor?: string;
    radius?: number;
    type?: Type;
}
export default function Avvvatars(params: Params): JSX.Element;
