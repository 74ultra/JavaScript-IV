// CODE here for your Lambda Classes

// Person class

class Person {
    constructor(perAttrs){
        this.name = perAttrs.name;
        this.age = perAttrs.age;
        this.location = perAttrs.location;
    }

    speak(){
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}.`);
    }
}


// Instructor class

class Instructor extends Person {
    constructor(instAttrs){
        super(instAttrs)
        this.specialty = instAttrs.specialty;
        this.favLanguage = instAttrs.favLanguage;
        this.catchPhrase = instAttrs.catchPhrase;

    }
    
    demo(subject){
        console.log(`Today we are learning about ${subject}`)
    }

    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }

    giveGrade(student){
        const points = function(){
            let min = Math.ceil(-10);
            let max = Math.floor(10); 
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        student.grade = student.grade + points();
        console.log(`${this.name} has graded an assignment. ${student.name} now has a grade of ${student.grade}`);
    }
        
    

}


// Student class

class Student extends Person {
    constructor(stuAttrs){
        super(stuAttrs)
        this.previousBackground = stuAttrs.previousBackground;
        this.className = stuAttrs.className;
        this.favSubjects = stuAttrs.favSubjects;
        this.grade = stuAttrs.grade
    }

    listsSubjects(){
        this.favSubjects.forEach(function(element){
            console.log(element);
        })
    }

    prAssignment(subject){
        console.log(`${this.name} has submitted a pull request for ${subject}`);
    }

    sprintChallenge(subject){
        console.log(`${this.name} has begun the sprint challenge on ${subject}`);
    }

    readyToGraduate(){
        if(this.grade >= 70){
            console.log(`${this.name} has a grade of ${this.grade} and is ready to graduate.`);
        } else if(this.grade < 70){
            console.log(`${this.name} has a grade of ${this.grade} and is not ready to graduate.`);
        }
    }

}

// PM class

class ProjectManager extends Instructor {
    constructor(pmAttrs){
        super(pmAttrs)
        this.gradClassName = pmAttrs.gradClassName;
        this.favInstructor = pmAttrs.favInstructor;
    }

    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }

    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }

}








// Students

const barney = new Student ({
    name: 'Barney',
    age: 32,
    location: 'Bedrock',
    previousBackground: 'waste management',
    className: 'WEB21',
    favSubjects: ['Javascript', 'LESS', 'React'],
    grade: 80
})

const betty = new Student ({
    name: 'Betty',
    age: 30,
    location: 'Bedrock',
    previousBackground: 'finance',
    className: 'WEB21',
    favSubjects: ['Python', 'SASS', 'Redux'],
    grade: 75
})

const pebbles = new Student ({
    name: 'Pebbles',
    age: 3,
    location: 'Bedrock',
    previousBackground: 'pre-school',
    className: 'WEB21',
    favSubjects: ['C++', 'Node', 'Express', 'Kubernetes'],
    grade: 90
})

const bamBam = new Student ({
    name: 'Bam Bam',
    age: 3,
    location: 'Bedrock',
    previousBackground: 'pre-school',
    className: 'WEB21',
    favSubjects: ['Java', 'Android', 'NoSQL', 'Drupal'],
    grade: 64
})

// Instructor

const fred = new Instructor ({
    name: 'Fred',
    age: 35,
    location: 'Bedrock',
    specialty: 'jQuery',
    favLanguage: 'COBOL',
    catchPhrase: 'Willlllllllmmmaaaaa!'
    
});

const marge = new Instructor ({
    name: 'Marge',
    age: 37,
    location: 'Springfield',
    specialty: 'Clojure',
    favLanguage: 'ClojureScript',
    catchPhrase: 'Oh, Homie!'
    
});

// PM's

const wilma = new ProjectManager ({
    name: 'Wilma',
    age: 33,
    location: 'Bedrock',
    specialty: 'Machine Learning',
    favLanguage: 'Python',
    catchPhrase: 'Well, I never!',
    gradClassName: 'CS3',
    favInstructor: 'Josh'
});

const lisa = new ProjectManager ({
    name: 'Lisa',
    age: 9,
    location: 'Springfield',
    specialty: 'Drupal',
    favLanguage: 'Python',
    catchPhrase: 'Well, actually',
    gradClassName: 'CS2',
    favInstructor: 'Dan'
});

/*
console.log(barney);
barney.listsSubjects();
fred.grade(barney, 'COBOL');

*/


lisa.giveGrade(pebbles);

wilma.giveGrade(bamBam);

lisa.debugsCode(pebbles, 'C++');

bamBam.listsSubjects();

pebbles.readyToGraduate();

bamBam.readyToGraduate();