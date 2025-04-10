import Input, { InputProps } from "./input";


export default function AmountInput(props:InputProps){
    return (
        <div>
            <Input placeholder="Amount" className="text-right" value={props.value} onChange={e => {props.onChange}} /><span className="text-white/50 px-4">USD</span>
        </div>
    )
}