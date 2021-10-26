const express = require('express')
const cors = require('cors')
const app = express()
const port = 1000


app.use(cors())
app.use(express.json())
const posts = [
    {
      id: 0,
      title: "Diagnose & Research",
      description: "Diagnosis is central to medical practice. It refers to knowing about the health of a client. Typically, diagnostic research focuses on estimating the sensitivity.",
      img: "https://pro-theme.com/html/health/media/services/1.png"
    },
    {
      id: 1,
      title: "Dental Surgery",
      description: "Dental surgery is any of a number of medical procedures that involve artificially modifying dentition; in other words, surgery of the teeth, gums and jaw bones.",
      img: "https://pro-theme.com/html/health/media/services/2.png"
    },
    {
      id: 2,
      title: "Cancer Oncology",
      description: "Oncology is a branch of medicine that deals with the prevention, diagnosis, and treatment of cancer. A medical professional who practices oncology is an oncologist.",
      img: "https://pro-theme.com/html/health/media/services/3.png"
    },
    {
      id: 3,
      title: "Neurology",
      description: "Neurology is a branch of medicine dealing with disorders of the nervous system. Neurology deals with the diagnosis and treatment of all categories of conditions.",
      img: "https://pro-theme.com/html/health/media/services/4.png"
    },
    {
      id: 4,
      title: "Medical Counseling",
      description: "The Medical Counselling Committee is an organisation under the Directorate General of Health Services affiliated to the Ministry of Health and Family Welfare, Government of India.",
      img: "https://pro-theme.com/html/health/media/services/9.png"
    },
    {
      id: 5,
      title: "Heart Center",
      description: "The Heart Center at Nationwide Children's Hospital has expertise, compassion and the most advanced technologies. As the leader in pediatric care, we offer cardiology services.",
      img: "https://pro-theme.com/html/health/media/services/6.png"
    }
  ]
app.get('/', (req, res) =>{
    res.send('Hello world!!!')
})
// use query
app.get('/posts', (req,res) =>{
    const search = req.query.search
    if (search) {
        const searchResult = posts.filter(post => post.title.toLowerCase().includes(search))
        res.send(searchResult)
    } else {
        res.send(posts)
    }
})

app.post('/posts', (req,res) =>{
    const newTitle =req.body
    newTitle.id = posts.length
    posts.push(newTitle)
    res.json(newTitle)
})

app.get('/posts/:id',(req,res) =>{
    const id = req.params.id
    const post = posts[id]
    res.send(post)

})
app.listen(port, () =>{
    // console.log("connect to the port",port)
})






