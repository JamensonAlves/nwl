const proffys = [
    {
    name:"Diego Fernandes",
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp:81996753487,
    bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject:"Chemistry",
    cost: "20",
    weekday:[1],
    time_from:["720"],
    time_to:["1220"]

},
{
    name:"Diego Fernandes",
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp:81996753487,
    bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject:"Chemistry",
    cost: "20",
    weekday:[1],
    time_from:["720"],
    time_to:["1220"]

}
]
function pageLanding(req, res){
    return res.render("index.html") 
}
function pageStudy(req, res){
    return res.render("study.html")

}
function pageGiveClasses(req, res){
    return res.render("give-classes.html")
}



const express= require('express')
const server = express()
const nunjucks = require('nunjucks')
//nunjucks configuration
nunjucks.configure('src/views', {
    express:server,
    noCache:true,
}
)
server
//Configure static files (css,html, images)
.use(express.static("public"))
//app routes
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)