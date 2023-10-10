import React from "react";
import {render, fireEvent} from '@testing-library/react'
import Hero from '../components/Hero/Hero'


test('Navbar button responds correctly', ()=>{

    const alertSpy = jest.spyOn(window,'alert');
    const { getByText } = render(<Hero/>)
    const button = getByText("加入我们")
    fireEvent.click(button);

    expect(alertSpy).toHaveBeenCalledWith('the button is working');
    alertSpy.mockRestore()
})