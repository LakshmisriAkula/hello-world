const person = {
    firstName : "James",
    lastName : "Aaron",
    getPersonDetails : function(city,office){
      console.log(`The person name is ${this.firstName} ${this.lastName} lives in ${city} works in ${office}`)
    },
}

const human = {
    firstName : "Julia",
    lastName : "Carter",
}

person.getPersonDetails.call(human,"vizag","sansid")
