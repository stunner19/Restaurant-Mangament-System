import React from 'react';
import ContactComponent from '../components/ContactComponent';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';

function renderWithRouter(
    ui,
    {route = '/',history = createMemoryHistory({ initialEntries : [route]})} = {}
){
    return{
        ...render(<BrowserRouter>{ui}</BrowserRouter>),
        history
    }
};

const props = {
    postFeedback : jest.fn(),
    resetFeedback : jest.fn()
}

describe('<ContactComponent />',() => {
    it('renders', () =>{
        const { container } = renderWithRouter(<ContactComponent {...props}/>)      
        expect(container).toBeTruthy();
    });

    
})