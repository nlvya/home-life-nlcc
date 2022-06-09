const params = window.location.search
const resourceId = new URLSearchParams(params).get('id');
const url = "/api/v1/resources";

// console.log(resourceId)
// console.log(resourceName)

const containerDOM = document.querySelector('#container');

const showResource = async () => {
    try {
        console.log(resourceId)
        const { data: {resource} } = await axios.get(`/api/v1/resources/${resourceId}`)
        // const {resources} = resource;
        console.log(resource)
        
        const {content} = resource;
        const resourceHTML = content.map((elem, index) => {
            // console.log('new elem')
            const {class: className, headers, paragraphs, background} = elem;
            // console.log(background)
            return `
                <div class="section" id="section${index}">
                    <h1>${className}</h1>

                    <h2>Headers</h2>
                    ${headers.map((header, index) => {
                        return `
                            <input type="text" class="header" id="header${index}" value="${header}"></input> <br/>
                        `
                    }).join('')}
                    <button>Add Header</button>
                    
                    <h2>${paragraphs.length ? 'Paragraphs' : 'No Paragraphs Found'}<h2>
                    ${paragraphs.map((par, index) => {
                        return `
                            <textarea class="paragraph" id="paragraph${index}">${par}</textarea> <br/>
                        `
                    }).join('')}
                    <button>Add Paragraph</button>

                    <h2>Background Image</h2>
                    <label for="hasBackground">has background</label>
                    <input type="checkbox" name="hasBackground" id="backgroundCheckbox"></input>
                    <input type="text" id="backgroundURL" value="${background[1]}"></input>
                </div>
            `
        }).join('')
        containerDOM.innerHTML = resourceHTML;
    } catch(error) {
        console.error(error)
    }
}
showResource();

const updateResource = () => {
    const sections = document.getElementsByClassName('section');
    console.log(sections)
    // const headers = document.getElementsByClassName('header');
    // const paragraphs = document.getElementsByClassName('paragraph')
}