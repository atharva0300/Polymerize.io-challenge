import {render} from '@testing-library/react';
import Dashboard from './Dashboard';

describe("Dashboard Component" , () => {

    it("rendered input mean" , () => {
        const {getByTestId} = render(<Dashboard mean={true} />);
        const input = getByTestId("meanValue")
        expect(input).toBeTruthy()
    })

    it("rendered input median" , () => {
        const {getByTestId} = render(<Dashboard median={true} />);
        const input = getByTestId("medianValue")
        expect(input).toBeTruthy()
    })

    it("rendered input stdDeviation" , () => {
        const {getByTestId} = render(<Dashboard stdDeviation={true} />);
        const input = getByTestId("stdDeviationValue")
        expect(input).toBeTruthy()
    })

    it("rendered input mode" , () => {
        const {getByTestId} = render(<Dashboard mode={true} />);
        const input = getByTestId("modeValue")
        expect(input).toBeTruthy()
    })
})