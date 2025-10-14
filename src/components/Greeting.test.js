import { render, screen } from '@testing-library/react';
import Greeting from "./Greeting";

describe('<Greeting />', () => {
    test('renders hello world as a text', () => {
        render(<Greeting />);

        const helloWorldElement = screen.getByText('hello world!');
        expect(helloWorldElement).toBeInTheDocument();
    });
});


