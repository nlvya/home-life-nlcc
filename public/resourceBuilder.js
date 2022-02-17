const params = window.location.search
const resourceId = new URLSearchParams(params).get('id');
const url = "/api/v1/resources";

const containerDOM = document.querySelector('#container');

const showResource = async () => {
    try {
        const { data: {resource} } = await axios.get(`${url}/${resourceId}`)
        const {content} = resource;
        
        console.log(content)
        const resourceHTML = content.map(elem => {
            console.log('new elem')
            const {class: className, headers, paragraphs} = elem;
            return `
                <div class="${className}">
                    ${headers.map(head => {
                        return `
                            <h1>${head}</h1>
                        `
                    })}
                    ${paragraphs.map(par => {
                        return `
                            <p>${par}</p>
                        `
                    })}
                </div>
            `
        }).join('')
        containerDOM.innerHTML = resourceHTML;
    } catch(error) {
        console.error(error)
    }
}
showResource();