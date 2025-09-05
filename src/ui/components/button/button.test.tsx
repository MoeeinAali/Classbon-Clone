import {render, screen} from "@testing-library/react";
import Button from "./button.component";

describe('Button Component', () => {
    test('renders a default button', () => {
        const {getByText} = render(<Button>Click</Button>);
        expect(getByText("Click")).toBeInTheDocument()
    })

    test('disables the button when isDisabled prop is true', () => {
        render(<Button isDisabled={true}>Click</Button>);
        expect(screen.getByRole('button')).toBeDisabled()
    })

    test("applies the correct css class for different buttons varient", () => {
        const {rerender} = render(<Button variant={"primary"}>click!</Button>)
        expect(screen.getByRole('button')).toHaveClass("btn primary")

        rerender(<Button variant={"info"}>click!</Button>)
        expect(screen.getByRole('button')).toHaveClass("btn info")
    })
})
