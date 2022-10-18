import React, { useState } from 'react'
// import TinderCard from '../react-tinder-card/index'
import TinderCard from 'react-tinder-card'
import { Wrapper, Container} from './CardsElements'



const db = [
    {
      name: 'עובד בניין' ,
      url: 'https://cdn.pixabay.com/photo/2016/06/13/09/40/carpenter-1453880__340.png'
    },
    {
      name: 'איש מכירות',
      url: 'https://cdn.pixabay.com/photo/2018/04/21/00/53/salesman-3337462__340.png'
    },
    {
      name: 'מוקד טלפוני',
      url: 'https://media.istockphoto.com/vectors/man-who-works-with-a-smile-vector-id1354188268?b=1&k=20&m=1354188268&s=170667a&w=0&h=cpnNZcZdEZYPxFiIvVh5UMktvh3jArCqbvTdhdeOotg='
    },
    {
      name: 'סדרן בחנות ',
      url: 'https://media.istockphoto.com/vectors/young-woman-engaged-in-shopping-and-checkout-her-purchases-vector-id1073204892?b=1&k=20&m=1073204892&s=170667a&w=0&h=0iPys-oSNebUc_kE2cmOFCweS19SZeu9bvJ2e7EmZxM='
    },
    {
      name: 'מלצר ',
      url: 'https://cdn.pixabay.com/photo/2017/11/14/08/39/cartoon-character-2947794__340.jpg'
    }
  ]
  function Nav(){
    console.log('random job generator')
    return(
     
    <>
      
      <a href='https://writingexercises.co.uk/random-job-generator.php' />
    </>)
  }  
  

function Simple () {
  const characters = db
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  return (
    <div>
      <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
      
      <Wrapper className='cardContainer'>
      
        {characters.map((character) =>
          <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
            
            <Container
            onClick={Nav}
              style={{ backgroundImage: 'url(' + character.url + ')' }}
              className='card'>
              <h3>{character.name}</h3>
            </Container>
          </TinderCard>
          
        )};
      </Wrapper>
    </div>
    
    
  )
}


export default Simple;