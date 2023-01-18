import Head from 'next/head'
import Image from 'next/image'
import Homescreen from '../src/screens/Homescreen'
import styles from '../styles/Home.module.css'
import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { productActions } from '../src/store/index';
import Footer from '../src/components/Footer';
import { serverHost } from '../src/components/Card4';



export default function Home(data: []) {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(productActions.addToData(data))
  }, [])

  return (
    <Fragment>
      <div className=''>

        <Homescreen />
      </div>
    {/* <Footer /> */}
    </Fragment>
  )
}


export async function getServerSideProps() {
  const res = await fetch(`${serverHost}/popular_products`);
  const data = await res.json()
  return { props: { data } }
}