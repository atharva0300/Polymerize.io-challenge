import {render} from '@testing-library/react';
import Header from './Header';


describe("Header Component" , () => {

    it("rendered input loadHeading" , () => {
        const {getByTestId} = render(<Header />);
        const input = getByTestId("loadHeading")
        expect(input).toBeTruthy()
    })

    it("rendered input loadImage" , () => {
        const {getByTestId} = render(<Header />);
        const input = getByTestId("loadImage")
        expect(input).toBeTruthy()
    })

    it("rendered input loadText" , () => {
        const {getByTestId} = render(<Header />);
        const input = getByTestId("loadText")
        expect(input).toBeTruthy()
    })


})

    
