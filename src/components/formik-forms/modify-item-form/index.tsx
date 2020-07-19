import React  from "react";
import { Formik } from "formik";
import { Form, Select, InputNumber} from 'formik-antd';
// import "antd/dist/antd.css";
import "antd/dist/antd.less";
import { IInventory } from "../../../App";

const { OptGroup, Option } = Select;

interface IProps{
    inventory:IInventory[] | undefined;
    selectedPlace:string | undefined;
    setSelectedItem: (state:string) => void;
    setCount:(state:string | number | undefined) => void;
}
interface IInitialValues {
    itemForRemove:string;
    
}

export const ModifyItemForm = React.memo((props:IProps) => {
    const {
        inventory,
        selectedPlace,
        setSelectedItem,
        setCount,
    } = props;
    const initialValues = {
        itemForRemove: "",
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
                        defaultValue={1}
                        onChange={setCount}
                    />
                    <Select name="itemForRemove" className="select" onChange={setSelectedItem}>
                        <OptGroup label="Modify Item" className="optGroup">
                            {inventory?.map((item) => {
                                if(selectedPlace === item.placeId){
                                    return <Option className="option"
                                            key={item.id}
                                            value={JSON.stringify({ id: item.id, name: item.data.name, place: item.placeId})}
                                            >
                                                {item.data.name === "" ? "Unknown Item" : item.data.name} - {item.id}
                                            </Option>
                                }
                                
                            })}
                        </OptGroup>
                    </Select>
                </Form>
                
            )}
        </Formik>
    )
});

