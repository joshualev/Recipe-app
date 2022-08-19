import * as React from 'react';
import Dinner from '../../components/Main/Dinner';
import Popular from '../../components/Main/Popular';
import {motion} from 'framer-motion';
import Lunch from '../../components/Main/Lunch';
import Breakfast from '../../components/Main/Breakfast';
import Snack from '../../components/Main/Snack';
const Home = () => {
  return (
    <motion.div
    // Fade in on page enter
    animate={{opacity:1}}
    initial={{opacity:0}}
    // Fade out on leaving page
    exit={{opacity:0}}
    // animation duration(s)
    transition={{duration: 0.5}}
  >
    <Popular/>
    <Breakfast/>
    <Lunch/>
    <Dinner/>
    <Snack/>
  </motion.div>
  )
}

export default Home