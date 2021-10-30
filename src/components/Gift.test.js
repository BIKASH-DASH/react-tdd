import React from 'react';
import Enzyme,{ shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Gift from './Gift';
Enzyme.configure({ adapter: new Adapter() });
const mockRemove = jest.fn();
const id = 1;
const props = {
    gift:{
        id
    },
    removeGift:mockRemove
}
const wrapper = shallow(<Gift {...props}/>);

describe('Gift component', () => {
  
    it('should render properly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should init the gift and person in state ', () => {
        expect(wrapper.state()).toEqual({person:'',present:''});

    });

    describe('when person insert changes', () => {
        const inputText = 'Uncle';
        beforeEach(()=>{
            wrapper.find('.input-person').simulate('change',{target:{value:inputText}});
        })
        it('update the person input in state', () => {
            expect(wrapper.state().person).toEqual(inputText)
        });
    });

    describe('when type into present input', () => {
        const presentInput = 'I-Phone';
        beforeEach(()=>{
            wrapper.find('.input-present').simulate('change',{target:{value:presentInput}});
        })

        it('should update the present state', () => {
            expect(wrapper.state().present).toBe(presentInput);
        });
        
    });

    describe('by Clicking remove Gift Button', () => {
        
        beforeEach(()=>{
            wrapper.find('.remove-Gift').simulate('click');

        })
        it('should call the remove gift callback', () => {
            expect(mockRemove).toHaveBeenCalled()
        });
    });
    
})
