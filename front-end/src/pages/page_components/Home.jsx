import * as React from 'react';
import Dinner from '../../components/Main/Dinner';
import Popular from '../../components/Main/Popular';
import {motion} from 'framer-motion';
import Lunch from '../../components/Main/Lunch';
import Breakfast from '../../components/Main/Breakfast';
import Snack from '../../components/Main/Snack';
const Home = () => {

  // Animation used to stagger children on page enter
  const variants = {
    hidden: { opacity: 0},
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className='children'
      variants={variants}
      initial='hidden'
      animate='show'
    >
      {/* <Popular/> */}
      <motion.div variants={item}>
        <Breakfast/>
      </motion.div>
      <motion.div variants={item}>
        <Lunch/>
      </motion.div>
      <motion.div variants={item}>
        <Dinner/>
      </motion.div>
      <motion.div variants={item}>
        <Snack/>
      </motion.div>
    </motion.div>
  )
}

export default Home