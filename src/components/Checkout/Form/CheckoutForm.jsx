import React from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '../../UI/Input/Input';
import Submit from '../../UI/Submit/Submit';

import { CheckoutDataStyle, Formik, Form } from './CheckoutFormStyles';
import {
  checkoutInitialValues,
  checkoutValidationScheme,
} from '../../../formik';
import { clearCart } from '../../../redux/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { createOrder } from '../../../axios/axios-orders';
import { ThreeDots } from 'react-loader-spinner';

const CheckoutForm = ({ cartItems, price, shippingCost }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

  return (
    <CheckoutDataStyle>
      <h2>Enter your data</h2>
      <Formik
        initialValues={checkoutInitialValues}
        validationSchema={checkoutValidationScheme}
        onSubmit={async (values) => {
          const orderData = {
            items: cartItems,
            price,
            shippingCost,
            total: price + shippingCost,
            shippingDetails: { ...values },
          };

          try {
            await createOrder(orderData, dispatch, currentUser),
              toast('Your order was created successfully', {
                style: {
                  borderRadius: '10px',
                  background: 'var(--keppel)',
                  color: 'var(--smoke)',
                },
              });
            navigate('/congratulations');
            dispatch(clearCart());
          } catch (error) {
            toast.error('Error creating order');
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Input
              name="name"
              htmlFor="name"
              type="text"
              id="name"
              placeholder="Your Name"
            >
              Name
            </Input>
            <Input
              name="cellphone"
              htmlFor="cellphone"
              type="text"
              id="cellphone"
              placeholder="Your Cell Phone"
            >
              Cell Phone
            </Input>
            <Input
              name="location"
              htmlFor="location"
              type="text"
              id="location"
              placeholder="Your Location"
            >
              Location
            </Input>
            <Input
              name="address"
              htmlFor="address"
              type="text"
              id="address"
              placeholder="Your Address"
            >
              Address
            </Input>
            <div>
              <Submit disabled={!cartItems.length}>
                {isSubmitting ? (
                  <ThreeDots
                    height="15"
                    width="15"
                    radius="9"
                    color="var(--smoke)"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                  />
                ) : (
                  'Iniciar Pedido'
                )}
              </Submit>
            </div>
          </Form>
        )}
      </Formik>
    </CheckoutDataStyle>
  );
};

export default CheckoutForm;
