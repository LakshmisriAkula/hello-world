const person = {
    firstName : "James",
    lastName : "Aaron",
    getPersonDetails : function(city){
      console.log(`The person name is ${this.firstName} ${this.lastName} lives in ${city}`)
    },
}

const human = {
    firstName : "Julia",
    lastName : "Carter",
}

person.getPersonDetails.call(human,"vizag")
