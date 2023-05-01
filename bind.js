const person = {
    firstName : "James",
    lastName : "Aaron",
    getPersonDetails : function(){
      console.log(`The person name is ${this.firstName} ${this.lastName}`)
    },
}

const human = {
    firstName : "Julia",
    lastName : "Carter",
}

let memberDetails = person.getPersonDetails.bind(human)
memberDetails()