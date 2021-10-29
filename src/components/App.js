import React, { Component } from 'react'
import {Button}from 'react-bootstrap'

export default class App extends Component {
    constructor(){
        super();
        this.state={
            gifts:[]
        }
    }

    addGift(){
        const { gifts } = this.state ;
        gifts.push({id:gifts.length+1})
        this.setState(gifts);
    }

    render() {
        return (
            <div>
                <h2>App</h2>
                <div className='gift-list'>
                    {
                        this.state.gifts.map((gift)=>{
                            return (<div key={gift.id} >{gift.id}</div>)
                        })
                    }
                </div>
                <Button className='button-newGift' onClick={()=>this.addGift()}>Add Gift</Button>
            </div>
        )
    }
}
