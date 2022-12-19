import React, { useRef } from 'react';
import styles from './LandingPage.module.css';
import logo from '../../Assets/logo.png';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getHomeAll } from '../../Redux/actions';
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  Divider,
  Center,
} from '@chakra-ui/react';
import phone from '../../Assets/phone.jpg';
import tablet from '../../Assets/tablet.png';
import computer from '../../Assets/computer.png';
import Pricing from '../UserData/Register/Pricing.jsx';
import Footer from '../Home/Chakra UI Components/Footer';
import { color } from '../globalStyles';

export default function LandingPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getHomeAll());
    if (user) {
      navigate('/home');
    }
  }, [dispatch]);

  let refMenuBtn = useRef();
  let list = useRef();
  let refCloseBtn = useRef();

  const handleToggleMenu = (e) => {
    if (refMenuBtn.current.id === '5') {
      refMenuBtn.current.id = refCloseBtn.current.id;
      list.current.style.display = 'flex';
    } else {
      refMenuBtn.current.id = '5';
      list.current.style.display = 'none';
    }
  };

  return (
    <Box className={styles.background}>
      <Flex className={styles.nav}>
        <Image
          boxSize={{ base: '120px', sm: '150px' }}
          className={styles.logo}
          src={logo}
          alt="logo"
        />
        <Box className={styles.list} ref={list}>
          <Text marginBottom={'20px'} className={styles.sign}>
            <Link to={'/register/start'}>Register </Link>
          </Text>
          <Text className={styles.sign}>
            <Link to={'/login/start'}>Log In </Link>
          </Text>

          <Box className={styles.nav__close}>
            <Text
              className={styles.close}
              ref={refCloseBtn}
              id={'6'}
              onClick={handleToggleMenu}
            >
              Close
            </Text>
          </Box>
        </Box>
        <Box className={styles.nav__toggle}>
          <Text
            className={styles.menu}
            ref={refMenuBtn}
            id={'5'}
            onClick={handleToggleMenu}
          >
            Menu
          </Text>
        </Box>
      </Flex>
    