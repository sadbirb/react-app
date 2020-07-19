import React, { useState, useEffect } from 'react';
import './App.css';
import * as firebase from 'firebase';
import {fireStore} from "./firebaseDb/index";
import {Item, PlaceList} from "./place"
import {DeleteItemModal} from "./components/modals/delete-item"
import { AddItemModal } from './components/modals/add-item';
import { ModifyItemModal } from './components/modals/modify-item';

export interface IPlaces{
    id: string;
    data: firebase.firestore.DocumentData;
    parts: any;
}

export interface IInventory{
  id: string;
  data: firebase.firestore.DocumentData;
  placeId: any;
}

export const App = React.memo(() => {

    const [places, setPlaces] = useState<IPlaces[]>();
    const [inventory, setInventory] = useState<IInventory[]>();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [selectPlace, setSelectPlace] = useState();
    const [selectedPlace, setSelectedPlace] = useState<string>("");
    const [openedDeleteItemModal, setOpenedDeleteItemModal] = useState<boolean>(false);
    const [openedModifyItemModal, setOpenedModifyItemModal] = useState<boolean>(false);
    const [openedAddItemModal, setOpenedAddItemModal] = useState<boolean>(false)

  useEffect(() => {
    fireStore.collection("places").get().then(response => { 
          const docs = response.docs.map(x => ({ 
            id: x.id,
            data: x.data(), 
            parts: x.data().parts && x.data().parts.map((part:any) => part?.id) 
          })); 
          setPlaces(docs)
    });
  
    fireStore.collection("inventory").get().then(response => { 
      const docs = response.docs.map(x => ({ 
        id: x.id,
        data: x.data(), 
        placeId: x.data().place?.id
      })); 
      setInventory(docs);
    });
  },[]);

  return (
    <div className = "App">
      <div className="places">
        <div className="placeshead">Places</div>
        <PlaceList places1={places} setSelect={setSelectPlace} setSelectedPlace={setSelectedPlace}/>
      </div>
      <div className = "items">
        <div className="itemshead">Items</div>
        <div className="itemsproperties">
          <div className="nameproperty">NAME</div>
          <div className="countproperty">COUNT</div>
        </div>
        {inventory?.map(item => (
        <Item 
          placeID={item.placeId}
          key={item.id}
          name={item.data.name} 
          count={item.data.count}
          id={item.id}
        />
        ))}
      </div>
      <div className="buttons">
        <button className="button" onClick={()=>{
          setOpenedAddItemModal(true)
        }}>Add Item</button>
        <button className="button" onClick={() => { 
          setOpenedDeleteItemModal(true)
        }}>Delete Item</button>
        <button className="button" onClick={() => { 
          setOpenedModifyItemModal(true)
        }}>Modify Item</button>
      </div>
      <DeleteItemModal 
        isVisible={openedDeleteItemModal}
        setIsVisible={setOpenedDeleteItemModal}
        inventory={inventory}
        setInventory={setInventory}
        selectedPlace={selectedPlace}
      />
      <ModifyItemModal 
        isVisible={openedModifyItemModal}
        setIsVisible={setOpenedModifyItemModal}
        inventory={inventory}
        setInventory={setInventory}
        selectedPlace={selectedPlace}
      />
      <AddItemModal
        isVisible={openedAddItemModal}
        setIsVisible={setOpenedAddItemModal}
        places={places}
        setInventory={setInventory}
      />
      {/* <button className="button">Modify Item</button> */}
    </div>
  );
});
