import React from 'react';

const PRPMO_CODE_JSON = `[
    {
        "id": 1,
        "code": "PJTNSL"

    },
    {
        "id": 2,
        "code": "GJNTKE"

    },
    {
        "id": 3,
        "code": "FJNDDL"

    },
    {
        "id": 4,
        "code": "QHGNLD"

    },
    {
        "id": 5,
        "code": "FJNRLS"
    },
]`;

let PropmoCodes = JSON.parse(PROMO_CODE_JSON)
function RandomPromoCode(){
    return PropmoCodes.id[Math.floor(Math.random()*propmoCodes.code.lengh)];
}

class PromoCode extends React.Component {
    constructor(props){
        super(props);
        this.propmoCodes = JSON.parse(PRPMO_CODE_JSON);
        this.state = {
            openIds: []
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(id){
        let openIds = this.openIds
    }
    render(){
        return(
            <div>
                <p></p>
            </div>

        );
    }
}

export default PromoCode;