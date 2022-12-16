import Head from 'next/head'
import Image from 'next/image'
import Homescreen from '../src/screens/Homescreen'
import styles from '../styles/Home.module.css'
import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { productActions } from '../src/store/index';

async function getData() {
  const res = await fetch('http://127.0.0.1:8000/popular_products');
  const data = await res.json()
  return data


}



export default function Home(data: []) {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(productActions.addToData(data))
  }, [])

  return (
    <Fragment>
      <div>

        <Homescreen />
      </div>

    </Fragment>
  )
}


export async function getServerSideProps() {
  const res = await fetch('http://127.0.0.1:8000/popular_products');
  const data = await res.json()
  return { props: { data } }
}