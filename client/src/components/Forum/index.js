import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

/*Thought process here is that the Forum would be set up similar 
to the switch case of the Header page and allow us to switch topics?*/
function Forum({ currentTopic, setCurrentTopic }) {
    const topics = [
        'Introduction',
        'Console',
        'Games',
        'Classifieds',
        'Game Journal'
    ];

    const [currentTopic, setCurrentTopic] = useState('Introduction');

    //Not sure if this is the way to do it, would need to then add these components
    const renderTopic = () => {
      switch(currentTopic) {
        case 'Introduction':
          return <Introduction />;
        case 'Console':
          return <Console />;
        case 'Games':
          return <Games />;
        case 'Classifieds':
          return <Classifieds />  
        case 'Game Journal':
          return <GameJournal />;    
      }
    }

    useEffect(() => {
        document.title = currentTopic;
    }, [currentTopic]);

    return (
        <Container>
            <Row>
                { topics.map( link =>(
                    <div className={`${currentTopic === link && 'navActive'}`} key={link}>
                        <span onClick={() => setCurrentTopic(link)} ></span>
                    </div>
                ))}
            </Row>
            <Row>
            { renderTopic(currentTopic) }
            </Row>
        </Container>
    )

}