import { useSelector } from 'react-redux';
import MyOrderCard from './CardMyOrders';
import { MyOrdersContainerStyled } from './CardsMyOrdersStyles';
import { TailSpin } from 'react-loader-spinner';

const MyOrdersCards = () => {
  const { orders, loading, error } = useSelector((state) => state.orders);

  if (loading && !orders) {
    return (
      <TailSpin
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    );
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <MyOrdersContainerStyled>
      {orders?.length ? (
        orders.map((order) => <MyOrderCard key={order._id} {...order} />)
      ) : (
        <h2>What are you waiting for to place an order?</h2>
      )}
    </MyOrdersContainerStyled>
  );
};

export default MyOrdersCards;
