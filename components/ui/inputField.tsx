"use client"
import {Input} from "@nextui-org/react";

export default function InputField( props:any ) {
    return (
        <input className=" border-black rounded-[8px] border-[1px] outline-none px-4 py-2 max-w-[500px] w-full"
            placeholder={props.placeholder}
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
        >
        </input>
    )
  }
  