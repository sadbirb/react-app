import React from 'react';
import {IPlaces} from "./App";

let clickedId:any;
clickedId=null;
const getId = (id:any) =>{
    clickedId=id;
}

let clickedParts:any;
clickedParts=null;
const getParts = (parts:any) =>{
    clickedParts=parts;
}

export function Place({id, name, parts, setSelect, setSelectedPlace}:any){

    return(
        <div>
            <button className = "place" onClick={() => {
                setSelect(id); 
                getId(id);
                setSelectedPlace(id);
                getParts(parts)}}
            >
                {name}
            </button>
        </div>
    );
}

export function Item({id, placeID, name, count}:any){
    if(placeID===clickedId){
        return(
            <div className = "item">
                <div className="itemname">{name}</div>
                <div className="itemcount">{count}</div>
                {/* <div className="item-instance">{id}</div> */}
            </div>
        )
    }
    else{
        return(null)
    }
}

export function PlaceList(props:{places1:IPlaces[] | undefined, setSelect:(value:any) => void, setSelectedPlace:(values:string) => void }){
    const {places1, setSelect, setSelectedPlace} = props;

    const topLvl = (placeId:string) => {
        if(places1 && placeId){
            for (const place of places1){
                if (place.parts){
                    for(const partId of place.parts){
                        if(partId===placeId){
                            return(false);
                        }
                    }
                }
            }
            return(true);
        }
    }

    const drawParts = (placeId:string) => {
        if(clickedParts){
            for (const parts of clickedParts){
                if(placeId===parts){
                    return true;
                }
            }
        }
    }

    return(
        <div>{places1?.map((place:any) => {
            if(topLvl(place.id) || drawParts(place.id)){
                return(
                    <Place 
                    key = {place.id}
                    name = {place.data.name} 
                    parts = {place.parts} 
                    id = {place.id}
                    setSelect={setSelect}
                    setSelectedPlace={setSelectedPlace}
                    />
                )
            }
        })}</div>
    )
}