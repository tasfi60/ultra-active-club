import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import './Ques.css'

const Ques = () => {
    return (
        <div className='ques-container'>
            <h2>Important Questions</h2>

      <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    How does react works?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser's DOM.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        What is the difference between props and state?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    What else does UseEffect do  except data loading through API?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p> UseEffect does the following actions :
                        <li>Add an event listener for a button</li>
                        <li>Perform an action when state or props change</li>
                        <li>Clean up event listeners when the component unmounts</li>
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
            
           
     
     </div>
    );
};

export default Ques;