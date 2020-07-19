import React, { useState, useCallback } from 'react';
import { Modal, notification } from 'antd';
import { IInventory } from '../../../App';
import firebase from 'firebase';
import { fireStore } from '../../../firebaseDb';
import { AddItemForm } from '../../add-item-form';
import { IPlaces } from '../../../App';

interface IProps {
    isVisible:boolean;
    places:IPlaces[] | undefined;
    setInventory:(inventory:IInventory[]) => void;
    setIsVisible:(state:boolean) => void;
};

export const AddItemModal = React.memo((props:IProps) => {
    const {places} = props;
    const {
        isVisible,
        setIsVisible,
        setInventory,
    } = props;

    const [count, setCount] = useState<string | number | undefined>(1)
    const [inventoryName, setInventoryName] = useState<string>("")
    const [placeId, setPlaceId] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const onSubmit = useSubmit(setInventory,setIsLoading);

    return (
        <Modal
            title="Add Item"
            visible={isVisible}
            onOk={() => {
                onSubmit(count,inventoryName,placeId,setIsVisible)
            }}
            confirmLoading={isLoading}
            onCancel={() => {
                setIsVisible(false)
            }}
        >
            <AddItemForm places={places} setCount={setCount} setInventoryName={setInventoryName} setPlaceId={setPlaceId}/>
        </Modal>
    )
});

function useSubmit(setInventory:any,setIsLoading:any){
    return useCallback((
        count: string | number | undefined,
        inventoryName:string,
        placeId:string,
        setIsVisible:any,
    ) => {
        if(!count ||  !inventoryName || !placeId){
            notification.error({
                message: "Oops...",
                description: "Fields must be filled",
            });
            return;
        }
        setIsLoading(true);

        firebase.firestore().collection("inventory").doc().set({ 
            name: inventoryName, 
            count: count, 
            place: firebase.firestore().collection("places").doc(placeId) // main-101 – id места
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
    },[setInventory, setIsLoading]);
}