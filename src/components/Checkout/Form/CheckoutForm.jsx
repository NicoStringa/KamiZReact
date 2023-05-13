import React from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '../../UI/Input/Input';
import Submit from '../../UI/Submit/Submit';

import { CheckoutDataStyle, Formik, Form } from './CheckoutFormStyles';
import { checkoutInitialValues, checkoutValidationScheme } from '../../../formik';
import { clearCart } from '../../../redux/cart/cartSlice';
import { useDispatch } from 'react-redux';

const CheckoutForm = ({cartItems}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <CheckoutDataStyle>
      <h2>Enter your data</h2>
      <Formik initialValues={checkoutInitialValues} validationSchema={checkoutValidationScheme} onSubmit={async values =>{
        console.log({items: cartItems,shippingDetails: {...values},})
        
        try {
          await alert('Success, your order was created to this Data: \n\n' + JSON.stringify(values, null, 4))
          navigate('/congratulations');
          dispatch(clearCart());
        } catch (error) {
          alert('Error creating order')
        }
      }}>
        <Form>
          <Input
            name='name'
            htmlFor='name'
            type='text'
            id='name'
            placeholder='Your Name'
          >
            Name
          </Input>
          <Input
            name='cellphone'
            htmlFor='cellphone'
            type='text'
            id='cellphone'
            placeholder='Your Cell Phone'
          >
            Cell Phone
          </Input>
          <Input
            name='location'
            htmlFor='location'
            type='text'
            id='location'
            placeholder='Your Location'
          >
            Location
          </Input>
          <Input
            name='address'
            htmlFor='address'
            type='text'
            id='address'
            placeholder='Your Address'
          >
            Address
          </Input>
          <div>
            <Submit disabled={!cartItems.length}>Make Order</Submit>
          </div>
        </Form>
      </Formik>
    </CheckoutDataStyle>
  );
};

export default CheckoutForm;