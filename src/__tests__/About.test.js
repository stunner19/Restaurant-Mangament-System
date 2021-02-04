import React from 'react';
import AboutComponent from '../components/AboutComponent';
import { BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import '@testing-library/jest-dom';
import { render, cleanup } from '@testing-library/react';

const props = {
    leaders : {
        leaders : [{
            id: 0,
            name: 'Peter Pan',
            image: '/assets/images/alberto.png',
            designation: 'Chief Epicurious Officer',
            abbr: 'CEO',
            featured: false,
            description: "Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections."
          }
      ]
    }
}

function renderWithRouter(
    ui,
    {route = '/',history = createMemoryHistory({ initialEntries : [route]})} = {}
){
    return {
        ...render(<BrowserRouter>{ui}</BrowserRouter>),
        history
    }
}

describe('<AboutComponent />',() => {
    afterEach(cleanup);

    it('renders correctly',() => {
        const { getByTestId, getByText, getAllByText } = renderWithRouter(<AboutComponent {...props}/>)
        expect(getByTestId('about')).toBeInTheDocument();
        expect(getByText(/home/i)).toBeInTheDocument();
        expect(getAllByText(/about us/i)).not.toBe(null);
        expect(getByText(/started in 2010/i)).toBeInTheDocument();
        expect(getByTestId('card')).toBeInTheDocument();
        expect(getByText(/facts/i)).toBeInTheDocument();
    });
});