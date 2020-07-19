import React, { useState, useCallback } from 'react';
import { Modal,notification } from 'antd';
import { DeleteItemForm } from '../../formik-forms/delete-item-form';
import { IInventory } from '../../../App';
import firebase from 'firebase';
import { fireStore } from '../../../firebaseDb';
import { ModifyItemForm } from '../../formik-forms/modify-item-form';

interface IProps {
    isVisible:boolean;
    inventory:IInventory[] | undefined;
    selectedPlace:string | undefined;
    setInventory:(inventory:IInventory[]) => void;
    setIsVisible:(state:boolean) => void;
};

export const ModifyItemModal = React.memo((props:IProps) => {
    const {
        isVisible,
        setIsVisible,
        inventory,
        selectedPlace,
        setInventory
    } = props;

    const [selectedItem, setSelectedItem] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [count, setCount] = useState<string | number | undefined>(1)

    const onSubmit = useSubmit(setInventory,setIsLoading);

    return (
        <Modal
            title="Modify Item"
            visible={isVisible}
            onOk={() => {
                // setIsVisible(false)
                onSubmit(count,selectedItem,setIsVisible)
            }}
            confirmLoading={isLoading}
            onCancel={() => {
                setIsVisible(false)
            }}
        >
            <ModifyItemForm 
                inventory={inventory}
                selectedPlace={selectedPlace}
                setSelectedItem={setSelectedItem}
                setCount={setCount}
            />
        </Modal>
    )
});

function useSubmit(setInventory:any,setIsLoading:any){
    return useCallback((
        count:string | number | undefined,
        value: string,
        setIsVisible:any,
    ) => {
        const itemInfo = JSON.parse(value);
        if(!count || !value){
            notification.error({
                message: "Oops...",
                description: "Fields must be filled",
            });
            return;
        }
        setIsLoading(true);
        firebase.firestore().collection("inventory").doc(itemInfo.id).delete().then(() => {
                firebase.firestore().collection("inventory").doc().set({ 
                    name: itemInfo.name, 
                    count: count, 
                    place: firebase.firestore().collection("places").doc(itemInfo.place) // main-101 – id места
                }).then(() => {
                    fireStore.collection("inventory").get().then(response => { 
                        const docs = response.docs.map(x => ({
                            id: x.id,
                            data: x.data(), 
                            placeId: x.data().place?.id
                        })); 
                        setInventory(docs);
                        setIsLoading(false);
                        setIsVisible(false);
                    });
                });
            });
    },[setInventory, setIsLoading]);
}