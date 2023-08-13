const sidebar = document.querySelector(".sidebar")
const bars = document.querySelector(".logo .fa-bars")
const x = document.querySelector(".logo .fa-xmark")
const slider = document.querySelector(".slider")
const sp1 = document.querySelector(".sp1")
const sp2 = document.querySelector(".sp2")
const sp3 = document.querySelector(".sp3")
const botCards = document.querySelector(".cardsBottom")
const barcha = document.querySelector(".barchasi")


const botCards2 = document.querySelector(".cardsBottom2")
const barcha2 = document.querySelector(".barchasi2")


const home = document.querySelector(".home")
const about = document.querySelector(".about")
const blogs = document.querySelector(".blogs")
const contact = document.querySelector(".contact")
const feedback = document.querySelector(".feedback")

const homeA = document.querySelector(".home a")
const aboutA = document.querySelector(".about a")
const blogsA = document.querySelector(".blogs a")
const contactA = document.querySelector(".contact a")
const feedbackA = document.querySelector(".feedback a")

const li = document.querySelector("nav ul li")


function showSidebar() {
    sidebar.style.transform = "translateX(0)"
    bars.style.display = "none"
    x.style.display = "block"

}

function hideSidebar() {
    sidebar.style.transform = "translateX(-700px)"
    bars.style.display = "block"
    x.style.display = "none"
}

function slide() {
    slider.style.justifyContent = "start"
    sp1.style.background = "white"
    sp2.style.background = "#00000000"
    sp3.style.background = "#00000000"

}
function slide2() {
    slider.style.justifyContent = "center"
    sp1.style.background = "#00000000"
    sp2.style.background = "white"
    sp3.style.background = "#00000000"

}
function slide3() {
    slider.style.justifyContent = "end"
    sp1.style.background = "#00000000"
    sp2.style.background = "#00000000"
    sp3.style.background = "white"

}

function viewAll() {
    botCards.style.display = "flex"
    barcha.style.display = "none"
}

function viewAll2() {
    botCards2.style.display = "flex"
    barcha2.style.display = "none"
}



// NAV ACTIVES


function Home() {
    home.style.border = "2px solid #fff"
    homeA.style.color = "blueviolet"
    BlogsDefault()
    AboutDefault()
    ContactDefault()
    FeedbackDefault()
}
function About() {
    about.style.border = "2px solid #fff"
    aboutA.style.color = "blueviolet"
    BlogsDefault()
    HomeDefault()
    ContactDefault()
    FeedbackDefault()
}
function Blogs() {
    blogs.style.border = "2px solid #fff"
    blogsA.style.color = "blueviolet"
    HomeDefault()
    AboutDefault()
    ContactDefault()
    FeedbackDefault()
}
function Contact() {
    contact.style.border = "2px solid #fff"
    contactA.style.color = "blueviolet"
    BlogsDefault()
    AboutDefault()
    HomeDefault()
    FeedbackDefault()
}
function Feedback() {
    feedback.style.border = "2px solid #fff"
    feedbackA.style.color = "blueviolet"
    BlogsDefault()
    AboutDefault()
    ContactDefault()
    HomeDefault()
}




// DEFFAULT STATES

function AboutDefault() {
    about.style.border = "2px solid rgba(255, 0, 0, 0)"
    aboutA.style.color = "white"
}
function HomeDefault() {
    home.style.border = "2px solid rgba(255, 0, 0, 0)"
    homeA.style.color = "white"
}
function ContactDefault() {
    contact.style.border = "2px solid rgba(255, 0, 0, 0)"
    contactA.style.color = "white"
}
function BlogsDefault() {
    blogs.style.border = "2px solid rgba(255, 0, 0, 0)"
    blogsA.style.color = "white"
}
function FeedbackDefault() {
    feedback.style.border = "2px solid rgba(255, 0, 0, 0)"
    feedbackA.style.color = "white"
}