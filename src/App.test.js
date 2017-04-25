import React from 'react';
import ReactDOM from 'react-dom';
import NameForm from './Components/Projects';
import { mount } from 'enzyme';

describe('My Test Suite', () => {
    let wrapper = mount(
        <NameForm />
    );

    it('Should render one input element', () => {
        expect(wrapper.find('input').length).toBe(1);
    });

    it('Should change state.value whenever input is entered', () => {
        let input = wrapper.find('input');
        const evt = {
            target: {
                value: "Ponies!"
            }
        };
        input.simulate('change', evt);
        expect(wrapper.state().value).toBe('Ponies!');
    });

    it('Should add items to the state.arr respectively', () => {
        const button = wrapper.find('button');
        button.simulate('click');

        expect(wrapper.state().arr).toEqual(["Ponies!"]);
        expect(wrapper.state().value).toBe('');
    });


<<<<<<< HEAD
=======
});
>>>>>>> d396a56f627f229a0284c9452df468c1564e35d2
