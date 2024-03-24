import {EXAMPLES} from '../data'
import Tabs from './Tabs';
import TabButton from "./TabButton";
import Section from './Section';
import { useState } from "react";

export default function Examples(){

    const [selectedButton, setSelectedButton] = useState()

    function handleSelect(selectedButton){
    setSelectedButton(selectedButton)
    }

    let tabContent = (!selectedButton ? 
      <p>Please select a topic.</p> : 
      <div id="tab-content">
        <h3>{EXAMPLES[selectedButton].title}</h3>
        <p>{EXAMPLES[selectedButton].description}</p>
        <pre>
          <code>
          {EXAMPLES[selectedButton].code}
          </code>
        </pre>
      </div> )

    return (
        <Section id="examples" title="Examples">
          <Tabs buttons={
            <>
            <TabButton onClick={()=>{handleSelect('components')}} current={selectedButton}>Components</TabButton>
            <TabButton onClick={()=>{handleSelect('jsx')}} current={selectedButton}>JSX</TabButton>
            <TabButton onClick={()=>{handleSelect('props')}} current={selectedButton}>Props</TabButton>
            <TabButton onClick={()=>{handleSelect('state')}} current={selectedButton}>State</TabButton>
            </>
          }>
            {tabContent}
          </Tabs>
        </Section>
    )
}