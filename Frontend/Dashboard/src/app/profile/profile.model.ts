class Profile{
    constructor(
        public imgLogo : string,
        public name : string,
        public description : string,
        public neighborhood : string,
        public address : string,
        public horary : string,
        public telephone : string,
        public email : string,        
        public intagram : string,
        public facebook : string,
        public paymentOption : PaymentTypes[] = []
    ){}
}

class PaymentTypes{
    constructor(
        public label: string, 
        public value:any
    ){}
}

export{ Profile, PaymentTypes}