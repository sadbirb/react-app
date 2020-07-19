import React  from "react";
import { Formik } from "formik";
import { Form, Select} from 'formik-antd';
// import "antd/dist/antd.css";
import "antd/dist/antd.less";
import { IInventory } from "../../../App";

const { OptGroup, Option } = Select;

interface IProps{
    inventory:IInventory[] | undefined;
    selectedPlace:string | undefined;
    setSelectedItem: (state:string) => void;
}
interface IInitialValues {
    itemForRemove:string;
    
}

export const DeleteItemForm = React.memo((props:IProps) => {
    const {inventory,selectedPlace,setSelectedItem} = props;
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
                    <Select name="itemForRemove" className="select" onChange={setSelectedItem}>
                        <OptGroup label="Delete Item" className="optGroup">
                            {inventory?.map((item) => {
                                if(selectedPlace === item.placeId){
                                    return <Option className="option"
                                            key={item.id}
                                            value={item.id}
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

