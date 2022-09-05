import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { fireEvent,render } from '@testing-library/react'
import { prettyDOM } from "@testing-library/dom";
import Note from "./Note";

describe("renders content for component Notes",()=>{
    test("renders content",()=>{
        const note ={
            content: "This is a test",
            important: true
        }
    
        const component = render(<Note note={note}/>)
    
        // console.log(component)
        // primer test para que vean que no encuentra el elemento camiones
        // component.getByText("test")
        // component.getAllByText("This is a test")
        // component.getAllByText("make not important")
    
        // expect(component.container).toHaveTextContent("This is a test")
        
        // const li = component.container.querySelector("li")
        // console.log(prettyDOM(li))
        expect(component.container).toHaveTextContent(note.content)
        
    })
})

describe("simulation click in component",()=>{
    test("clicking the button calls event handler once",()=>{
        const note ={
            content: "This is a test",
            important: true
        }

        const mockHandler = jest.fn()

        const component = render(<Note note={note} toggleImportance={mockHandler} />)

        const button = component.getByText("make not important")
        fireEvent.click(button)

        // expect(mockHandler.mock.calls).toHaveLength(1)
        expect(mockHandler).toHaveBeenCalledTimes(1)
    })
})