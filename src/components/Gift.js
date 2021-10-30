import React, { Component } from 'react'
import {FormControl,Form,FormGroup,Button,FormLabel} from 'react-bootstrap'
export default class Gift extends Component {
    constructor(){
        super();
        this.state = {
            person:'',
            present:''
        }
    }
    render() {
        return (
            <div>
                <Form>
                    <FormGroup>
                        <FormLabel>Person Name</FormLabel>
                        <FormControl 
                        className='input-person'
                        onChange={(e)=>this.setState({person:e.target.value})}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>
                            present
                        </FormLabel>
                        <FormControl onChange={(e)=>this.setState({present:e.target.value})} className='input-present'/>
                    </FormGroup>
                    <Button onClick={()=>this.props.removeGift(this.props.gift.id)} className='remove-Gift'>Remove Gift</Button>
                </Form>
            </div>
        )
    }
}
