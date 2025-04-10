import { ChangeEventHandler } from "react";

export type InputProps = {
value:string;
onChange: ChangeEventHandler<HTMLInputElement>;
className?:string;
placeholder?:string;
};

export default function Input(props:InputProps) {
    return (<input type="text" placeholder={props.placeholder || ''} className={"p-2 border border-gray-700 rounded bg-blue-950 text-white p-2 " + props.className} value={props.value} onChange={props.onChange} />);
}