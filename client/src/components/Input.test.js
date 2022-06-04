import {render} from '@testing-library/react';
import Input from './Input';


describe("Input Component" , () => {

    it("rendered input onSubmit" , () => {
        const {getByTestId} = render(<Input onSubmit = {1} />);
        const input = getByTestId("submitValue")
        expect(input).toBeTruthy()
    })

    it("rendered input onReload 1" , () => {
        const {getByTestId} = render(<Input onReload= {1} />);
        const input = getByTestId("reloadValue1")
        expect(input).toBeTruthy()
    })

    it("rendered input onReload 2" , () => {
        const {getByTestId} = render(<Input onReload= {1} />);
        const input = getByTestId("reloadValue2")
        expect(input).toBeTruthy()
    })


})