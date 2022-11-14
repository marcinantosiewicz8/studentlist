const student = [{
    name: "Marek",
    surname: "Nowak",
    age: 25,
    student: "Tak",
},
{
    name: "Robert",
    surname: "Dąbal",
    age: 28,
    student: "Nie",
}]

const writelist = () =>{
    let writeout = "";
    for(const task of student){
        writeout += `<li>
        ${task.name}
        </li>
        <li>
        ${task.surname}
        </li>
        <li>
        ${task.age}
        </li>
        <li>
        ${task.student}
        </li>
        <button class = "js-button">Usuń</button>`;
    }
    return writeout;
}

const remove = () => {
    const button = document.querySelectorAll(".js-button");

    button.forEach((button , index) => {
        button.addEventListener("click", () =>{
            student.splice(index , 1);
            render();
        });
    });
}

const clearform = (name , surname, age, jsstudent) => {
    name.value = "";
    surname.value = "";
    age.value = "";
    jsstudent.checked = false;
}

const addstudent = () =>{
    const name = document.querySelector(".js-inpname");
    const surname = document.querySelector(".js-inpsurname");
    const age = document.querySelector(".js-inpage");
    const jsstudent = document.querySelector(".js-student");

    student.push({
        name: name.value,
        surname: surname.value,
        age: age.value,
        student: jsstudent.checked ? "Tak" : "Nie",
    });
    render();

    clearform(name , surname, age, jsstudent);
}
const render = () => {

    const writeoutul = document.querySelector(".js-ul");
    writeoutul.innerHTML = writelist();

    remove();
}

 const stopform = () => {
    const form = document.querySelector(".js-form");
     form.addEventListener("submit", (event) =>{
        event.preventDefault();
        addstudent();
     })
 }
 
const init = () =>{
    stopform();
     render();  
};


init();