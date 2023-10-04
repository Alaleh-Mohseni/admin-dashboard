const coursesList = [
    {
        id: '1',
        title: 'react.js',
        des: 'آموزش جامع React.js',
        price: 350000,
        image: '/images/React.png'
    },
    {
        id: '2',
        title: 'next.js',
        des: 'آموزش جامع Next.js',
        price: 450000,
        image: '/images/nextjs-cover.jpg'
    },
    {
        id: '3',
        title: 'javascript',
        des: 'آموزش جاوااسکریپت - دوره جامع',
        price: 350000,
        image: '/images/js.JPEG'
    },
    {
        id: '4',
        title: 'typescript',
        des: 'آموزش تایپ اسکریپت',
        price: 380000,
        image: '/images/Typescript.png'
    },
    {
        id: '5',
        title: 'css',
        des: 'آموزش جامع Css',
        price: 250000,
        image: '/images/css.JPEG'
    },
    {
        id: '6',
        title: 'redux',
        des: 'آموزش جامع Redux',
        price: 280000,
        image: '/images/react-redux.jpg'
    }
]


function getCoursesData(id) {
    let coursesData = coursesList.find(item => item.id === id)

    return coursesData
}

export { coursesList, getCoursesData}