let ecommerceData = [
    {
    	id: 1,
    	title: 'jeans',
    	category: "men",
    	image: 'https://i.pinimg.com/originals/bb/e4/02/bbe402b55933423bc1779b8355239ded.png',
    },
     {
    	id: 2,
    	title: 'T- Shirt',
    	category: "men",
    	image: 'https://lh3.googleusercontent.com/proxy/q4udw8OAVrNthTArhlXZdL-kaC_fZDNPIOZxeVfkAV1TQQqbGjOuemX2M_Xa5OJCBr80R4OD2-RKj0Bkawnz1srgzTO-HgpFDfByfpzNscVd7-0BCMB8Gi_1S2ZOHjkMa4519C7l',
    },
    {
    	id: 3,
    	title: 'Jacket',
    	category: "men",
    	image: 'http://assets.stickpng.com/images/580b57fbd9996e24bc43bf2c.png'
    },
     {
    	id: 4,
    	title: 'Bike',
    	category: "vehicle",
    	image: 'https://lh3.googleusercontent.com/proxy/uh8dNkH4TVRAFvfI1R5nLQYTV1JX8Jt1c_YKLkKH3Ouul_bTwBdqTYDfTCJwXkGWhWyF1psaveQwY-tFnPWqvJWWV6OG1PpezCUMtA5Efxpsq3WzXsXENddZ'
    },
     {
    	id: 5,
    	title: 'Car',
    	category: "vehicle",
    	image: 'https://lh3.googleusercontent.com/proxy/fcktedKp6ME1gX5aKWPvGLxjODDhPufm5C6tJYaH5NRaNTPncAFrh0ibLDckF_QzAWsNlr9QZFYyJM14tm7CBGKBgIo7mPo9VQnZg5Lyi447WZzFt64h-N5AShWW'
    },
     {
    	id: 6,
    	title: 'Bicycle',
    	category: "vehicle",
    	image: 'https://www.pngkey.com/png/full/840-8401859_hero-cycle.png'
    },
     {
    	id: 7,
    	title: 'Computer',
    	category: "electronics",
    	image: 'https://cdn.pixabay.com/photo/2016/05/27/05/39/computer-1419134_960_720.png'
    },
     {
    	id: 8,
    	title: 'Laptop',
    	category: "electronics",
    	image: 'https://lh3.googleusercontent.com/proxy/Y5j2wgY9QHoVAhOMbGcPZrto_0PUgKglUO_o36Gv6gWylhqbhNzPMVtd9SzpR9THV5fIs4qCQyHXPKNL9VAuPXB5HuCXsIdRiUTErEA6b8yNAP9Uobo7M9JZp5KmFEZGrcyyn1I'
    },
     {
    	id: 9,
    	title: 'refrigerator',
    	category: "electronics",
    	image: 'https://lh3.googleusercontent.com/proxy/8ZxJCUzzKiUMHaQmrtwPLRGwC4oFwr0qnJ5AbJ_x2Wlj_695yk8yinr_VBxxFOlkKgaBGJmRKf-i1lo2H8vKYel4-FwSkeQSnS_A5dpMqeUDqA2kjBdFyJ0'
    },
     {
    	id: 10,
    	title: 'washing machine',
    	category: "electronics",
    	image: 'https://www.freepnglogos.com/uploads/washing-machine-png/washing-machine-washing-machines-front-load-washers-electrolux-0.png'
    }
]



function filterdata (category) {
	let filtertype
	switch (category) {
		case 'all': filtertype = "all"
		break
		case 'men': filtertype = "men"
		break
		case 'vehicle': filtertype = "vehicle"
		break
		case 'electronics': filtertype = "electronics"
		break
	}

	function filterdata () {
		 return ecommerceData.filter((item) => {
            return item.category === filtertype
        })
	}

	let afterFilter 
    if (category === 'all') {
        afterFilter = ecommerceData
    } else {
        afterFilter = filterdata (filtertype)
    }

    if (category !== 'all') {
        let container = document.getElementById('container')
        let newContent = document.createElement('div')
        newContent.classList.add("card-section");
        newContent.setAttribute('id', 'container')

        let c = document.getElementById('card')
        c.replaceChild(newContent, container)
    }

     afterFilter.map((item) => {

        let img = document.createElement('img')
        img.src = item.image
        img.alt = item.title

        let p = document.createElement('p')
        p.innerText = item.title

        let container = document.getElementById('container')
        container.appendChild(img)
        container.appendChild(p)
    })

}
