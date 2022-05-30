import { render, screen } from "@testing-library/react";
import { Input } from "../Components/Input";

test("Fake assertion", () => {
  it("should exists in dom", function () {
    render(<Input></Input>)
    let inp = screen.getByTestId("#inputContainer")
    expect(inp).toBeInTheDocument()
    expect(1).toBe(1);
  })
  

});

