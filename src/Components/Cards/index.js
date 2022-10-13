import React, { useState } from 'react'
// import TinderCard from '../react-tinder-card/index'
import TinderCard from 'react-tinder-card'
import { Wrapper, H1, Container} from './CardsElements'



const db = [
    {
      name: 'עובד בניין' ,
      url: './Media/constraction.jpg'
    },
    {
      name: 'איש מכירות',
      url: 'salesMan'
    },
    {
      name: 'מוקד טלפוני',
      url: 'phoneSale'
    },
    {
      name: 'סדרן בחנות סלים',
      url: 'basketWorker'
    },
    {
      name: 'מלצר ארועים',
      url: 'waiter'
    }
  ]

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
      <H1>React Tinder Card</H1>
      <Wrapper className='cardContainer'>
      
        {characters.map((character) =>
          <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
            <Container style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
              <h3>{character.name}</h3>
            </Container>
          </TinderCard>
        )}
      </Wrapper>
    </div>
  )
}

export default Simple