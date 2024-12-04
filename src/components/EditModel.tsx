import React, { useState, useRef } from 'react'

interface Color {

}
interface Param {
    id: number;
    name: string;
    type: 'string';
}
interface ParamValue {
    paramId: number;
    value: string;
}
interface Model {
    paramValues: ParamValue[];
    colors: Color[];
}
interface Props {
    params: Param[];
    model: Model;
}

function EditModel(props: Props) {
    let [model, setModel] = useState(props.model)
    let reference = useRef(null)
    let [params, setParams] = useState(props.model.paramValues)
    let [currentVal, setCurrentVal] = useState("")
    let onEdit = () => {
        let inputs = [...reference.current.children]
        inputs.map((item)=>{
            params[parseInt(item.children[1].name)] = {
                paramId: parseInt(item.children[1].name) + 1,
                value: item.children[1].value
            }
            setParams(params)
        })
        setModel({
            ...model,
            paramValues: params
        })

        console.log(model)
    }
    let getModel = () => {
        return model
    }

    return <> 
        <form ref={reference}>
            {props.params.map(parameter => <p><label>{parameter.name}</label><input name={`${parameter.id - 1}`} onChange={onEdit} type='text' value={model.paramValues[parameter.id - 1].value}></input></p>)}
        </form>
    </>
}

export default EditModel