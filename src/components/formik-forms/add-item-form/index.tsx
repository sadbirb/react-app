import React, { Dispatch, SetStateAction }  from "react";
import { Formik } from "formik";
import { Form } from 'formik-antd';
import "antd/dist/antd.less";
// import "antd/dist/antd.css";
import { IPlaces } from "../../../App";
import { InputNumber, Input, } from 'antd';
import {Select} from 'formik-antd';

const { OptGroup, Option } = Select;


interface IProps{
    places:IPlaces[] |undefined;
    setCount:(state:string | number | undefined) => void;
    setInventoryName:Dispatch<SetStateAction<string>>;
    setPlaceId:Dispatch<SetStateAction<string>>;
};
interface IInitialValues {};

export const AddItemForm = React.memo((props:IProps) => {
    const {
        places,
        setCount,
        setInventoryName,
        setPlaceId,
    } = props;
    const initialValues = {
        count:1,
        inventoryName:"",
        placeId:"",
    }

    return (
        <Formik 
            initialValues={initialValues}
            onSubmit={()=>{}}
            enableReinitialize>
            {() => (
                <Form>
                    <InputNumber 
                        min={1}
                        max={99}
                        name="count"
                        defaultValue={initialValues.count}
                        onChange={setCount}
                    />
                    <Input 
                        name="inventoryName"
                        placeholder="Inventory name"
                        defaultValue={initialValues.inventoryName}
                        onBlur={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setInventoryName(event.target.value)
                        }}
                    />
                    <Select name="placeId" className="select" onChange={setPlaceId}>
                        <OptGroup label="Place" className="optGroup">
                            {places?.map((place) => {
                                return <Option className="option"
                                            key={place.id}
                                            value={place.id}
                                        >
                                            {place.data.name === "" ? "Unknown place" : place.data.name}
                                        </Option>
                            })}
                        </OptGroup>
                    </Select>
                </Form>
                
            )}
        </Formik>
    )
});

