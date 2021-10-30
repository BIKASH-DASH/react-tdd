import React, { Component } from 'react'
import {Button}from 'react-bootstrap'
import Gift from './Gift'
import {maxNumber} from '../helper'
export default class App extends Component {
    constructor(){
        super();
        this.state={
            gifts:[]
        }
    }

    addGift(){
        const { gifts } = this.state ;
        const ids = this.state.gifts.map(gift=>gift.id);
        const maxId =maxNumber(ids) ;
        gifts.push({id:maxId+1})
        this.setState(gifts);
    }
    removeGifts= (id)=>{
        const gifts = this.state.gifts.filter((gift)=> gift.id !== id );
        this.setState({gifts});
    }
    render() {
        return (
            <div>
                <h2>App</h2>
                <div className='gift-list'>
                    {
                        this.state.gifts.map((gift)=>{
                            return (<Gift key={gift.id} gift={gift} removeGift={this.removeGifts}/>)
                        })
                    }
                </div>
                <Button className='button-newGift' onClick={()=>this.addGift()}>Add Gift</Button>
            </div>
        )
    }
}
