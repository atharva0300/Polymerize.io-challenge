import {render} from '@testing-library/react';
import App from './App';

describe("App Component" , () => {

    it("rendered input loadDocument" , () => {
        const {getByTestId} = render(<App />);
        const input = getByTestId("loadDocument")
        expect(input).toBeTruthy()
    })
})

    
