import { createContext, useContext, useState } from 'react';
import { useAuth } from './AuthContext';

const BookingContext = createContext();

export const useBooking = () => useContext(BookingContext);

export const BookingProvider = ({ children }) => {
  const [halls, setHalls] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const { api } = useAuth();

  const fetchHalls = async () => {
    setLoading(true);
    try {
      const res = await api.get('/halls');
      setHalls(res.data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const res = await api.get('/bookings');
      setBookings(res.data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const createBooking = async (bookingData) => {
    setLoading(true);
    try {
      const res = await api.post('/bookings', bookingData);
      await fetchBookings();
      return res.data;
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <BookingContext.Provider value={{ halls, bookings, loading, fetchHalls, fetchBookings, createBooking }}>
      {children}
    </BookingContext.Provider>
  );
};

