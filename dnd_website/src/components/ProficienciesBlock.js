import React from "react";
import Container from "react-bootstrap/Container";

const Proficiencies = () => {
    return(
        <Container className="saving-throws-proficiencies border-red-square proficiencies-box-height">
            <div className="mt-3">
                <div>ARMOR</div>
                <span>Heavy Armor,Light Armor,Medium Armor,Shield</span>
            </div>
            <hr/>
            <div>
                <div>WEAPONS</div>
                <span>Heavy Armor,Light Armor,Medium Armor,Shield</span>
            </div>
            <hr/>
            <div>
                <div>TOOLS</div>
                <span>Heavy Armor,Light Armor,Medium Armor,Shield</span>
            </div>
            <hr/>
            <div className="mb-3">
                <div>LANGUAGES</div>
                <span>Heavy Armor,Light Armor,Medium Armor,Shield</span>
            </div>
            <div className="position-absolute">PROFICIENCIES & LANGUAGES</div>
        </Container>
    )
}

export default Proficiencies;