import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { fireEvent,render } from '@testing-library/react'
import Toggable from './Toggable'
import i18n from "../i18n";

describe('Toggable',()=>{
    let buttonLabel = 'show'
    let component
    beforeEach(()=>{
        component = render(
            <Toggable buttonLabel={buttonLabel}>
                <div>Test</div>
            </Toggable>
        )
    })

    test('renders its children',()=>{
        component.getByText('Test')
    })
    test('renders its children but not visible',()=>{
        const el = component.getByText('Test')
        expect(el.parentNode).toHaveStyle('display:none')
    })
    test('after clicking  its children must be show',()=>{
        const button = component.getByText(buttonLabel)
        fireEvent.click(button)
        const el = component.getByText('Test')
        expect(el.parentNode).not.toHaveStyle('display:none')
    })

    test('toggle content can be closed',()=>{
        // const cancelButton = component.container.querySelector('button:nth-child(2)')
        const cancelButton = component.getByText(i18n.TOGGABLE.CANCEL_BUTTON)
        fireEvent.click(cancelButton)
        
    })
})