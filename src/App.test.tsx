import { expect, test } from "vitest";
import App from "./App";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

const component = ()=>{
    return(
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    )
}

test("app loads", ()=>{
    const {container} = render(component());
    expect(container).toHaveTextContent("User Admin App")
})