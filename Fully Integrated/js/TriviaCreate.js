var users = JSON.parse(localStorage.getItem("users"));
var currentuser = JSON.parse(localStorage.getItem("currentuser"));

function account() {
    for (i = 0; i < users.length; i++) {
        if (currentuser == users[i].username)
            return i
    }
}

quizzes = JSON.parse(localStorage.getItem("quizzes"));


if(quizzes == null || quizzes == undefined){
    quizzes = []
    localStorage.setItem("quizzes", JSON.stringify(quizzes));
}

userquizzes = users[account()].quizzes


if(userquizzes == null || userquizzes == undefined){
    users[account()].quizzes = []
    localStorage.setItem("users", JSON.stringify(users));
    location.reload()
}


//===========================================================================================================================//


window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


function setAttributes(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}



//Creates correct amount of inputs for user to enter questions and options
function clickcounter() {

    var parent2 = document.getElementById("newquiz");

    //Checks and removes what's inside newquiz
    while (parent2.firstChild) {
        parent2.removeChild(parent2.firstChild);
    }


    var questions = document.getElementById("qnnum").value;
    var clicks = 0;


    for (clicks = 0; clicks < questions; clicks++) {

        if (clicks < 10) {
            var container = document.createElement("div")
            var createtext = document.createElement("h4");
            var create = document.createElement("input");

            setAttributes(container, {
                "class": "row justify-content-center",
                "style": "\
                border: 1px solid gray;\
                margin: 20px 0;\
                "
            })

            createtext.innerText = `Question ${clicks + 1}:`;

            setAttributes(create, {
                "class": "form-control input-md questions col-10",
                "type": "text",
                "name": "question",
                "placeholder": "Type your question here..."
            });

            setAttributes(createtext, {
                "style": "margin-top: 40px; border-bottom: 1px solid yellowgreen;",
                "class": "col-12 text-center"
            })

            container.appendChild(createtext);
            container.appendChild(create);
            create.id = "question" + clicks;

            for (i = 0; i < 3; i++) {

                var div = document.createElement("div")

                div.className = "row justify-content-start"
                setAttributes(div, {
                    "style": "border: 1px solid gray; margin:20px;"
                })

                var label = document.createElement("label")

                setAttributes(label, {
                    "for": `option${clicks}${i}`,
                    "style": "margin-top: 20px;",
                    "class": "col-12 text-center",
                })
                label.innerHTML = "Answer " + (i + 1)


                var options = document.createElement("input");

                setAttributes(options, {

                    "class": "form-control input-md options col-11",
                    "type": "text",
                    "name": "setoption",
                    "placeholder": "Type your options here...",
                    // "style": "float:right;"
                });


                var radio = document.createElement("input");

                setAttributes(radio, {
                    "class": "form-control pull-left radio col-1",
                    "type": "radio",
                    "name": "options",
                    "style": "width: 1.2em; height: 1.2em; margin-top:10px;",
                    "name": "group" + clicks,
                });

                div.appendChild(label)
                div.appendChild(radio);
                div.appendChild(options);


                container.appendChild(div)
                options.id = "option" + clicks + i;

            }

            parent2.appendChild(container)

        }
    }

    var submit = document.createElement("input");
    setAttributes(submit, {
        "class": "btn btn-success col-12",
        "type": "submit",
        "onclick": "storequiz()",
        "value": "Submit",
        "style": "margin-top: 40px; font-size: 30px;"
    });
    parent2.appendChild(submit);

};



//Checks if user has filled up required field before proceeding to execute clickcounter() //Works

function checkval() {

    var questions = document.getElementById("qnnum").value;
    var quizname = document.getElementById("quizname").value;
    var imglink = document.getElementById("getimg").value;

    if (questions == "" && quizname == "" && imglink == "") {
        alert("Please fill up the field(s) with the required information.");
    }
    else {
        clickcounter();
    }
}




function checkradio() {
    answers = []

    for (i = 0; i < document.getElementById("qnnum").value; i++) {

        bull = []

        for (q = 0; q < 3; q++) {
            if (document.querySelectorAll("input[name='group"+ i + "']")[q].checked == false) {
                bull.push("-1");
            }
            else {
                bull.push("1")
            }

        }


        for (ans = 0; ans < 3; ans++) {
            // console.log(bull)
            if (bull[ans] === "1") {
                answers.push(ans)
            }
        }

        

    }
   
    return answers
}




//Resets everything in the create quiz
function resetchild() {
    var parent = document.getElementById("newquiz");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    document.getElementById("creating").reset();
}



function storequiz() {
    
    if (checkradio().length < document.getElementById("qnnum").value) {
        alert("Please indicate the correct answer by selecting the corresponding radio button.");
    }

    else {

    

        var quiz = {
            name: "",
            by: currentuser,
            img: "https://imageog.flaticon.com/icons/png/512/44/44386.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF",
            question: [],
            options: [],
            answers: [],
        };

        quiz.answers = checkradio()

        //For quizname
        quiz.name = document.getElementById("quizname").value

        //For image of quiz
        if (document.getElementById("getimg").value === "") {
        }
        else {
            quiz.img = document.getElementById("getimg").value
        }


        for (iq = 0; iq < document.getElementById("qnnum").value; iq++) {


            if (document.getElementById("question" + iq).value === "") {
                quiz.question.push("Question" + (iq + 1))
            }

            else {
                quiz.question.push(document.getElementById("question" + iq).value)
            }

            option = []

            for (q = 0; q < 3; q++) {
                if (document.getElementById("option" + iq + q).value === "") {

                    option.push("Answer" + q)
                }
                else {
                    option.push(document.getElementById("option" + iq + q).value)
                }

            }

            quiz.options.push(option)
        }

        quizzes.push(quiz)

        userquizzes.push(quiz)
        users[account()].quizmade += 1
 
        localStorage.setItem("quizzes", JSON.stringify(quizzes));
        localStorage.setItem("users", JSON.stringify(users));

        location.reload()
    }
}

for(uq = 0; uq < userquizzes.length; uq++){

    uqcont = document.getElementById("currentuserquizzes")
    console.log(uq);

    (function(qq){
        console.log(qq)
        div = document.createElement("div");
        div.id = "userquizno" + qq
        div.class = "col-3"
    
        img = document.createElement("img")
        img.src = userquizzes[qq].img
    
        title = document.createElement("h3");
        title.innerHTML = "Title: " + userquizzes[qq].name
    
        createdby = document.createElement("h4");
        createdby.innerHTML = "By: " + userquizzes[qq].by
    
        no_of_questions = document.createElement("h4");
        no_of_questions.innerHTML = "No. of questions: " + userquizzes[qq].question.length
    
        // var button = document.createElement("button")
        // button.className = "btn btn-danger"
        // button.innerHTML = "Remove"

        // button.onclick = function(){
        //     identifier = findtodo(`${planlist[aa].day}${planlist[aa].timeStart}${planlist[aa].timeEnd}${planlist[aa].TDL}${planlist[aa].remark}`)
        //     todostuff.removeChild(todostuff.childNodes[identifier])
        //     console.log(identifier)
            
        //     planlist.splice(identifier, 1);
        //     localStorage.setItem("users", JSON.stringify(users));
        //     location.reload();
        // }
        div.appendChild(img)
        div.appendChild(title)
        div.appendChild(createdby)
        div.appendChild(no_of_questions)
        // div.appendChild(button)

        uqcont.appendChild(div)
        
    })(uq);

}


