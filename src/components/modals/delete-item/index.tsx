import React, { useState, useCallback } from 'react';
import { Modal,notification } from 'antd';
import { DeleteItemForm } from '../../delete-item-form';
import { IInventory } from '../../../App';
import firebase from 'firebase';
import { fireStore } from '../../../firebaseDb';

interface IProps {
    isVisible:boolean;
    inventory:IInventory[] | undefined;
    selectedPlace:string | undefined;
    setInventory:(inventory:IInventory[]) => void;
    setIsVisible:(state:boolean) => void;
};

export const DeleteItemModal = React.memo((props:IProps) => {
    const {
        isVisible,
        setIsVisible,
        inventory,
        selectedPlace,
        setInventory
    } = props;

    const [selectedItem, setSelectedItem] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const onSubmit = useSubmit(setInventory,setIsLoading);

    return (
        <Modal
            title="Delete Item"
            visible={isVisible}
            onOk={() => {
                // setIsVisible(false)
                onSubmit(selectedItem,setIsVisible)
            }}
            confirmLoading={isLoading}
            onCancel={() => {
                setIsVisible(false)
            }}
        >
            <DeleteItemForm 
                inventory={inventory}
                selectedPlace={selectedPlace}
                setSelectedItem={setSelectedItem}
            />
        </Modal>
    )
});

function useSubmit(setInventory:any,setIsLoading:any){
    return useCallback((
        value: string,
        setIsVisible:any,
    ) => {
        if(value === ""){
            notification.error({
                message: "Oops...",
                description: "Field must be filled",
            });
            return;
        }
        setIsLoading(true);
        firebase.firestore().collection("inventory").doc(value).delete().then(() => {
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
    },[setInventory, setIsLoading]);
}