// {/* <div>
//       <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
//       <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
//       <h1>React Tinder Card</h1>
//       <div className='cardContainer'>
//         {characters.map((character) =>
//           <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
//             <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
//               <h3>{character.name}</h3>
//             </div>
//           </TinderCard>
//         )}
//       </div>
//       {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
//     </div>
//   )
// } */}

import styled from "styled-components";



export const Wrapper =styled.div`
 text-align: center;
    display: flex;
    justify-content: center;
    width: 100vw;
    min-height: 50vh;
    overflow: hidden;
    background: linear-gradient(#fff, #999);
    background: linear-gradient(#e66465, #9198e5);
`


export const Container = styled.div`

margin-top: 0%;
width: 45vw;
  max-width: 260px;
  height: 300px;
  :hover{
    cursor: pointer;
    
  
  }
`





