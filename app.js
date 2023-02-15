const express = require('express')
const app = express()
const mongoose = require('mongoose')


app.set('view engine', 'ejs')

app.use('/contact', function(request, response){
    response.render('contact',{
        title: 'Мои контакты',
        emailsVisible: true,
        emails: ['ruslandyusebaev5@gmail.com'],
        phone: '87073286605',
    })
})


app.use("/fio", function(request, response){
    response.render("fio",{
        title: 'ФИО',
        fioVisible: true,
        fio: ['Дюсебаев Руслан Ерланович'],
    })
})

app.use("/info", function(request, response){
    response.render("info",{
        title: 'Обо мне',
        infoVisible: true,
        info: ['Доброе времени суток это мое первое интервью о себе на сайте!'],
    })
})

app.use("/dopinfo", function(request, response){
    response.render("dopinfo",{
        title: 'Мои увлечения',
        dopinfoVisible: true,
        dopinfo: ['Я увлекаюсь волейболом, учебой и саморазвитием в сфере жизненого пути'],
    })
})

app.use("/navik", function(request, response){
    response.render("navik",{
        title: 'Краткая информация',
        navikVisible: true,
        navik: ['Знаю такие программы как: Unity,  Visual Studio, Visual Studio Code'],
    })
})

app.use("/znania", function(request, response){
    response.render("znania",{
        title: 'Мои знания языков',
        znaniaVisible: true,
        znania: ['Я знаю не совсем много  языков, такие как: HTMl, C++, C#'],
    })
})

app.use('/', function (request, response){
    response.render('partials/menu.ejs')
   
})

app.listen(3000)