// explore documentById
let tag = document.getElementById("blog-head");
 tag.style.fontSize = "42px";
 tag.style.color = "orange";
 tag.style.border = "2px solid gray";
 tag.style.padding = "10px";
 tag.style.width = "18%";
 tag.style.margin = "0 auto";
tag.style.backgroundColor = "black";
//  attribute set in tag
tag.setAttribute('title', 'My awesome blog')
//  get attribute in tag
tag.getAttribute('title')


// explore  documentByTagName
const section = document.getElementById("blogs");
const div = document.createElement("div");
div.innerHTML = `
            <article>
                <h3>Blog-4</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, est. Ducimus cupiditate quia perspiciatis optio? Quo, repellat pariatur? Perspiciatis dolore dolorum ut dicta nisi eum sunt qui quis! Enim, tenetur?</p>
            </article>
`;
section.appendChild(div);

let blog = document.getElementsByTagName("h3");
for (const h3 of blog) {
    h3.style.color = "crimson"
    h3.style.fontSize = "24px"
    h3.style.textAlign = "center"
}
let article = document.getElementsByTagName("article");
for (const art of article) {
    art.style.backgroundColor = "lightblue"
    art.style.padding = "15px 30px"
    art.style.margin = "15px auto"
    art.style.width = "50%"
    art.style.borderRadius = "10px"
    art.style.border = "2px solid red"
    art.style.boxShadow = "rgb(0 0 0 / 55%) 0px 3px 10px";
}

// explore documentsByClassName
// create a element
const li = document.createElement("li");
li.innerText = "link-5";
const ul = document.getElementById("nav");
ul.appendChild(li);

