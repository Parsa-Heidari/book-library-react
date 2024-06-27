const books = [
    {
        name: "wild heart",
        price: 10,
        author: "author1",
        id: "01",
        img: "https://timvandevall.com/wp-content/uploads/2014/01/Closed-Book-Clip-Art.jpg"
    },
    {
        name: "signs of the past",
        price: 12,
        author: "author1",
        id: "02",
        img: "https://timvandevall.com/wp-content/uploads/2014/01/Closed-Book-Clip-Art-Yellow.jpg"
    },
    {
        name: "mouse of freedom",
        price: 10,
        author: "author2",
        id: "03",
        img: "https://timvandevall.com/wp-content/uploads/2014/01/Closed-Book-Clip-Art-Green-s.jpg"
    },
    {
        name: "a new form",
        price: 13,
        author: "author3",
        id: "04",
        img: "https://timvandevall.com/wp-content/uploads/2014/01/Closed-Book-Clip-Art-Blue.jpg"
    },
    {
        name: "opponent of the nation",
        price: 6.99,
        author: "author4",
        id: "05",
        img: "https://timvandevall.com/wp-content/uploads/2014/01/Closed-Book-Clip-Art.jpg"
    },
    {
        name: "ridin’ to roscoe",
        price: 32,
        author: "author5",
        id: "06",
        img: "https://timvandevall.com/wp-content/uploads/2014/01/Closed-Book-Clip-Art-Yellow.jpg"
    },
    {
        name: "the hunger games",
        price: 16,
        author: "author7",
        id: "07",
        img: "https://timvandevall.com/wp-content/uploads/2014/01/Closed-Book-Clip-Art-Green-s.jpg"
    },
    {
        name: "harry potter and the philosopher’s stone",
        price: 5,
        author: "author2",
        id: "08",
        img: "https://timvandevall.com/wp-content/uploads/2014/01/Closed-Book-Clip-Art-Blue.jpg"
    },
    {
        name: "something",
        price: 20,
        author: "author1",
        id: "09",
        img: "https://timvandevall.com/wp-content/uploads/2014/01/Closed-Book-Clip-Art.jpg"
    },
    {
        name: "twilight",
        price: 9,
        author: "author5",
        id: "10",
        img: "https://timvandevall.com/wp-content/uploads/2014/01/Closed-Book-Clip-Art-Yellow.jpg"
    },
    {
        name: "to kill a mockingbird",
        price: 13,
        author: "author8",
        id: "11",
        img: "https://timvandevall.com/wp-content/uploads/2014/01/Closed-Book-Clip-Art-Green-s.jpg"
    },
]

export const getBooks = () => {
    return (
        books
    )
}

export const getBook = (id) => {
    return books.find(book => book.id == id)
}